import { test, expect } from "@playwright/test";

test.describe("Protected Routes Redirects", () => {
  test.beforeEach(async ({ page }) => {
    await page.context().clearCookies();
  });

  test("should redirect from /Thanks/ebook to / when not authenticated", async ({
    page,
  }) => {
    try {
      await page.goto("/Thanks/ebook");
      await expect(page).toHaveURL("/");
    } catch (error) {
      console.error("Test failed:", error);
      throw error;
    }
  });

  test("should redirect from /Thanks/note to / when not authenticated", async ({
    page,
  }) => {
    try {
      await page.goto("/Thanks/note");
      await expect(page).toHaveURL("/");
    } catch (error) {
      console.error("Test failed:", error);
      throw error;
    }
  });

  test("should handle network errors gracefully", async ({ page }) => {
    await page.route("**/*", route => route.abort("internetdisconnected"));
    
    try {
      await page.goto("/Thanks/ebook");
      await expect(page.getByText(/Nie można połączyć się z serwerem/i)).toBeVisible();
    } catch (error) {
      console.error("Network error test failed:", error);
      throw error;
    }
  });
});
