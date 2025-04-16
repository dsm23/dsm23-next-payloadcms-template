import { afterEach, describe, expect, it, jest } from "@jest/globals";
import { formatDateTime } from ".";

const localeMock = function (locale: Intl.LocalesArgument = "default") {
  const DateTimeFormat = Intl.DateTimeFormat;

  jest
    .spyOn(global.Intl, "DateTimeFormat")
    .mockImplementation((_, options) => new DateTimeFormat(locale, options));
};

describe("utilities", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("formatDateTime", () => {
    describe("UK date", () => {
      it("formats string argument", () => {
        localeMock("en-GB");

        expect(formatDateTime("2005-06-24")).toBe("24/06/2005");
      });

      it("returns local time ", () => {
        jest.useFakeTimers().setSystemTime(new Date("2020-04-01"));

        localeMock("en-GB");

        expect(formatDateTime()).toBe("01/04/2020");
      });
    });

    describe("DE date", () => {
      it("formats string argument", () => {
        localeMock("de-DE");

        expect(formatDateTime("2005-06-24")).toBe("24.06.2005");
      });

      it("returns local time ", () => {
        jest.useFakeTimers().setSystemTime(new Date("2020-04-01"));

        localeMock("de-DE");

        expect(formatDateTime()).toBe("01.04.2020");
      });
    });

    describe("US date", () => {
      it("formats string argument", () => {
        localeMock("en-US");

        expect(formatDateTime("2005-06-24")).toBe("06/24/2005");
      });

      it("returns local time ", () => {
        jest.useFakeTimers().setSystemTime(new Date("2020-04-01"));

        localeMock("en-US");

        expect(formatDateTime()).toBe("04/01/2020");
      });
    });
  });
});
