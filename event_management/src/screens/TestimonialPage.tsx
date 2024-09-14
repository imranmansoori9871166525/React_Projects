import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import BackGroundimage from "../assets/background/background.png";
import { TestimonialData } from "../constants/Constants";
import { Card } from "react-bootstrap";
import "../components/styles/Testimonial.css";
import { theme } from "../theme/theme";
import { Label } from "../components/switchCaseComponents";
import { BackImageForm } from "../components";
import BackgroundImageJpg from "../assets/background/BackGroundForm.png";

const CARD_WIDTH = "500px";
const CARD_HEIGHT = "100%";

const TestimonialPage: React.FC = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Testimonial", href: "/testimonials" },
  ];
  const title = "Testimonial";
  const backgroundImage = BackGroundimage;

  const visibleTestimonialData = TestimonialData.slice(6);

  const formFields = [
    { type: "text", placeholder: "Name" },
    { type: "text", placeholder: "Mobile Number" },
    { type: "email", placeholder: "Email ID" },
    { type: "text", placeholder: "Location" },
    { type: "textarea", placeholder: "Type your Message..." },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <React.Fragment>
      <BackgroundImage
        backgroundImage={backgroundImage}
        breadcrumbs={breadcrumbs}
        title={title}
      />

      <div
        className={`container row mt-5 mx-auto`}
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        {visibleTestimonialData.map((testimonial, index) => (
          <Card
            key={index}
            style={{
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            className="card-custom px-5 my-3"
          >
            <div
              className={`d-flex justify-content-center`}
              style={{
                width: "100%",
                marginTop: "10px",
              }}
            >
              <div style={{ width: "112px", height: "112px" }}>
                {testimonial.image && (
                  <Card.Img
                    variant="top"
                    src={testimonial.image}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                )}
              </div>
            </div>
            <Card.Body
              className={`d-flex flex-column justify-content-between`}
              style={{
                padding: "1rem",
                height: "100%",
                textAlign: "center",
                boxShadow: theme.shadows.medium,
                borderRadius: "8px",
              }}
            >
              <div>
                <Card.Title className={`my-3`} style={{ margin: 0 }}>
                  <Label
                    content={testimonial.name}
                    fontSize="lg"
                    color={theme.colors.lightGreen}
                  />
                </Card.Title>
                <Card.Text className={`my-4`} style={{ margin: 0 }}>
                  <Label content={testimonial.paragraph} color="#B7B7B7" />
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* get a quote now */}
      <div className="d-flex flex-column justify-center align-items-center w-100 mt-5 pt-5">
        <p className="my-2 mb-3">
          <Label content="Get a Quote Now!" fontSize="4xl" fontWeight="bold" />
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

export default TestimonialPage;
