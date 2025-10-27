import { expect, test } from "@playwright/test";

test("has healthcheck", async ({ request }) => {
  const response = await request.get("/api/health");

  expect(response.status()).toBe(200);
});
