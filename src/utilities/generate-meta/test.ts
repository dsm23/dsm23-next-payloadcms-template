import { describe, expect, it, vi } from "vitest";
import { generateMeta } from ".";

vi.mock("~/utilities/get-url", () => ({
  getServerSideURL: vi.fn(() => "http://localhost:3000"),
}));

describe("utilities", () => {
  describe("generateMeta", () => {
    it("null doc", async () => {
      expect(
        await generateMeta({
          doc: null,
        }),
      ).toStrictEqual({
        description: undefined,
        openGraph: {
          description: "",
          images: [
            {
              url: "http://localhost:3000/website-template-OG.webp",
            },
          ],
          siteName: "Payload Website Template",
          title: "Payload Website Template",
          type: "website",
          url: "/",
        },
        title: "Payload Website Template",
      });
    });
  });
});
