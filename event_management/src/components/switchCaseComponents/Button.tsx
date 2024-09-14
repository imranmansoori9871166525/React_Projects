import React, { CSSProperties, useState } from "react";
import { theme } from "../../theme/theme";
import Label from "./Label";
import { ButtonStyle } from "../../types/global.d";

type ButtonProps = {
  label: string;
  type?: "filled" | "unfilled";
  onClick?: () => void;
  icon?: string;
  alt?: string;
  disabled?: boolean;
  iconStyle?: CSSProperties;
  borderRadius?: string;
  borderStyle?: string;
  textColor?: string;
  hoverColorBut?: string;
};

const Button: React.FC<ButtonProps> = ({
  label,
  type = "filled",
  onClick,
  icon,
  alt = "..",
  iconStyle,
  borderRadius = "5px",
  disabled = false,
  borderStyle,
  textColor,
  hoverColorBut,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const styles = theme.button[type] as ButtonStyle;

  const hoverBackgroundColor =
    type === "filled" ? "#0056b3" : styles.backgroundColor;

  return (
    <button
      onClick={onClick}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onMouseLeave={() => {
        setIsActive(false);
        setIsHovered(false);
      }}
      onMouseEnter={() => setIsHovered(true)}
      disabled={disabled}
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0.5rem 1rem",
        fontSize: theme.fontSizes.base,
        fontWeight: theme.fontWeights.bold,
        backgroundColor:
          isHovered && type === "filled"
            ? hoverBackgroundColor
            : styles.backgroundColor,
        color: textColor || styles.color,
        border: borderStyle
          ? borderStyle
          : type === "unfilled"
          ? `2px solid ${styles.borderColor}`
          : "none",
        cursor: "pointer",
        borderRadius: borderRadius,
        opacity: disabled ? 0.5 : isActive ? 0.4 : 1,
        transition:
          "opacity 0.5s ease, background-color 0.3s ease, transform 0.3s ease",
      }}
    >
      <Label
        content={label}
        color={textColor || styles.color}
        fontWeight="bold"
        hoverColor={hoverColorBut}
      />
      {icon && (
        <img
          src={icon}
          alt={alt}
          style={{
            marginLeft: "0.5rem",
            width: "20px",
            height: "20px",
            transform:
              isHovered && type === "unfilled"
                ? "translateY(-2px)"
                : "translateY(0)",
            transition: "transform 0.3s ease",
            ...iconStyle,
          }}
        />
      )}
    </button>
  );
};

export default Button;
