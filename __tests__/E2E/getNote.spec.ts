import { test, expect } from "@playwright/test";

test.describe("E-book Download Flow", () => {
  test("should complete full note download process", async ({ page }) => {
    await page.goto("/Notatki/JavaScript");

    await page.getByPlaceholder("Twoje Imię").fill("Test User");
    await page.getByPlaceholder("Twój Email").fill("test@example.com");
    await page
      .getByRole("checkbox", { name: /Akceptuję Politykę Prywatności/i })
      .check();

    const submitButton = page.getByRole("button", {
      name: "Odbieram Bezpłatnie",
    });
    await expect(submitButton).toBeEnabled();

    const downloadPromise = page.waitForEvent("download");
    await submitButton.click();

    await expect(page).toHaveURL("/Thanks/note");

    await expect(page.getByText("Dziękuję")).toBeVisible();
    await expect(
      page.getByText("Twoja notatka jest dostępna do pobrania poniżej")
    ).toBeVisible();

    const downloadButton2 = page.getByRole("button", {
      name: "Pobierz notatkę",
    });
    await downloadButton2.click();

    const download = await downloadPromise;
    expect(download.suggestedFilename()).toContain(".pdf");
  });

  test("should validate form fields", async ({ page }) => {
    await page.goto("/Notatki/JavaScript");

    await page.getByRole("button", { name: "Odbieram Bezpłatnie" }).click();
    await expect(page.getByText("Imię jest wymagane")).toBeVisible();
    await expect(page.getByText("Email jest wymagany")).toBeVisible();
    await expect(
      page.getByText("*Musisz zaakceptować politykę prywatności")
    ).toBeVisible();

    await page.getByPlaceholder("Twoje Imię").fill("Test User");
    await page.getByPlaceholder("Twój Email").fill("invalid-email");
    await page
      .getByRole("checkbox", { name: /Akceptuję Politykę Prywatności/i })
      .check();
    await page.getByRole("button", { name: "Odbieram Bezpłatnie" }).click();
    await expect(page.getByText("Nieprawidłowy email")).toBeVisible();
  });
});
