import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../../contexts/themeProvider";

export default function TwoScreen() {
  const { colors, typography } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text
        style={{
          fontFamily: typography.fontFamily.semibold,
          fontSize: typography.fontSizes.h1,
          lineHeight: typography.lineHeights.h1,
          color: colors.textPrimary,
        }}
      >
        Second Tab
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
