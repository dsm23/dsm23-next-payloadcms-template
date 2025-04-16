import { describe, expect, it } from "@jest/globals";
import { getClientSideURL } from ".";

describe("utilities", () => {
  describe("getClientSideURL", () => {
    it("in the client browser", () => {
      expect(getClientSideURL()).toBe("http://localhost");
    });

    it("has port in the client browser", () => {
      Object.defineProperty(window, "location", {
        value: new URL("http://localhost:3000"),
      });

      expect(getClientSideURL()).toBe("http://localhost:3000");
    });
  });
});
