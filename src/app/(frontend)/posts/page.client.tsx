"use client";
import { useHeaderTheme } from "~/providers/HeaderTheme";
import { Fragment, useEffect, type FunctionComponent } from "react";

const PageClient: FunctionComponent = () => {
  /* Force the header to be dark mode while we have an image behind it */
  const { setHeaderTheme } = useHeaderTheme();

  useEffect(() => {
    setHeaderTheme("light");
  }, [setHeaderTheme]);
  return <Fragment />;
};

export default PageClient;
