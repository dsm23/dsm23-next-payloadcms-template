import { describe, expect, it, vi } from "vitest";
import { mergeOpenGraph } from ".";

vi.mock("~/utilities/get-url", () => ({
  getServerSideURL: vi.fn(() => "http://localhost:3000"),
}));

describe("utilities", () => {
  describe("mergeOpenGraph", () => {
    it("no arguments", () => {
      expect(mergeOpenGraph()).toStrictEqual({
        type: "website",
        description: "An open-source website built with Payload and Next.js.",
        images: [
          {
            url: "http://localhost:3000/website-template-OG.webp",
          },
        ],
        siteName: "Payload Website Template",
        title: "Payload Website Template",
      });
    });

    it("with arguments", () => {
      expect(
        mergeOpenGraph({
          description: "Custom description",
        }),
      ).toEqual(
        expect.objectContaining({
          description: "Custom description",
        }),
      );
    });

    expect(
      mergeOpenGraph({
        description: "Custom description",
      }),
    ).toEqual(
      expect.not.objectContaining({
        description: "An open-source website built with Payload and Next.js",
      }),
    );

    it("with images arguments", () => {
      expect(
        mergeOpenGraph({
          images: [
            {
              url: "http://localhost:3000/custom-image.webp",
            },
          ],
        }),
      ).toEqual(
        expect.objectContaining({
          images: [
            {
              url: "http://localhost:3000/custom-image.webp",
            },
          ],
        }),
      );
    });

    expect(
      mergeOpenGraph({
        images: [
          {
            url: "http://localhost:3000/custom-image.webp",
          },
        ],
      }),
    ).toEqual(
      expect.not.objectContaining({
        images: [
          {
            url: "http://localhost:3000/website-template-OG.webp",
          },
        ],
      }),
    );
  });
});
