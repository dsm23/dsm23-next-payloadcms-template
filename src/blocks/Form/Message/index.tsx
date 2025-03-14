import RichText from "~/components/RichText";
import type { FunctionComponent } from "react";

import { Width } from "../Width";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

export const Message: FunctionComponent<{ message: SerializedEditorState }> = ({
  message,
}) => {
  return (
    <Width className="my-12" width="100">
      {message && <RichText data={message} />}
    </Width>
  );
};
