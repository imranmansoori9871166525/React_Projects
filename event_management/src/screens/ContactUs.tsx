import React from "react";
import BackGroundimage from "../assets/background/background.png";
import { BackgroundImage } from "../components";
import { Button, Label } from "../components/switchCaseComponents";
import { Card } from "react-bootstrap";
import { theme } from "../theme/theme";
import geolocation from "../assets/svg/geolocation.svg";
import message from "../assets/svg/message.svg";
import call_button from "../assets/svg/call_button.svg";
import backgroundImg from "../assets/background/BackGroundForm.png";
import styles from "../components/styles/BackImageForm.module.css";

const CardData = [
  {
    img: call_button,
    bigText: "Contact Number",
    smallText: "91+ 1234567890",
    buttonText: "Make a Call",
  },
  {
    img: message,
    bigText: "E-mail",
    smallText: "Abcd123@gmail,com",
    buttonText: "Send a Message",
  },
  {
    img: geolocation,
    bigText: "Our Office",
    smallText: "No 7 H.S.R Layout\nBengaluru, Karnataka, India",
    buttonText: "Our Office",
  },
];

const ContactUs: React.FC = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Contact us", href: "/contact-us" },
  ];
  const title = "Contact us";
  const backgroundImage = BackGroundimage;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  const formFields = [
    { type: "text", placeholder: "Name" },
    { type: "text", placeholder: "Mobile Number" },
    { type: "email", placeholder: "Email ID" },
    { type: "text", placeholder: "Location" },
    { type: "textarea", placeholder: "Type your Message..." },
  ];

  const inputFields = formFields.filter((field) => field.type !== "textarea");
  const textAreaFields = formFields.filter(
    (field) => field.type === "textarea"
  );

  const groupedInputFields = [];
  for (let i = 0; i < inputFields.length; i += 2) {
    groupedInputFields.push(inputFields.slice(i, i + 2));
  }

  return (
    <React.Fragment>
      <BackgroundImage
        backgroundImage={backgroundImage}
        breadcrumbs={breadcrumbs}
        title={title}
      />
      <div className="container position-relative my-5">
        <div
          className={`row mt-4 mt-5 pt-5`}
          style={{ rowGap: "3rem", columnGap: "0px" }}
        >
          {CardData.map((item, index) => (
            <Card
              style={{
                boxShadow: theme.shadows.CardShadow,
                border: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "370px",
              }}
              className={`col-lg-4 col-md-6 col-sm-12 py-3 pt-5 mx-auto ${styles.cardParentContactUs}`}
              key={index}
            >
              <Card.Img
                variant="top"
                src={item.img}
                style={{
                  width: "70px",
                  height: "70px",
                  objectFit: "contain",
                }}
              />
              <Card.Body
                className="mx-3"
                style={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textAlign: "center",
                }}
              >
                <div style={{ flex: "1" }}>
                  <Card.Title className="my-3" style={{ fontSize: "18px" }}>
                    {item.bigText}
                  </Card.Title>
                  <Card.Text className="my-4" style={{ fontSize: "16px" }}>
                    {item.smallText}
                  </Card.Text>
                </div>
                <div
                  style={{ marginTop: "auto", marginBottom: "15px" }}
                  className="mx-auto"
                >
                  <Button
                    label={item.buttonText}
                    type="filled"
                    borderRadius="8px"
                  />
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center mt-5 pt-3">
          <p className="my-2">
            <Label content="Get a Quote" fontSize="3xl" fontWeight="bold" />
          </p>
        </div>
        <div className="row my-5 pb-5">
          {/* Left Section */}
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div
              style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "96%",
                filter: "grayscale(1)",
                borderRadius: "15px",
              }}
              className={`${styles.background_image_Contact_us}`}
            >
              <div className="mx-5" style={{ paddingTop: "6rem" }}>
                <Label
                  content={"Lorem ipsum dolor sit amet Lorem ipsum dolor sit"}
                  fontSize="4xl"
                  fontWeight="semiBold"
                  color={theme.colors.white}
                />
                <div className="my-3">
                  <Label
                    content={"Lorem ipsum dolor sit amet Lorem ipsum dolor sit"}
                    fontSize="lg"
                    color={theme.colors.white}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div
            className={`${styles.fromParentContactUs} col-sm-12 col-md-12 col-lg-6`}
            style={{ backgroundColor: "#D9D9D9", borderRadius: "8px" }}
          >
            <form
              className={`px-2 py-5 ${styles.form}`}
              onSubmit={handleSubmit}
              style={{ width: "95%" }}
            >
              {groupedInputFields.map((group, index) => (
                <div key={index} className={styles.inputRow}>
                  {group.map((field, idx) => (
                    <div key={idx} className={styles.inputGroup}>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}
                </div>
              ))}
              {textAreaFields.map((field, index) => (
                <div key={index} className={styles.inputGroup}>
                  <textarea placeholder={field.placeholder}></textarea>
                </div>
              ))}
              <button type="submit" className={styles.fullWidthButton}>
                <Label
                  content={"Submit"}
                  color={theme.colors.white}
                  fontSize="xl"
                  fontWeight="bold"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactUs;
