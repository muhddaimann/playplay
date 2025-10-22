import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "../../../contexts/themeProvider";
import { Text } from "../primitives/text";

interface BadgeProps {
  label: string;
  variant?: "primary" | "secondary" | "success" | "warning" | "error";
}

export const Badge: React.FC<BadgeProps> = ({ label, variant = "primary" }) => {
  const { colors, spacing, typography } = useTheme();

  const badgeStyles = StyleSheet.create({
    container: {
      borderRadius: 4,
      paddingVertical: spacing.xxs,
      paddingHorizontal: spacing.xs,
      alignSelf: "flex-start",
    },
    primary: {
      backgroundColor: colors.primaryContainer,
    },
    secondary: {
      backgroundColor: colors.secondaryContainer,
    },
    success: {
      backgroundColor: colors.success,
    },
    warning: {
      backgroundColor: colors.warning,
    },
    error: {
      backgroundColor: colors.error,
    },
    text: {
      color: variant === "primary" ? colors.onPrimaryContainer : variant === "secondary" ? colors.onSecondaryContainer : colors.onSurface,
      fontSize: typography.fontSizes.micro,
      fontFamily: typography.fontFamily.semibold,
    },
  });

  return (
    <View style={[badgeStyles.container, badgeStyles[variant]]}>
      <Text style={badgeStyles.text}>{label}</Text>
    </View>
  );
};
