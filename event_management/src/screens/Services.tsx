import React from "react";
import BackGroundimage from "../assets/background/background.png";
import { BackgroundImage, CarD } from "../components";
import { OurServicesCard_1, OurServicesCard_2 } from "../constants/Constants";
import { Button, Label } from "../components/switchCaseComponents";
import { theme } from "../theme/theme";
import phoneIcon from "../assets/svg/phoneIcon.svg";
import { useNavigate } from "react-router-dom";
import { OurServicesType } from "../types/global.d";
import "../App.css";

const Services: React.FC = () => {
  const navigate = useNavigate();
  const truncateText = (text: string, maxChars = 100) => {
    if (text.length <= maxChars) {
      return text;
    }
    return text.substring(0, maxChars) + "...";
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
  ];
  const title = "Services";
  const backgroundImage = BackGroundimage;

  const handleExploreClick = (service: OurServicesType) => {
    navigate(`/specific-services/${service.name}`, { state: service });
  };

  return (
    <React.Fragment>
      <BackgroundImage
        backgroundImage={backgroundImage}
        breadcrumbs={breadcrumbs}
        title={title}
      />

      {/* Explore Our Comprehensive Event Services */}
      <div className="container d-flex flex-column justify-center align-items-center mt-5 w-100">
        <p className="my-2">
          <Label
            content="Explore Our Comprehensive Event Services"
            fontSize="2xl"
            fontWeight="bold"
          />
        </p>
        <div
          className={`row mt-4`}
          style={{ rowGap: "3rem", columnGap: "0px" }}
        >
          {OurServicesCard_1.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <CarD
                img={item.img}
                title={item.name}
                paragraph={truncateText(item.paragraph, 130)}
                handleclickProps={() => handleExploreClick(item)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Discover More Ways We Can Enhance Your Event */}
      <div className="container d-flex flex-column justify-center align-items-center w-100 my-5 pb-5 ">
        <p className="my-2">
          <Label
            content="Discover More Ways We Can Enhance Your Event"
            fontSize="2xl"
            fontWeight="bold"
          />
        </p>
        <div className="row mt-4" style={{ rowGap: "3rem", columnGap: "0px" }}>
          {OurServicesCard_2.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <CarD
                img={item.img}
                title={item.name}
                paragraph={truncateText(item.paragraph, 130)}
                handleclickProps={() => handleExploreClick(item)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="p-5 ServicesWidth" style={{ backgroundColor: "#131F3E" }}>
        <div className="row mx-4">
          <div className="col-sm-12 col-md-8 col-lg-10 ServicesWidth">
            <Label
              content={"Lorem ipsum dolor sit amet"}
              color={theme.colors.white}
              fontSize="3xl"
              fontWeight="semiBold"
            />
            <div className="w-75 mt-3 ServicesWidth">
              <Label
                content={
                  "Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet"
                }
                color={theme.colors.white}
                lineHeight={1.7}
                clasname={"ServicesWidth"}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-2">
            <Label
              content={"Get a Quote"}
              color={theme.colors.white}
              fontSize="3xl"
              fontWeight="bold"
            />
            <div className="mt-3 ServicesWidth">
              <Button
                label={"Contact US"}
                icon={phoneIcon}
                onClick={() => navigate("/contact-us")}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Services;
