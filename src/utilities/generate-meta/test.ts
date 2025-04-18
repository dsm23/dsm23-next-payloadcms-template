import { describe, expect, it, jest } from "@jest/globals";
import { generateMeta } from ".";

jest.mock("~/utilities/get-url", () => ({
  __esModule: true,
  getServerSideURL: jest.fn(() => "http://localhost:3000"),
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
