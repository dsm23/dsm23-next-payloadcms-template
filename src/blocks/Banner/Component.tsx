import type { FunctionComponent } from "react";
import RichText from "~/components/RichText";
import { cn } from "~/utilities/ui";
import type { BannerBlock as BannerBlockProps } from "~/payload-types";

type Props = {
  className?: string;
} & BannerBlockProps;

export const BannerBlock: FunctionComponent<Props> = ({
  className,
  content,
  style,
}) => {
  return (
    <div className={cn("mx-auto my-8 w-full", className)}>
      <div
        className={cn("flex items-center rounded border px-6 py-3", {
          "border-border bg-card": style === "info",
          "border-error bg-error/30": style === "error",
          "border-success bg-success/30": style === "success",
          "border-warning bg-warning/30": style === "warning",
        })}
      >
        <RichText data={content} enableGutter={false} enableProse={false} />
      </div>
    </div>
  );
};
