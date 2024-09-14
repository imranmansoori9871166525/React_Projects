import React from "react";
import style from "./styles/Footer.module.css";
import { FooterData } from "../constants/Constants";
import { Button, Label } from "./switchCaseComponents";
import { theme } from "../theme/theme";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={`${style.footer_parent} w-100`}>
      {FooterData.map((item, index) => (
        <div
          className={`px-5 mx-auto py-5 row ${style.parentContainer}`}
          key={index}
        >
          <div className="col-sm-12 col-md-12 col-lg-6">
            <img
              src={item.Footerlogo}
              alt={item.NimaText}
              style={{ position: "relative", left: " -3rem" }}
              className={style.footerspacetext}
            />
            <Label content={item.NimaText} color={theme.colors.white} />
            <Label content={item.EventText} color={theme.colors.white} />
            <div className={`mt-3 pe-5 me-5 ${style.footerspacetext}`}>
              <Label
                content={item.Footerparagraphtext}
                color={theme.colors.white}
              />
            </div>
            <div className={`my-5`}>
              {item.socialIcon.map((icon, idx) => (
                <span key={idx} className="mx-2">
                  <a
                    href={icon.navigate}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={icon.name}
                      alt="social-icon"
                      style={{
                        padding: "10px",
                        borderRadius: "50%",
                        background: theme.colors.white,
                      }}
                      className="social_icon"
                    />
                  </a>
                </span>
              ))}
            </div>
          </div>
          {/* second part */}
          <div className="col-12 col-lg-6">
            <div className="row">
              <div className="col-6">
                <div className="mb-5">
                  <Label
                    content={"Quick Links"}
                    color={theme.colors.white}
                    fontSize="2xl"
                  />
                </div>
                {item.Quick_Links.map((list, listIndex) => (
                  <a
                    href={list.navigate}
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                    key={listIndex}
                  >
                    <div className="mb-3">
                      <Label content={list.name} color={theme.colors.white} />
                    </div>
                  </a>
                ))}
              </div>
              <div className="col-6">
                <div className="mb-5">
                  <Label
                    content={"Other Links"}
                    color={theme.colors.white}
                    fontSize="2xl"
                  />
                </div>
                {item.Other_Links.map((list, listIndex) => (
                  <a
                    href={list.navigate}
                    // target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                    key={listIndex}
                  >
                    <div className="mb-3">
                      <Label content={list.name} color={theme.colors.white} />
                    </div>
                  </a>
                ))}
                <div className="mt-5">
                  <Button
                    label={item.Contact_Now}
                    icon={item.Contact_NowIcon}
                    onClick={() => navigate("/contact-us")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {FooterData.map((item, index) => (
        <div
          style={{ textAlign: "center", borderTop: "1px solid #4A4A4A" }}
          className="py-4"
          key={index}
        >
          <Label
            content={item.Copyright}
            fontSize="sm"
            color={theme.colors.white}
          />
        </div>
      ))}
    </div>
  );
};

export default Footer;
