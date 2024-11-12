import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("not admin", () => {
  test("has title", async ({ page }) => {
    await page.goto("/foo");

    await expect(page).toHaveTitle(/Payload Website Template/);
  });

  test("has heading", async ({ page }) => {
    await page.goto("/foo");

    await expect(
      page.getByRole("heading", {
        name: "404",
      }),
    ).toBeVisible();
  });

  test("should not have any automatically detectable accessibility issues", async ({
    browserName,
    page,
  }) => {
    // https://playwright.dev/docs/api/class-page#page-goto
    test.fixme(
      browserName === "webkit",
      "Errors are occurring in safari, report bears no resemblance to web page",
    );
    await page.goto("/foo");

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

// test.describe("admin", () => {
//   test("has title", async ({ page }) => {
//     await page.goto("/admin/foo");

//     await expect(page).toHaveTitle(/Not Found/);
//   });

//   test("has heading", async ({ page }) => {
//     await page.goto("/admin/foo");

//     await expect(
//       page.getByRole("heading", {
//         name: "Nothing found",
//       }),
//     ).toBeVisible();
//   });

//   test("should not have any automatically detectable accessibility issues", async ({
//     page,
//   }) => {
//     await page.goto("/admin/foo");

//     const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

//     expect(accessibilityScanResults.violations).toEqual([]);
//   });
// });
