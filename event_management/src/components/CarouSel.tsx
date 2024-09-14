import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button, Label } from "./switchCaseComponents";
import { CarouselData } from "../constants/Constants";
import "./styles/Carousel.css";
import { theme } from "../theme/theme";
import { useNavigate } from "react-router-dom";

const CarouSel: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Carousel fade indicators={false} interval={2000}>
      {CarouselData.map((item, index) => (
        <Carousel.Item key={index}>
          <div className="bgBlackOpacity"></div>
          <img
            src={item.img}
            alt={item.bigText || `Slide ${index + 1}`}
            style={{
              height: "700px",
              width: "100%",
            }}
            className="bgBlackOpacityImg"
          />

          <Carousel.Caption className="z_indexCalss">
            <Label
              content={item.bigText}
              fontSize="6xl"
              fontWeight="bold"
              color={theme.colors.white}
              clasname={"CarouselFont"}
            />
            {item.smallText && (
              <Label
                content={item.smallText}
                fontSize="3xl"
                fontWeight="semiBold"
                color={theme.colors.white}
                clasname={"CarouselFont2"}
              />
            )}
            <div className="Parent_button">
              <div className="mt-3 carousel-caption displaynone">
                {item.smallTextButton && (
                  <Button
                    label={item.smallTextButton}
                    icon={item.smallTextIcon}
                    type="unfilled"
                    borderStyle="none"
                    textColor={theme.colors.white}
                    onClick={() => navigate("/services")}
                    hoverColorBut="#0056b3"
                  />
                )}
              </div>
              <div className="mt-5 marginClass">
                <Button
                  label={item.buttonText}
                  icon={item.buttonIcon}
                  onClick={() => navigate("/contact-us")}
                />
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouSel;
