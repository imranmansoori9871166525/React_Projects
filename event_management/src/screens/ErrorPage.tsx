import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import BackGroundimage from "../assets/background/background.png";
import { theme } from "../theme/theme";
import { Label } from "../components/switchCaseComponents";

const ErrorPage: React.FC = () => {
  const title = "404";
  const backgroundImage = BackGroundimage;

  return (
    <BackgroundImage backgroundImage={backgroundImage} title={title}>
      <Label
        content={"ERROR"}
        color={theme.colors.white}
        fontSize="4xl"
        fontWeight="bold"
      />
      <a href="/" style={{ textDecoration: "none", marginTop: "20px" }}>
        <Label
          content={"Go to Home"}
          fontSize="xl"
          color={theme.colors.white}
          hoverColor="#0056b3"
        />
      </a>
    </BackgroundImage>
  );
};

export default ErrorPage;
