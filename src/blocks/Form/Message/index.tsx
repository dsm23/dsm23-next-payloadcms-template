import type { FunctionComponent } from "react";
import type { DefaultTypedEditorState } from "@payloadcms/richtext-lexical";
import RichText from "~/components/RichText";
import { Width } from "../Width";

export const Message: FunctionComponent<{
  message: DefaultTypedEditorState;
}> = ({ message }) => {
  return (
    <Width className="my-12" width="100">
      {message && <RichText data={message} />}
    </Width>
  );
};
