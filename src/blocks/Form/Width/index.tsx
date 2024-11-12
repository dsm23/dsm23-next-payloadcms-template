import type { FunctionComponent, ReactNode } from "react";

export const Width: FunctionComponent<{
  children: ReactNode;
  className?: string;
  width?: number | string;
}> = ({ children, className, width }) => {
  return (
    <div
      className={className}
      style={{ maxWidth: width ? `${width}%` : undefined }}
    >
      {children}
    </div>
  );
};
