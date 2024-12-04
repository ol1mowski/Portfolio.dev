import { test, expect } from "@playwright/test";

test.describe("Protected Routes Redirects", () => {
  test("should redirect from /Thanks/ebook to / when not authenticated", async ({
    page,
  }) => {
    await page.goto("/Thanks/ebook");

    await expect(page).toHaveURL("/");
  });

  test("should redirect from /Thanks/note to / when not authenticated", async ({
    page,
  }) => {
    await page.goto("/Thanks/note");

    await expect(page).toHaveURL("/");
  });
});
