import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from ".";

describe("component", () => {
  describe("Select", () => {
    it("should render correctly", () => {
      const { container } = render(
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a timezone" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>North America</SelectLabel>
              <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
              <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
              <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
              <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
              <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
              <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Europe & Africa</SelectLabel>
              <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
              <SelectItem value="cet">Central European Time (CET)</SelectItem>
              <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
              <SelectItem value="west">
                Western European Summer Time (WEST)
              </SelectItem>
              <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
              <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>,
      );

      expect(container).toBeInTheDocument();
    });
  });
});
