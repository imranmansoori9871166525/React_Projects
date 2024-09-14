import React from "react";
import {
  AccoRdion,
  BackImageForm,
  CarD,
  CarouSel,
  ImageCard,
  Testimonial,
} from "../components";
import { Button, Label } from "../components/switchCaseComponents";
import { theme } from "../theme/theme";
import {
  AboutUs,
  GalleryData,
  OurServicesCard_1,
  OurServicesCard_2,
} from "../constants/Constants";
import Arrow_up_right from "../assets/svg/Arrow_up_right.svg";
import circle from "../assets/images/circle.png";
import halfCircle from "../assets/images/half_circle.png";
import styles from "./Home.module.css";
import BackgroundImageJpg from "../assets/background/BackGroundForm.png";
import { useNavigate } from "react-router-dom";
import { OurServicesType } from "../types/global.d";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const formFields = [
    { type: "text", placeholder: "Name" },
    { type: "text", placeholder: "Mobile Number" },
    { type: "email", placeholder: "Email ID" },
    { type: "text", placeholder: "Location" },
    { type: "textarea", placeholder: "Type your Message..." },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const handleExploreClick = (service: OurServicesType) => {
    navigate(`/specific-services/${service.name}`, { state: service });
  };

  return (
    <React.Fragment>
      <CarouSel />
      {/* Our Services 1 */}
      <div className="container d-flex flex-column justify-center align-items-center mt-5 w-100">
        <Label
          content="Our Services"
          fontSize="lg"
          color={theme.colors.lightGreen}
        />
        <p className="my-2">
          <Label
            content="Explore Our Comprehensive Event Services"
            fontSize="2xl"
            fontWeight="bold"
            clasname={"text-center"}
          />
        </p>
        <div
          className={`row mt-4`}
          style={{ rowGap: "3rem", columnGap: "0px" }}
        >
          {OurServicesCard_1.slice(0, 6).map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <CarD
                img={item.img}
                title={item.name}
                paragraph={item.paragraph}
                handleclickProps={() => handleExploreClick(item)}
              />
            </div>
          ))}
        </div>

        <div className="my-4">
          <Button
            label={"View All"}
            icon={Arrow_up_right}
            onClick={() => navigate("/services")}
          />
        </div>
      </div>

      {/* Our Services 2 */}
      <div className="container d-flex flex-column justify-center align-items-center w-100 mt-5 ">
        <Label
          content="Our Services"
          fontSize="lg"
          color={theme.colors.lightGreen}
        />
        <p className="my-2">
          <Label
            content="Discover More Ways We Can Enhance Your Event"
            fontSize="2xl"
            fontWeight="bold"
            clasname={"text-center"}
          />
        </p>
        <div className="row mt-4" style={{ rowGap: "3rem", columnGap: "0px" }}>
          {OurServicesCard_2.slice(0, 6).map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <CarD
                img={item.img}
                title={item.name}
                paragraph={item.paragraph}
                handleclickProps={() => handleExploreClick(item)}
              />
            </div>
          ))}
        </div>

        <div className="my-4">
          <Button
            label={"View All"}
            icon={Arrow_up_right}
            onClick={() => navigate("/services")}
          />
        </div>
      </div>

      {/* about us */}
      <div className="container d-flex flex-column justify-center align-items-center w-100 mt-5">
        <Label
          content="About Us"
          fontSize="lg"
          color={theme.colors.lightGreen}
        />
        <p className="my-2">
          <Label
            content="Get to Know Nima Arun Innovations"
            fontSize="2xl"
            fontWeight="bold"
            clasname={"text-center"}
          />
        </p>

        <div className={`mt-5`}>
          {AboutUs.map((item, index) => (
            <div key={index} className="row g-4 mx-auto">
              <div className="col-lg-7 col-md-12 col-sm-12 mb-4 ">
                <div className={`mx-5 px-4 ${styles.circleHome}`}>
                  <Label
                    content={item.paragraph}
                    lineHeight={2}
                    fontSize="base"
                  />
                  <div
                    className={`mt-5 pt-2 d-flex flex-row gap-4 ${styles.circleHome}`}
                  >
                    <Button
                      label={item.fillButtonText}
                      icon={item.fillButtonIcon}
                      onClick={() => navigate("/contact-us")}
                    />
                    <Button
                      label={item.unfillButtonText}
                      icon={item.unfillButtonIcon}
                      type="unfilled"
                      onClick={() => navigate("/about")}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 mb-4 ">
                <ImageCard
                  src={item.image}
                  style={{ boxShadow: theme.shadows.small }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      <div className="container d-flex flex-column justify-center align-items-center mt-5">
        <Label
          content="Testimonial"
          fontSize="lg"
          color={theme.colors.lightGreen}
        />
        <p className="my-2">
          <Label
            content="What Our Clients Say About Us"
            fontSize="2xl"
            fontWeight="bold"
            clasname={"text-center"}
          />
        </p>
        <Testimonial />
      </div>

      {/* Gallery */}
      <div className="container d-flex flex-column justify-center align-items-center w-100 mt-5">
        <Label
          content="Gallery"
          fontSize="lg"
          color={theme.colors.lightGreen}
        />
        <p className="my-2">
          <Label
            content="Experience Our Events in Pictures"
            fontSize="2xl"
            fontWeight="bold"
            clasname={"text-center"}
          />
        </p>
        <div className={`row g-4 mt-4 mx-auto`}>
          {GalleryData.slice(0, 6).map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <ImageCard
                src={item}
                style={{ boxShadow: theme.shadows.large }}
              />
            </div>
          ))}
        </div>

        <div className="my-4">
          <Button
            label={"View All"}
            icon={Arrow_up_right}
            onClick={() => navigate("/gallery")}
          />
        </div>
      </div>

      {/* FAQ */}
      <div className="container w-100 mt-5">
        <div className="d-flex flex-column justify-center align-items-center">
          <Label
            content="FAQ’s"
            fontSize="lg"
            color={theme.colors.lightGreen}
          />
          <p className="my-2">
            <Label
              content="Answers to Your Questions"
              fontSize="2xl"
              fontWeight="bold"
            />
          </p>
        </div>
        <div className="mt-5 row pt-3">
          <div className="position-relative col-sm-12 col-md-12 col-lg-4">
            <div className={`position-absolute w-100 ${styles.circleHome}`}>
              <div className={`${styles.smallCircle}`}>
                <img
                  src={circle}
                  alt="..."
                  className="rounded-circle"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 10px 1px" }}
                />
              </div>
              <div className={`${styles.bigCircle}`}>
                <img
                  src={halfCircle}
                  alt="..."
                  className="rounded-circle"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 10px 1pxa" }}
                  // style={{ boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.25)" }}
                />
              </div>
            </div>
          </div>

          <div
            className="col-sm-12 col-md-12 col-lg-8"
            style={{ backgroundColor: "transparent", zIndex: 99 }}
          >
            <AccoRdion />
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div className="d-flex flex-column justify-center align-items-center w-100 mt-5 pt-5">
        <Label
          content="Contact Us"
          fontSize="lg"
          color={theme.colors.lightGreen}
        />
        <p className="my-2 mb-4">
          <Label
            content="Request a Free Quote"
            fontSize="2xl"
            fontWeight="bold"
          />
        </p>

        <BackImageForm
          backgroundImage={BackgroundImageJpg}
          title="Let's Plan Your Perfect Event! Request a Free Quote"
          formFields={formFields}
          buttonText="Submit"
          onSubmit={handleSubmit}
        />
      </div>
    </React.Fragment>
  );
};

export default Home;
