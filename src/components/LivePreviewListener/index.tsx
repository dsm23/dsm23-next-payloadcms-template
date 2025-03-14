"use client";
import { getClientSideURL } from "~/utilities/getURL";
import { RefreshRouteOnSave as PayloadLivePreview } from "@payloadcms/live-preview-react";
import { useRouter } from "next/navigation";
import type { FunctionComponent } from "react";

export const LivePreviewListener: FunctionComponent = () => {
  const router = useRouter();
  return (
    <PayloadLivePreview
      refresh={router.refresh}
      serverURL={getClientSideURL()}
    />
  );
};
