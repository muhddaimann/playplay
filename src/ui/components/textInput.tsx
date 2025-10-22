import React, { useState } from "react";
import { TextInput as RNTextInput, StyleSheet, View } from "react-native";
import { useTheme } from "../../../contexts/themeProvider";
import { Text } from "../primitives/text";
import { Icon } from "../primitives/icon";

interface TextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  errorMessage?: string;
  disabled?: boolean;
  iconLeft?: React.ComponentProps<typeof Icon>["name"];
  iconRight?: React.ComponentProps<typeof Icon>["name"];
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  errorMessage,
  disabled = false,
  iconLeft,
  iconRight,
}) => {
  const { colors, spacing, typography } = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const textInputStyles = StyleSheet.create({
    container: {
      marginBottom: spacing.md,
    },
    label: {
      marginBottom: spacing.xs,
      color: colors.textSecondary,
      fontFamily: typography.fontFamily.regular,
      fontSize: typography.fontSizes.caption,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: spacing.sm,
      borderColor: isFocused ? colors.primary : errorMessage ? colors.error : colors.border,
      backgroundColor: disabled ? colors.disabled : colors.surface,
    },
    input: {
      flex: 1,
      paddingVertical: spacing.sm,
      color: colors.textPrimary,
      fontFamily: typography.fontFamily.regular,
      fontSize: typography.fontSizes.body,
    },
    error: {
      marginTop: spacing.xs,
      color: colors.error,
      fontFamily: typography.fontFamily.regular,
      fontSize: typography.fontSizes.caption,
    },
  });

  return (
    <View style={textInputStyles.container}>
      <Text style={textInputStyles.label}>{label}</Text>
      <View style={textInputStyles.inputContainer}>
        {iconLeft && <Icon name={iconLeft} color={colors.textSecondary} size={20} />}
        <RNTextInput
          style={textInputStyles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.textTertiary}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          editable={!disabled}
        />
        {iconRight && <Icon name={iconRight} color={colors.textSecondary} size={20} />}
      </View>
      {errorMessage && <Text style={textInputStyles.error}>{errorMessage}</Text>}
    </View>
  );
};
