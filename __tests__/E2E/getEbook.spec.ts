import { test, expect } from "@playwright/test";

test.describe("E-book Download Flow", () => {
  test("should complete full e-book download process", async ({ page }) => {
    await page.goto("/Ebooki/Praktyczne_Porady_Na_Co_Zwrocic_Uwage_Podczas_Projektowania_Strony_Internetowej");

    await page.getByPlaceholder("Twoje Imię").fill("Test User");
    await page.getByPlaceholder("Twój Email").fill("test@example.com");
    await page
      .getByRole("checkbox", { name: /Akceptuję Politykę Prywatności/i })
      .check();

    const submitButton = page.getByRole("button", {
      name: "Odbieram Bezpłatnie",
    });
    await expect(submitButton).toBeEnabled();

    await submitButton.click();

    await page.waitForURL("/Thanks/ebook");

    await expect(page).toHaveURL("/Thanks/ebook");

    await expect(page.getByText("Dziękuję")).toBeVisible();
    await expect(
      page.getByText("Twój E-Book jest dostępny do pobrania")
    ).toBeVisible();

  });

  test("should validate form fields", async ({ page }) => {
    await page.goto(
      "/Ebooki/Praktyczne_Porady_Na_Co_Zwrocic_Uwage_Podczas_Projektowania_Strony_Internetowej"
    );

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
