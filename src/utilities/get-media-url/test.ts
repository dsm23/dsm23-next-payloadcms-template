/**
 * @vitest-environment-options {"url": "http://localhost:3000/"}
 */

import { beforeEach, describe, expect, it, vi } from "vitest";
import type { Mock } from "vitest";
import { getMediaUrl } from ".";

interface LocalTestContext {
  mockFn: Mock;
}

describe("utilities", () => {
  describe("getMediaUrl", () => {
    beforeEach<LocalTestContext>((context) => {
      const mockFn = vi.fn((input) => input);

      vi.stubGlobal("encodeURIComponent", mockFn);

      context.mockFn = mockFn;
    });

    it("use no url", () => {
      // @ts-expect-error cope with no arguments
      expect(getMediaUrl()).toBe("");
    });

    it("use full url", () => {
      expect(getMediaUrl("http://localhost:3000")).toBe(
        "http://localhost:3000",
      );
    });

    it<LocalTestContext>("use full url with cacheTag", ({ mockFn }) => {
      expect(getMediaUrl("http://localhost:3000", "tag=tag")).toBe(
        "http://localhost:3000?tag=tag",
      );
      expect(mockFn).toHaveBeenCalledExactlyOnceWith("tag=tag");
    });

    it("use client browser plus endpoint", () => {
      expect(getMediaUrl("/foo")).toBe("http://localhost:3000/foo");
    });

    it<LocalTestContext>("use client browser plus endpoint with cacheTag", ({
      mockFn,
    }) => {
      expect(getMediaUrl("/foo", "tag=tag")).toBe(
        "http://localhost:3000/foo?tag=tag",
      );
      expect(mockFn).toHaveBeenCalledExactlyOnceWith("tag=tag");
    });
  });
});
