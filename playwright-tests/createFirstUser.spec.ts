import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/admin/create-first-user");

  await expect(page).toHaveTitle(/Create first user - Payload/);
});

test("has heading", async ({ page }) => {
  await page.goto("/admin/create-first-user");

  await expect(
    page.getByRole("heading", {
      name: "Welcome",
    }),
  ).toBeVisible();
});
