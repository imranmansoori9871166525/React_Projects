import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { FAQData } from "../constants/Constants";
import { Label } from "./switchCaseComponents";
import "./styles/AccoRdion.css";

const AccoRdion: React.FC = () => {
  return (
    <Accordion defaultActiveKey={["0"]} flush>
      {/* <Accordion defaultActiveKey={["0"]} alwaysOpen> */}
      {FAQData.map((item, index) => (
        <Accordion.Item key={index} eventKey={index.toString()}>
          <Accordion.Header>
            <Label content={item.ques} fontSize="xl" clasname={"accordion-label"}/>
          </Accordion.Header>
          <Accordion.Body>
            <Label content={item.ans} fontSize="lg" color="#B7B7B7" clasname={"accordion-label"}/>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default AccoRdion;
