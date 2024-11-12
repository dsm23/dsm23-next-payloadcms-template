/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import config from "@payload-config";

import "@payloadcms/next/css";

import type { FunctionComponent, ReactNode } from "react";
import { RootLayout } from "@payloadcms/next/layouts";
import { importMap } from "./admin/importMap.js";

import "./custom.scss";

type Args = {
  children: ReactNode;
};

const Layout: FunctionComponent<Args> = ({ children }) => (
  <RootLayout config={config} importMap={importMap}>
    {children}
  </RootLayout>
);

export default Layout;
