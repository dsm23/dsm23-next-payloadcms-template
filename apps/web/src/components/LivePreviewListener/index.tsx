"use client";

import type { FunctionComponent } from "react";
import { useRouter } from "next/navigation";
import { RefreshRouteOnSave as PayloadLivePreview } from "@payloadcms/live-preview-react";
import { getClientSideURL } from "~/utilities/get-url";

export const LivePreviewListener: FunctionComponent = () => {
  const router = useRouter();
  return (
    <PayloadLivePreview
      refresh={router.refresh}
      serverURL={getClientSideURL()}
    />
  );
};
