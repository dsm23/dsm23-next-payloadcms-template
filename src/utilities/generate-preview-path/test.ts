import { afterAll, describe, expect, it } from "vitest";
import { generatePreviewPath } from ".";

describe("utilities", () => {
  describe("generatePreviewPath", () => {
    const tempPreviewSecret = process.env.PREVIEW_SECRET;

    afterAll(() => {
      process.env.PREVIEW_SECRET = tempPreviewSecret;
    });

    it("pages", () => {
      expect(
        generatePreviewPath({
          collection: "pages",
          slug: "foo",
        }),
      ).toBe(
        `/next/preview?slug=foo&collection=pages&path=${encodeURIComponent("/foo")}&previewSecret=${process.env.PREVIEW_SECRET}`,
      );
    });

    it("posts", () => {
      expect(
        generatePreviewPath({
          collection: "posts",
          slug: "foo",
        }),
      ).toBe(
        `/next/preview?slug=foo&collection=posts&path=${encodeURIComponent("/posts/foo")}&previewSecret=${process.env.PREVIEW_SECRET}`,
      );
    });

    it("preview secret is undefined", () => {
      process.env.PREVIEW_SECRET = "";

      expect(
        generatePreviewPath({
          collection: "pages",
          slug: "foo",
        }),
      ).toBe(
        `/next/preview?slug=foo&collection=pages&path=${encodeURIComponent("/foo")}&previewSecret=`,
      );
    });
  });
});
