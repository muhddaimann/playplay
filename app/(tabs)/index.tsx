import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "../../contexts/themeProvider";
import { useNotification } from "../../contexts/notificationProvider";
import { Text } from "../../src/ui/primitives/text";
import { Icon } from "../../src/ui/primitives/icon";
import { Button } from "../../src/ui/components/button";
import { TextInput } from "../../src/ui/components/textInput";

export default function HomeScreen() {
  const { colors, spacing } = useTheme();
  const { showToast, showModal } = useNotification();
  const [name, setName] = useState("");

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Icon name="home-variant" size={40} variant="primary" />
      <Text
        variant="h1"
        style={{ marginTop: spacing.sm, color: colors.textPrimary }}
      >
        Home Tab
      </Text>

      <Text
        variant="body"
        style={{ color: colors.textSecondary, marginTop: spacing.xs }}
      >
        Welcome back! Explore your goofy new theme 🎉
      </Text>

      {/* Themed Input */}
      <View style={{ width: "80%", marginTop: spacing.lg }}>
        <TextInput
          label="Your Name"
          value={name}
          onChangeText={setName}
          placeholder="Type something fun..."
          iconLeft="account"
        />
      </View>

      {/* Themed Button */}
      <View style={{ marginTop: spacing.md }}>
        <Button
          title="Say Hello"
          onPress={() => alert(`Hey ${name || "there"} 👋`)}
          variant="primary"
          iconLeft="hand-wave-outline"
        />
      </View>

      <View style={{ marginTop: spacing.md }}>
        <Button
          title="Show Toast"
          onPress={() => showToast({ message: "This is a toast!" })}
          variant="secondary"
        />
      </View>

      <View style={{ marginTop: spacing.md }}>
        <Button
          title="Show Modal"
          onPress={() =>
            showModal({
              title: "This is a modal!",
              message: "You can put any content you want here.",
            })
          }
          variant="outline"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});