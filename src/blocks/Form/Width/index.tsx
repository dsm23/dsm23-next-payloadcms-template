import type { FunctionComponent, PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  className?: string;
  width?: number | string;
};

export const Width: FunctionComponent<Props> = ({
  children,
  className,
  width,
}) => {
  return (
    <div
      className={className}
      style={{ maxWidth: width ? `${width}%` : undefined }}
    >
      {children}
    </div>
  );
};
