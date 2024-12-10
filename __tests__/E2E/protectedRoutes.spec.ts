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
});
