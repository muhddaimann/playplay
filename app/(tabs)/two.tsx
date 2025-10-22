import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "../../contexts/themeProvider";
import { Text } from "../../src/ui/primitives/text";
import { Icon } from "../../src/ui/primitives/icon";
import { Button } from "../../src/ui/components/button";
import { TextInput } from "../../src/ui/components/textInput";

export default function Explore() {
  const { colors, spacing } = useTheme();
  const [idea, setIdea] = useState("");

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Icon name="compass-outline" size={40} variant="secondary" />
      <Text
        variant="h1"
        style={{ marginTop: spacing.sm, color: colors.textPrimary }}
      >
        Explore
      </Text>

      <Text
        variant="body"
        style={{ color: colors.textSecondary, marginTop: spacing.xs }}
      >
        Adventure awaits — find something fun 🤪
      </Text>

      {/* Themed Input */}
      <View style={{ width: "80%", marginTop: spacing.lg }}>
        <TextInput
          label="Your Idea"
          value={idea}
          onChangeText={setIdea}
          placeholder="Where to next?"
          iconLeft="lightbulb-outline"
        />
      </View>

      {/* Themed Button */}
      <View style={{ marginTop: spacing.md }}>
        <Button
          title="Go Explore!"
          onPress={() => alert(`Let's explore: ${idea || "something new!"} 🗺️`)}
          variant="secondary"
          iconRight="rocket-launch-outline"
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
