/**
 * @jest-environment node
 */

import { afterEach, describe, expect, it } from "@jest/globals";
import { getClientSideURL, getServerSideURL } from ".";

describe("utilities", () => {
  describe("getClientSideURL", () => {
    const tempNextPublicServerUrl = process.env.NEXT_PUBLIC_SERVER_URL;
    const tempVercelProjectProductionUrl =
      process.env.VERCEL_PROJECT_PRODUCTION_URL;

    afterEach(() => {
      process.env.NEXT_PUBLIC_SERVER_URL = tempNextPublicServerUrl;
      process.env.VERCEL_PROJECT_PRODUCTION_URL =
        tempVercelProjectProductionUrl;
    });

    it("no env var", () => {
      process.env.NEXT_PUBLIC_SERVER_URL = "";
      process.env.VERCEL_PROJECT_PRODUCTION_URL = "";

      expect(getClientSideURL()).toBe("");
    });

    it("has vercel project env var", () => {
      process.env.NEXT_PUBLIC_SERVER_URL = "";
      process.env.VERCEL_PROJECT_PRODUCTION_URL = "example.com";

      expect(getClientSideURL()).toBe("https://example.com");
    });
  });

  describe("getServerSideURL", () => {
    const tempNextPublicServerUrl = process.env.NEXT_PUBLIC_SERVER_URL;
    const tempVercelProjectProductionUrl =
      process.env.VERCEL_PROJECT_PRODUCTION_URL;

    afterEach(() => {
      process.env.NEXT_PUBLIC_SERVER_URL = tempNextPublicServerUrl;
      process.env.VERCEL_PROJECT_PRODUCTION_URL =
        tempVercelProjectProductionUrl;
    });

    it("uses env var", () => {
      expect(getServerSideURL()).toBe(process.env.NEXT_PUBLIC_SERVER_URL);
    });

    it("no env var", () => {
      process.env.NEXT_PUBLIC_SERVER_URL = "";
      process.env.VERCEL_PROJECT_PRODUCTION_URL = "";

      expect(getServerSideURL()).toBe("http://localhost:3000");
    });

    it("has vercel project env var", () => {
      process.env.NEXT_PUBLIC_SERVER_URL = "";
      process.env.VERCEL_PROJECT_PRODUCTION_URL = "example.com";

      expect(getServerSideURL()).toBe("https://example.com");
    });
  });
});
