import React, { useCallback, useEffect, useState } from "react";
import GotoIcon from "../assets/svg/GotoIcon.svg";
import styles from "./styles/Footer.module.css";

const GotoTop: React.FC = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const checkScrollPosition = useCallback(() => {
    if (window.scrollY > 250) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, [checkScrollPosition]);

  return (
    <React.Fragment>
      {showButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "50px",
            right: "80px",
            border: "none",
            borderRadius: "50%",
            padding: "10px",
            cursor: "pointer",
            zIndex: 1000,
            animation: "moveUpDown 2s ease-in-out infinite",
          }}
          className={styles.hoverButton} 
        >
          <img
            src={GotoIcon}
            alt="Go to top"
            style={{ width: "30px", height: "30px" }}
          />
        </button>
      )}
    </React.Fragment>
  );
};

export default GotoTop;
