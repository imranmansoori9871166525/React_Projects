import React from "react";
import styles from "./styles/BackgroundImage.module.css";
import { Label } from "./switchCaseComponents";
import { theme } from "../theme/theme";
import "../App.css";

interface BackgroundImageProps {
  backgroundImage?: string;
  breadcrumbs?: { label: string; href: string }[];
  title?: string;
  children?: React.ReactNode;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  backgroundImage,
  breadcrumbs = [],
  title = "",
  children,
}) => {
  const style = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "650px",
    color: "#fff",
  };

  return (
    <div className={styles.gallery} style={style}>
      <div className={styles.gallery_content}>
        <Label
          content={title}
          color={theme.colors.white}
          fontSize="5xl"
          fontWeight="semiBold"
          clasname={"backgroundImageFont"}
        />
        <div className={styles.gallery_text}>{children}</div>
        {breadcrumbs.length > 0 && (
          <nav className={styles.breadcrumbs}>
            {breadcrumbs.map((crumb, index) => (
              <span key={index}>
                <a
                  href={crumb.href}
                  className={styles.breadcrumb_link}
                  style={{ fontSize: theme.fontSizes["xl"] }}
                >
                  {crumb.label}
                </a>
                {index < breadcrumbs.length - 1 && " > "}
              </span>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
};

export default BackgroundImage;
