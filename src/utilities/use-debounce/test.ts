import { describe, expect, it, jest } from "@jest/globals";
import { act, renderHook } from "@testing-library/react";
import { useDebounce } from ".";

describe("utilities", () => {
  describe("useDebounce", () => {
    jest.useFakeTimers();

    it("should return the initial value immediately", () => {
      const initialValue = "initial";

      const { result } = renderHook(() => useDebounce(initialValue));

      expect(result.current).toBe(initialValue);
    });

    it("should update the debounced value after the specified delay", () => {
      const initialValue = "initial";
      const newValue = "updated";
      const delay = 500;

      const { result, rerender } = renderHook(
        ({ value }) => useDebounce(value, delay),
        { initialProps: { value: initialValue } },
      );

      expect(result.current).toBe(initialValue);

      rerender({ value: newValue });

      expect(result.current).toBe(initialValue);

      act(() => {
        jest.advanceTimersByTime(delay);
      });

      expect(result.current).toBe(newValue);
    });

    it("should not update if the value changes within the delay", () => {
      const initialValue = "initial";
      const intermediateValue = "intermediate";
      const finalValue = "final";
      const delay = 300;

      const { result, rerender } = renderHook(
        ({ value }) => useDebounce(value, delay),
        { initialProps: { value: initialValue } },
      );

      expect(result.current).toBe(initialValue);

      rerender({ value: intermediateValue });

      act(() => {
        jest.advanceTimersByTime(delay / 2);
      });

      expect(result.current).toBe(initialValue);

      rerender({ value: finalValue });

      act(() => {
        jest.advanceTimersByTime(delay / 2);
      });

      expect(result.current).not.toBe(intermediateValue);

      act(() => {
        jest.advanceTimersByTime(delay / 2);
      });

      expect(result.current).toBe(finalValue);
    });

    it("should use the default delay if none is provided", () => {
      const initialValue = "initial";
      const newValue = "updated";
      const defaultDelay = 200;

      const { result, rerender } = renderHook(
        ({ value }) => useDebounce(value),
        {
          initialProps: { value: initialValue },
        },
      );

      expect(result.current).toBe(initialValue);

      rerender({ value: newValue });

      act(() => {
        jest.advanceTimersByTime(defaultDelay);
      });

      expect(result.current).toBe(newValue);
    });

    it("should clear the timeout on unmount", () => {
      const initialValue = "initial";
      const newValue = "updated";
      const delay = 400;

      const { result, rerender, unmount } = renderHook(
        ({ value, delay }) => useDebounce(value, delay),
        { initialProps: { value: initialValue, delay } },
      );

      expect(result.current).toBe(initialValue);

      rerender({ value: newValue, delay });

      unmount();

      act(() => {
        jest.advanceTimersByTime(delay);
      });

      expect(result.current).toBe(initialValue);
    });
  });
});
