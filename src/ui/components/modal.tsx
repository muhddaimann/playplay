import React from "react";
import {
  Modal as RNModal,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { useTheme } from "../../../contexts/themeProvider";
import { Text } from "../primitives/text";
import { Button } from "./button";

type ModalVariant = "default" | "danger" | "success";

interface AppModalProps {
  visible: boolean;
  title?: string;
  message?: string;
  children?: React.ReactNode; // custom body (overrides message)
  variant?: ModalVariant;
  confirmText?: string;
  cancelText?: string;
  dismissible?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export const Modal: React.FC<AppModalProps> = ({
  visible,
  title,
  message,
  children,
  variant = "default",
  confirmText = "OK",
  cancelText = "Cancel",
  dismissible = true,
  onConfirm,
  onCancel,
}) => {
  const { colors, spacing, radius, elevation } = useTheme();

  // Map modal intent to existing Button variants
  const confirmVariant: "primary" | "secondary" =
    variant === "danger" ? "secondary" : "primary";

  return (
    <RNModal
      visible={visible}
      transparent
      statusBarTranslucent
      animationType="fade"
      onRequestClose={onCancel}
    >
      <TouchableWithoutFeedback onPress={dismissible ? onCancel : undefined}>
        <View style={[styles.backdrop, { backgroundColor: colors.overlay }]} />
      </TouchableWithoutFeedback>

      <View style={styles.centerWrap} pointerEvents="box-none">
        <View
          style={[
            styles.card,
            { backgroundColor: colors.surface, borderRadius: radius.lg },
            elevation.level3,
          ]}
        >
          {!!title && (
            <Text
              variant="h2"
              style={{ marginBottom: spacing.xs, color: colors.textPrimary }}
            >
              {title}
            </Text>
          )}

          {children ? (
            <View style={{ marginTop: spacing.xs }}>{children}</View>
          ) : !!message ? (
            <Text
              variant="body"
              style={{ color: colors.textSecondary, marginTop: spacing.xs }}
            >
              {message}
            </Text>
          ) : null}

          <View style={{ height: spacing.md }} />

          <View style={styles.row}>
            <Button
              title={cancelText}
              variant="ghost"
              onPress={onCancel || (() => {})}
            />
            <View style={{ width: spacing.sm }} />
            <Button
              title={confirmText}
              variant={confirmVariant}
              onPress={onConfirm || (() => {})}
            />
          </View>
        </View>
      </View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  backdrop: { ...StyleSheet.absoluteFillObject },
  centerWrap: { flex: 1, justifyContent: "center", padding: 20 },
  card: { padding: 20 },
  row: { flexDirection: "row", justifyContent: "flex-end" },
});
