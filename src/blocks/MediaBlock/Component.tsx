import type { FunctionComponent } from "react";
import type { StaticImageData } from "next/image";
import { Media } from "~/components/Media";
import RichText from "~/components/RichText";
import { cn } from "~/utilities/cn";
import type { MediaBlock as MediaBlockProps } from "~/payload-types";

type Props = MediaBlockProps & {
  breakout?: boolean;
  captionClassName?: string;
  className?: string;
  enableGutter?: boolean;
  imgClassName?: string;
  staticImage?: StaticImageData;
  disableInnerContainer?: boolean;
};

export const MediaBlock: FunctionComponent<Props> = (props) => {
  const {
    captionClassName,
    className,
    enableGutter = true,
    imgClassName,
    media,
    position = "default",
    staticImage,
    disableInnerContainer,
  } = props;

  let caption;
  if (media && typeof media === "object") caption = media.caption;

  return (
    <div
      className={cn(
        "",
        {
          container: position === "default" && enableGutter,
        },
        className,
      )}
    >
      {position === "fullscreen" && (
        <div className="relative">
          <Media resource={media} src={staticImage} />
        </div>
      )}
      {position === "default" && (
        <Media
          imgClassName={cn("rounded", imgClassName)}
          resource={media}
          src={staticImage}
        />
      )}
      {caption && (
        <div
          className={cn(
            "mt-6",
            {
              container: position === "fullscreen" && !disableInnerContainer,
            },
            captionClassName,
          )}
        >
          <RichText content={caption} enableGutter={false} />
        </div>
      )}
    </div>
  );
};
