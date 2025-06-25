/**
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */

import { describe, expect, it } from "@jest/globals";
import { getClientSideURL } from ".";

describe("utilities", () => {
  describe("getClientSideURL", () => {
    it("in the client browser", () => {
      expect(getClientSideURL()).toBe("https://jestjs.io");
    });
  });
});
