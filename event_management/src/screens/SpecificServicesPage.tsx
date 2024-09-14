import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { BackgroundImage, ImageCard } from "../components";
import BackGroundimage from "../assets/background/background.png";
import { OurServicesType } from "../types/global.d";
import { Button, Label } from "../components/switchCaseComponents";
import "../App.css";

const SpecificServicesPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const item = location.state as OurServicesType;

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: item.name, href: `/specific-services/${id}` },
  ];

  const title = item.name;
  const backgroundImage = BackGroundimage;

  return (
    <React.Fragment>
      <BackgroundImage
        backgroundImage={backgroundImage}
        breadcrumbs={breadcrumbs}
        title={title}
      />

      <div className="container mainCategoryPage">
        <div className="mb-4 mt-5">
          <Label content={item.name} fontSize="4xl" fontWeight="bold" clasname={"backgroundImageFont"}/>
        </div>
        {item.CategoriesPages?.map((item, index) => (
          <>
            <div key={index} className="row">
              <div className="col-sm-12 col-md-12 col-lg-6">
                <ImageCard src={item.bigImg} width="95%" borderRadius="12px" />
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 my-auto marginTopCategoryPage">
                <Label
                  content={item.text}
                  fontSize="xl"
                  lineHeight={1.5}
                  fontWeight="regular"
                  color="#747474"
                />
                <div className="my-4">
                  <Button
                    label={"Enquire Now"}
                    onClick={() => navigate("/contact-us")}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="row my-5 pt-4 pb-5" style={{ rowGap: "3rem" }}>
                {item.images.map((img, imgIndex) => (
                  <div className="col-sm-12 col-md-6 col-lg-4" key={imgIndex}>
                    <ImageCard src={img} borderRadius="12px" />
                  </div>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
    </React.Fragment>
  );
};

export default SpecificServicesPage;
