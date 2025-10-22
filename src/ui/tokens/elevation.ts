import { Platform, type ViewStyle } from "react-native";

type Level = "level1" | "level2" | "level3" | "level4" | "level5";

const iosShadow: Record<Level, ViewStyle> = {
  level1: { shadowColor: "#000", shadowOpacity: 0.08, shadowRadius: 6,  shadowOffset: { width: 0, height: 3 } },
  level2: { shadowColor: "#000", shadowOpacity: 0.10, shadowRadius: 10, shadowOffset: { width: 0, height: 4 } },
  level3: { shadowColor: "#000", shadowOpacity: 0.12, shadowRadius: 14, shadowOffset: { width: 0, height: 6 } },
  level4: { shadowColor: "#000", shadowOpacity: 0.16, shadowRadius: 20, shadowOffset: { width: 0, height: 10 } },
  level5: { shadowColor: "#000", shadowOpacity: 0.20, shadowRadius: 28, shadowOffset: { width: 0, height: 14 } },
};

const androidElevation: Record<Level, ViewStyle> = {
  level1: { elevation: 2 },
  level2: { elevation: 4 },
  level3: { elevation: 6 },
  level4: { elevation: 10 },
  level5: { elevation: 16 },
};

export const elevation: Record<Level, ViewStyle> = {
  level1: Platform.select<ViewStyle>({
    ios: iosShadow.level1,
    android: androidElevation.level1,
    web: iosShadow.level1,
    default: androidElevation.level1,
  })!,
  level2: Platform.select<ViewStyle>({
    ios: iosShadow.level2,
    android: androidElevation.level2,
    web: iosShadow.level2,
    default: androidElevation.level2,
  })!,
  level3: Platform.select<ViewStyle>({
    ios: iosShadow.level3,
    android: androidElevation.level3,
    web: iosShadow.level3,
    default: androidElevation.level3,
  })!,
  level4: Platform.select<ViewStyle>({
    ios: iosShadow.level4,
    android: androidElevation.level4,
    web: iosShadow.level4,
    default: androidElevation.level4,
  })!,
  level5: Platform.select<ViewStyle>({
    ios: iosShadow.level5,
    android: androidElevation.level5,
    web: iosShadow.level5,
    default: androidElevation.level5,
  })!,
};
