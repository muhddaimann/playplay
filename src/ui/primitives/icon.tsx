import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "../../../contexts/themeProvider";

interface IconProps {
  name: keyof typeof MaterialCommunityIcons.glyphMap;
  size?: number;
  color?: string;
  variant?: "primary" | "secondary" | "text" | "muted" | "error";
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color,
  variant = "text",
}) => {
  const { colors } = useTheme();

  const colorMap = {
    primary: colors.primary,
    secondary: colors.secondary,
    text: colors.textPrimary,
    muted: colors.textTertiary,
    error: colors.error || "#FF3B30",
  };

  return (
    <MaterialCommunityIcons
      name={name}
      size={size}
      color={color || colorMap[variant]}
    />
  );
};
