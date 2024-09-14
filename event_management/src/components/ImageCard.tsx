import React, { CSSProperties } from "react";

type ImageRadiusProps = {
  src: string;
  alt?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  objectFit?: CSSProperties["objectFit"];
  style?: CSSProperties;
  Class?: any;
};

const ImageCard: React.FC<ImageRadiusProps> = ({
  src,
  alt = "",
  borderRadius = "8px",
  width = "100%",
  height = "auto",
  objectFit = "cover",
  style,
  Class,
}) => {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        style={{
          borderRadius,
          width,
          height,
          objectFit,
          ...style,
        }}
        className={Class}
      />
    </div>
  );
};

export default ImageCard;
