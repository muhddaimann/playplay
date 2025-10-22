import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "../../../contexts/themeProvider";
import { Text } from "../primitives/text";

interface CardProps {
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children, footer }) => {
  const { colors, spacing } = useTheme();

  const cardStyles = StyleSheet.create({
    container: {
      backgroundColor: colors.surface,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.border,
      padding: spacing.md,
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    header: {
      marginBottom: spacing.md,
    },
    footer: {
      marginTop: spacing.md,
      borderTopWidth: 1,
      borderTopColor: colors.border,
      paddingTop: spacing.md,
    },
  });

  return (
    <View style={cardStyles.container}>
      {title && (
        <View style={cardStyles.header}>
          <Text variant="h3">{title}</Text>
        </View>
      )}
      {children}
      {footer && <View style={cardStyles.footer}>{footer}</View>}
    </View>
  );
};
