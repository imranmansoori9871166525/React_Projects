import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import BackGroundimage from "../assets/background/background.png";
import { theme } from "../theme/theme";
import { GalleryData } from "../constants/Constants";
import { ImageCard } from "../components";

const Gallery: React.FC = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Gallery", href: "/gallery" },
  ];
  const title = "Gallery";
  const backgroundImage = BackGroundimage;

  const visibleGalleryData = GalleryData.slice(9);

  return (
    <React.Fragment>
      <BackgroundImage
        backgroundImage={backgroundImage}
        breadcrumbs={breadcrumbs}
        title={title}
      />

      <div
        className={`container row g-4 mt-5 py-5 mx-auto`}
        style={{ marginBottom: "8rem" }}
      >
        {visibleGalleryData.map((item, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <ImageCard
              src={item}
              style={{
                boxShadow: theme.shadows.large,
                transform: "rotate(90deg)",
              }}
            />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Gallery;
