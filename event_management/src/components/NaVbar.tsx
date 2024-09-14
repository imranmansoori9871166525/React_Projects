import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavData } from "../constants/Constants";
import { Button } from "./switchCaseComponents";
import { NavLink as RoutedNavLink, useNavigate } from "react-router-dom";
import "./styles/NavBar.css"

const CustomNavbar: React.FC = () => {
  const { logo, links, button } = NavData[0];
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(button[2]);
  };

  return (
    <Navbar
      expand="lg"
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#FFFFFF",
        zIndex: 99,
      }}
    >
      <Container>
        <Navbar.Brand as={RoutedNavLink} to="/">
          <img src={logo} alt="Logo" style={{ height: "55px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto ">
            {links.map((link, index) => (
              <Nav.Link
                as={RoutedNavLink}
                to={link.navigate}
                key={index}
                className={`mx-3`}
                style={{fontSize: "1.2rem",
                }}
                >
                {link.name}
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            <Button
              label={button[0]}
              icon={button[1]}
              onClick={handleButtonClick}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
