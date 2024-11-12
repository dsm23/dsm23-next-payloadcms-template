import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/posts");

  await expect(page).toHaveTitle(/Posts/);
});

test("has heading", async ({ page }) => {
  await page.goto("/posts");

  await expect(
    page.getByRole("heading", {
      name: "Posts",
    }),
  ).toBeVisible();
});

test("should not have any automatically detectable accessibility issues", async ({
  page,
}) => {
  await page.goto("/posts");

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
