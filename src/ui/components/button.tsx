import React from "react";
import { TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { useTheme } from "../../../contexts/themeProvider";
import { Text } from "../primitives/text";
import { Icon } from "../primitives/icon";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  iconLeft?: React.ComponentProps<typeof Icon>["name"];
  iconRight?: React.ComponentProps<typeof Icon>["name"];
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = "primary",
  size = "md",
  isLoading = false,
  iconLeft,
  iconRight,
}) => {
  const { colors, spacing, typography } = useTheme();

  const buttonStyles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 8,
      paddingVertical: size === "sm" ? spacing.xs : size === "lg" ? spacing.md : spacing.sm,
      paddingHorizontal: size === "sm" ? spacing.sm : size === "lg" ? spacing.xl : spacing.lg,
    },
    primary: {
      backgroundColor: colors.primary,
    },
    secondary: {
      backgroundColor: colors.secondary,
    },
    outline: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: colors.border,
    },
    ghost: {
      backgroundColor: "transparent",
    },
    text: {
      color: variant === "primary" || variant === "secondary" ? colors.onPrimary : colors.primary,
      fontSize: size === "sm" ? typography.fontSizes.caption : size === "lg" ? typography.fontSizes.body : typography.fontSizes.label,
      fontFamily: typography.fontFamily.semibold,
    },
  });

  return (
    <TouchableOpacity
      style={[buttonStyles.container, buttonStyles[variant]]}
      onPress={onPress}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator color={variant === "primary" || variant === "secondary" ? colors.onPrimary : colors.primary} />
      ) : (
        <>
          {iconLeft && <Icon name={iconLeft} color={buttonStyles.text.color} size={buttonStyles.text.fontSize} />}
          <Text style={buttonStyles.text}>{title}</Text>
          {iconRight && <Icon name={iconRight} color={buttonStyles.text.color} size={buttonStyles.text.fontSize} />}
        </>
      )}
    </TouchableOpacity>
  );
};
