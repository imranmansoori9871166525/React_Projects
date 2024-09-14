import React from "react";
import { BackgroundImage, ImageCard } from "../components";
import BackGroundimage from "../assets/background/background.png";
import { Label } from "../components/switchCaseComponents";
import { theme } from "../theme/theme";
import AboutImage from "../assets/images/about_page_image.png";
import AboutFixedBanner from "../assets/images/aboutFixedBanner.png";
import aboutCircleImage from "../assets/images/aboutCircleImage.png";
import { AboutUs } from "../constants/Constants";
import "../App.css";

const title = "About us";
const backgroundImage = BackGroundimage;

const About: React.FC = () => {
  const aboutData = AboutUs[0];

  return (
    <React.Fragment>
      <BackgroundImage backgroundImage={backgroundImage} title={title} />
      <div className="container mainContainer">
        <div style={{ textAlign: "center" }} className="mt-4 mb-5">
          <Label
            content={"Nima Arun Innovations"}
            fontSize="3xl"
            fontWeight="bold"
          />
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            {aboutData.leftText.map((item, index) => (
              <div key={index} className="px-2">
                <Label content={item.first} fontSize="xl" lineHeight={1.5} />
                <div className="mt-5">
                  <Label content={item.second} fontSize="xl" lineHeight={1.5} />
                </div>
              </div>
            ))}
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <ImageCard
              src={AboutImage}
              style={{
                boxShadow: theme.shadows.large,
              }}
              borderRadius="8px"
              width="90%"
              Class={"mainContainerImg"}
            />
          </div>
          <div className="mt-3 px-4 mb-5">
            {aboutData.leftText.map((item, index) => (
              <Label
                content={item.last}
                key={index}
                lineHeight={1.5}
                fontSize="lg"
              />
            ))}
          </div>
        </div>

        <div className="row my-5 py-5">
          <div className="col-sm-12 col-md-12 col-lg-4 position-relative circle_width">
            <div
              style={{
                borderRadius: "50%",
                background: "rgb(0 123 255 / 15%)",
                position: "absolute",
                width: "250px",
                height: "250px",
                left: "-10rem",
                top: "-3rem",
              }}
            ></div>
            <div
              style={{
                borderRadius: "50%",
                background: "rgb(0 123 255 / 15%)",
                position: "absolute",
                width: "500px",
                height: "500px",
                top: "2rem",
                left: "-8rem",
              }}
              className="circle leftClassBlank"
            ></div>
            <img
              src={aboutCircleImage}
              alt="..."
              style={{
                objectFit: "cover",
                borderRadius: "50%",
                position: "relative",
                width: "500px",
                height: "500px",
                border: "15px solid #007BFF",
                right: "12rem",
              }}
              className="circle"
            />
          </div>

          <div className="col-sm-12 col-md-12 col-lg-8">
            {aboutData.flexData.map((item, index) => (
              <div
                className="container d-flex flex-row justify-content-between align-items-center w-100 mt-5 flexClassAboutUs"
                style={{ gap: "1rem" }}
                key={index}
              >
                <div
                  style={{
                    padding: "1.3rem",
                    backgroundColor: theme.colors.white,
                    borderRadius: "50%",
                    boxShadow: theme.shadows.CardShadow,
                  }}
                >
                  <img
                    src={item.icon}
                    alt="icon"
                    style={{ maxWidth: "50px", height: "auto" }}
                  />
                </div>
                <div className="mx-5">
                  <Label
                    content={item.greenTitle}
                    fontSize="lg"
                    color={theme.colors.lightGreen}
                  />
                  <p className="my-2">
                    <Label content={item.text} fontSize="lg" />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="w-100 position-relative py-5 d-flex align-center"
        style={{
          backgroundImage: `linear-gradient(
           rgba(19, 31, 62, 0.7),  
            rgba(19, 31, 62, 0.7)   
           ), url(${AboutFixedBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="row w-100 mx-5 px-5 g-4">
          <div
            className="col-sm-12 col-md-4 col-lg-4"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: theme.colors.white,
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                border: "5px solid #6596DE",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Label content={"100+"} fontSize="2xl" fontWeight="semiBold" />
            </div>
            <div className="mt-2" style={{ textAlign: "center" }}>
              <Label
                content={"Bookings"}
                fontSize="lg"
                fontWeight="regular"
                color={theme.colors.white}
              />
            </div>
          </div>
          <div
            className="col-sm-12 col-md-4 col-lg-4"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: theme.colors.white,
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                border: "5px solid #6596DE",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Label content={"150+"} fontSize="2xl" fontWeight="semiBold" />
            </div>
            <div className="mt-2" style={{ textAlign: "center" }}>
              <Label
                content={"Decorations"}
                fontSize="lg"
                fontWeight="regular"
                color={theme.colors.white}
              />
            </div>
          </div>
          <div
            className="col-sm-12 col-md-4 col-lg-4"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: theme.colors.white,
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                border: "5px solid #6596DE",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Label content={"200+"} fontSize="2xl" fontWeight="semiBold" />
            </div>
            <div className="mt-2" style={{ textAlign: "center" }}>
              <Label
                content={"Happy Customers"}
                fontSize="lg"
                fontWeight="regular"
                color={theme.colors.white}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container d-flex flex-column justify-center align-items-center w-100 mt-5">
        <Label
          content="Why Choose Us"
          fontSize="lg"
          color={theme.colors.lightGreen}
        />
        <p className="my-2">
          <Label
            content="Why Trust Us with Your Special Moments?"
            fontSize="2xl"
            fontWeight="bold"
          />
        </p>
        <div className="row mt-4 mb-5 pb-5 g-4">
          {aboutData.aboutCardData.map((item, index) => (
            <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
              <div
                className=" h-100 text-center py-4"
                style={{
                  boxShadow: theme.shadows.medium,
                  borderRadius: "12px",
                }}
              >
                <div className="px-4">
                  <div className="mb-3">
                    <img src={item.img} alt="..." />
                  </div>
                  <div className="mt-4">
                    <Label
                      content={item.title}
                      fontSize="xl"
                      fontWeight="bold"
                    />
                  </div>
                  <div className="mt-3">
                    <Label content={item.text} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
