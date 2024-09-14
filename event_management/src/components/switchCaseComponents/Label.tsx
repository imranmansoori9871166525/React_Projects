import React, { useCallback, useState } from "react";
import { theme } from "../../theme/theme";

type FontSizeType = keyof typeof theme.fontSizes;
type FontWeightType = keyof typeof theme.fontWeights;

type LabelProps = {
  content: string;
  children?: React.ReactNode;
  fontSize?: FontSizeType;
  fontWeight?: FontWeightType;
  color?: string;
  hoverColor?: string;  
  lineHeight?: number;
  onPress?: () => void;
  disabled?: boolean;
  clasname?: any;
};

const Label: React.FC<LabelProps> = ({
  content,
  children,
  fontSize = "base",
  fontWeight = "regular",
  color = "#000000",
  hoverColor,
  lineHeight,
  onPress,
  disabled,
  clasname,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getStyleType = useCallback((): React.CSSProperties => {
    const fontSizeValue = theme.fontSizes[fontSize];
    const fontWeightValue = theme.fontWeights[fontWeight];

    return {
      fontFamily: "'Playfair Display', serif",
      fontSize: fontSizeValue,
      fontWeight: fontWeightValue,
      color: isHovered && hoverColor ? hoverColor : color,
      lineHeight,
      transition: 'color 0.3s ease',
    };
  }, [fontSize, fontWeight, color, hoverColor, isHovered, lineHeight]);

  return (
    <div
      onClick={onPress}
      style={getStyleType()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={clasname}
      {...props}
    >
      {content}
      {children}
    </div>
  );
};

export default Label;

