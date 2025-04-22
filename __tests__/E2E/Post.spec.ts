import { test, expect } from '@playwright/test';

test.describe('Blog Post Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/Blog');
  });

  test('should navigate to post details and display content correctly', async ({ page }) => {
    await expect(page).toHaveURL('/Blog');

    await page.waitForSelector('.postCard');
    const firstPost = page.locator('.postCard').first();
    await firstPost.locator('h3').waitFor({ state: 'visible' });
    await firstPost.click();

    await expect(page.url()).toContain('/Blog/posty/');

    await expect(page.locator('article')).toBeVisible();
    await expect(page.locator('.postInfo')).toBeVisible();
    await expect(page.locator('.tableOfContents')).toBeVisible();
    await expect(page.locator('#similar')).toBeVisible();
  });

  test('should handle non-existent post URLs correctly', async ({ page }) => {
    await page.goto('/Blog/posty/nieistniejacy-post');

    await expect(page.locator('text="Nie znaleziono takiego postu"')).toBeVisible();

    const backLink = page.locator('text="Przejdź do strony głównej"');
    await expect(backLink).toBeVisible();
    await backLink.click();
    await expect(page).toHaveURL('/blog');
  });
});
