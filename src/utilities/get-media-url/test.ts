import { describe, expect, it } from "@jest/globals";
import { getMediaUrl } from ".";

describe("utilities", () => {
  describe("getMediaUrl", () => {
    it("use no url", () => {
      // @ts-expect-error cope with no arguments
      expect(getMediaUrl()).toBe("");
    });

    it("use full url", () => {
      expect(getMediaUrl("http://localhost:3000")).toBe(
        "http://localhost:3000",
      );
    });

    it("use full url with cacheTag", () => {
      expect(getMediaUrl("http://localhost:3000", "tag=tag")).toBe(
        "http://localhost:3000?tag=tag",
      );
    });

    it("use client browser plus endpoint", () => {
      Object.defineProperty(window, "location", {
        value: new URL("http://localhost:3000"),
      });

      expect(getMediaUrl("/foo")).toBe("http://localhost:3000/foo");
    });

    it("use client browser plus endpoint with cacheTage", () => {
      Object.defineProperty(window, "location", {
        value: new URL("http://localhost:3000"),
      });

      expect(getMediaUrl("/foo", "tag=tag")).toBe(
        "http://localhost:3000/foo?tag=tag",
      );
    });
  });
});
