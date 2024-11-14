import type { FunctionComponent } from "react";
import RichText from "~/components/RichText";
import { Width } from "../Width";

export const Message: FunctionComponent = ({
  message,
}: {
  message: Record<string, any>;
}) => {
  return (
    <Width className="my-12" width="100">
      {message && <RichText content={message} />}
    </Width>
  );
};
