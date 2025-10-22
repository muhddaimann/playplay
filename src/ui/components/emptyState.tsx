import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "../../../contexts/themeProvider";
import { Text } from "../primitives/text";
import { Icon } from "../primitives/icon";
import { Button } from "./button";

interface EmptyStateProps {
  icon: React.ComponentProps<typeof Icon>["name"];
  title: string;
  description: string;
  cta?: {
    title: string;
    onPress: () => void;
  };
}

export const EmptyState: React.FC<EmptyStateProps> = ({ icon, title, description, cta }) => {
  const { colors, spacing } = useTheme();

  const emptyStateStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: spacing.xl,
      backgroundColor: colors.background,
    },
    iconContainer: {
      marginBottom: spacing.lg,
    },
    title: {
      textAlign: "center",
      marginBottom: spacing.sm,
    },
    description: {
      textAlign: "center",
      marginBottom: spacing.lg,
      color: colors.textSecondary,
    },
  });

  return (
    <View style={emptyStateStyles.container}>
      <View style={emptyStateStyles.iconContainer}>
        <Icon name={icon} size={64} color={colors.textTertiary} />
      </View>
      <Text variant="h2" style={emptyStateStyles.title}>
        {title}
      </Text>
      <Text style={emptyStateStyles.description}>{description}</Text>
      {cta && <Button title={cta.title} onPress={cta.onPress} />}
    </View>
  );
};
