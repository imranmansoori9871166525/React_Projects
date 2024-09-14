import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "./switchCaseComponents";
import Arrow_up_right_bule from "../assets/svg/Arrow_up_right_blue.svg";
import { theme } from "../theme/theme";

interface CardProps {
  img: string;
  title: string;
  paragraph: string;
  handleclickProps?: () => void;
}

const CarD: React.FC<CardProps> = ({
  img,
  title,
  paragraph,
  handleclickProps,
}) => {
  return (
    <Card
      style={{
        width: "90%",
        height: "100%",
        boxShadow: theme.shadows.medium,
        border: "none",
        display: "flex",
        flexDirection: "column",
        margin: "auto",
      }}
    >
      <Card.Img
        variant="top"
        src={img}
        style={{
          width: "100%",
          // height: "50%",
          objectFit: "cover",
        }}
      />
      <Card.Body
        className="mx-3"
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: "1" }}>
          <Card.Title className="my-3" style={{ margin: 0 }}>
            {title}
          </Card.Title>
          <Card.Text className="my-4" style={{ margin: 0 }}>
            {paragraph}
          </Card.Text>
        </div>
        <div style={{ marginTop: "auto", marginBottom: "15px" }}>
          <Button
            label={"Explore"}
            icon={Arrow_up_right_bule}
            type="unfilled"
            borderRadius="8px"
            onClick={handleclickProps}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default CarD;
