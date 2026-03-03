import { describe, expect } from "vitest";
import crypto from "node:crypto";
import { fc, it } from "@fast-check/vitest";
import { render, screen } from "@testing-library/react";
import { Button } from ".";

describe("component", () => {
  describe("Button", () => {
    it("should render correctly with various children", () => {
      fc.assert(
        fc.property(fc.string(), (buttonText) => {
          const id = crypto.randomUUID();

          render(<Button data-testid={id}>{buttonText}</Button>);

          expect(screen.getByTestId(id)).toBeInTheDocument();
          expect(screen.getByTestId(id)).toHaveTextContent(buttonText, {
            normalizeWhitespace: false,
          });
        }),
      );
    });

    it("should render correctly, asChild, with various children", () => {
      fc.assert(
        fc.property(fc.string(), fc.webUrl(), (linkText, href) => {
          const id = crypto.randomUUID();

          render(
            <Button asChild>
              <a href={href} data-testid={id}>
                {linkText}
              </a>
            </Button>,
          );

          expect(screen.getByTestId(id)).toBeInTheDocument();
          expect(screen.getByTestId(id)).toHaveTextContent(linkText, {
            normalizeWhitespace: false,
          });
          expect(screen.getByTestId(id)).toHaveAttribute("href", href.trim());
        }),
      );
    });

    it("should handle various className values", () => {
      fc.assert(
        fc.property(fc.string(), (className) => {
          const id = crypto.randomUUID();

          render(
            <Button className={className} data-testid={id}>
              Test
            </Button>,
          );

          expect(screen.getByTestId(id)).toBeInTheDocument();

          // otherwise, default className is applied, outside the scope of fuzzing
          if (className.trim() !== "") {
            expect(screen.getByTestId(id)).toHaveClass(className);
          }
        }),
      );
    });

    it("should handle various button types", () => {
      fc.assert(
        fc.property(fc.constantFrom("submit", "button", "reset"), (type) => {
          const id = crypto.randomUUID();

          render(
            <Button type={type} data-testid={id}>
              Test
            </Button>,
          );

          expect(screen.getByTestId(id)).toHaveAttribute("type", type);
        }),
      );
    });
  });
});
