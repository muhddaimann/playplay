import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, ViewStyle } from "react-native";
import { useTheme } from "../../../contexts/themeProvider";
import { Text } from "../primitives/text";

type ToastType = "info" | "success" | "warning" | "error";

interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onHide?: () => void;
  position?: "bottom" | "top";
  textVariant?: "label" | "body" | "caption"; // allow sizing
  maxLines?: number; // handle long text
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = "success",
  duration = 2500,
  onHide,
  position = "bottom",
  maxLines = 2,
}) => {
  const { colors, spacing, radius, elevation, motion } = useTheme();
  const translate = useRef(new Animated.Value(40)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  const colorMap = {
    info: { bg: colors.info, fg: colors.onInfo },
    success: { bg: colors.success, fg: colors.onSuccess },
    warning: { bg: colors.warning, fg: colors.onWarning },
    error: { bg: colors.error, fg: colors.onError },
  }[type];

  const containerPos: ViewStyle =
    position === "bottom"
      ? { bottom: spacing.lg, left: spacing.lg, right: spacing.lg }
      : { top: spacing.lg, left: spacing.lg, right: spacing.lg };

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: motion.duration.fast,
        useNativeDriver: true,
      }),
      Animated.timing(translate, {
        toValue: 0,
        duration: motion.duration.normal,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          duration: motion.duration.fast,
          useNativeDriver: true,
        }),
        Animated.timing(translate, {
          toValue: 40,
          duration: motion.duration.normal,
          useNativeDriver: true,
        }),
      ]).start(() => onHide?.());
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, motion, onHide, opacity, translate]);

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styles.wrap,
        containerPos,
        {
          opacity,
          transform: [
            {
              translateY:
                position === "bottom"
                  ? translate
                  : Animated.multiply(translate, -1),
            },
          ],
        },
      ]}
    >
      <Animated.View
        style={[
          styles.toast,
          elevation.level2,
          {
            backgroundColor: colorMap.bg,
            borderRadius: radius.lg,
            paddingVertical: spacing.sm,
            paddingHorizontal: spacing.md,
          },
        ]}
      >
        <Text
          variant="caption"
          color={colorMap.fg}
          numberOfLines={maxLines}
          ellipsizeMode="tail"
        >
          {message}
        </Text>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  wrap: { position: "absolute", alignItems: "center" },
  toast: { alignSelf: "stretch" },
});
