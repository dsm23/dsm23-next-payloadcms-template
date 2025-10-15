import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Checkbox } from ".";

class ResizeObserver {
  callback: globalThis.ResizeObserverCallback;
  constructor(callback: globalThis.ResizeObserverCallback) {
    this.callback = callback;
  }
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

window.ResizeObserver = ResizeObserver;

describe("component", () => {
  describe("Checkbox", () => {
    it("should render correctly", () => {
      const { container } = render(<Checkbox />);

      expect(container.querySelector("button")).toBeInTheDocument();
    });
  });

  it("should render in a form correctly", () => {
    const { container } = render(
      <form>
        <Checkbox />
      </form>,
    );

    expect(
      container.querySelector('input[type="checkbox"]'),
    ).toBeInTheDocument();
  });
});
