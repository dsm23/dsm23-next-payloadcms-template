import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/search");

  await expect(page).toHaveTitle(/Search/);
});

test("has heading", async ({ page }) => {
  await page.goto("/search");

  await expect(
    page.getByRole("heading", {
      name: "Search",
    }),
  ).toBeVisible();
});

test("should not have any automatically detectable accessibility issues", async ({
  page,
}) => {
  await page.goto("/search");

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
