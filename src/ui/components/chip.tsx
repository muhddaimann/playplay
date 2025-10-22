import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { useTheme } from "../../../contexts/themeProvider";
import { Text } from "../primitives/text";
import { Icon } from "../primitives/icon";

interface ChipProps {
  label: string;
  onPress?: () => void;
  onClose?: () => void;
  icon?: React.ComponentProps<typeof Icon>["name"];
}

export const Chip: React.FC<ChipProps> = ({ label, onPress, onClose, icon }) => {
  const { colors, spacing, typography } = useTheme();

  const chipStyles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 16,
      paddingVertical: spacing.xs,
      paddingHorizontal: spacing.sm,
      backgroundColor: colors.surfaceVariant,
      alignSelf: "flex-start",
    },
    text: {
      color: colors.onSurfaceVariant,
      fontSize: typography.fontSizes.caption,
      fontFamily: typography.fontFamily.regular,
      marginHorizontal: spacing.xs,
    },
    closeButton: {
      marginLeft: spacing.sm,
    },
  });

  return (
    <TouchableOpacity style={chipStyles.container} onPress={onPress} disabled={!onPress}>
      {icon && <Icon name={icon} color={colors.onSurfaceVariant} size={16} />}
      <Text style={chipStyles.text}>{label}</Text>
      {onClose && (
        <TouchableOpacity style={chipStyles.closeButton} onPress={onClose}>
          <Icon name="close-circle" color={colors.onSurfaceVariant} size={16} />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};
