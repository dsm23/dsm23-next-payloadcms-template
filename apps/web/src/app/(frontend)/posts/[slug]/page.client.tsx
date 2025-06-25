"use client";

import { Fragment, useEffect } from "react";
import type { FunctionComponent } from "react";
import { useHeaderTheme } from "~/providers/HeaderTheme";

const PageClient: FunctionComponent = () => {
  /* Force the header to be dark mode while we have an image behind it */
  const { setHeaderTheme } = useHeaderTheme();

  useEffect(() => {
    setHeaderTheme("dark");
  }, [setHeaderTheme]);
  return <Fragment />;
};

export default PageClient;
