import React from "react";
import { Text as RNText, TextProps, StyleSheet } from "react-native";
import { useTheme } from "../../../contexts/themeProvider";

interface AppTextProps extends TextProps {
  variant?: keyof typeof styles;
  color?: string;
}

export const Text: React.FC<AppTextProps> = ({
  variant = "body",
  color,
  style,
  children,
  ...rest
}) => {
  const { colors, typography } = useTheme();

  const variantStyle = StyleSheet.flatten([
    styles[variant],
    {
      color: color || colors.textPrimary,
      fontFamily: typography.fontFamily.regular,
    },
    style,
  ]);

  return (
    <RNText style={variantStyle} {...rest}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  h1: { fontSize: 32, fontWeight: "700", lineHeight: 40 },
  h2: { fontSize: 24, fontWeight: "600", lineHeight: 32 },
  h3: { fontSize: 20, fontWeight: "600", lineHeight: 28 },
  subtitle: { fontSize: 18, fontWeight: "500", lineHeight: 26 },
  body: { fontSize: 16, fontWeight: "400", lineHeight: 24 },
  caption: { fontSize: 12, fontWeight: "400", lineHeight: 16 },
});
