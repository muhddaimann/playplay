import React, { useEffect, useCallback } from "react";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { ThemeProvider } from "../contexts/themeProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

import {
  useFonts,
  ComicNeue_400Regular as ComicNeueRegular,
  ComicNeue_700Bold as ComicNeueBold,
} from "@expo-google-fonts/comic-neue";
import { PressStart2P_400Regular as PressStart2PRegular } from "@expo-google-fonts/press-start-2p";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "ComicNeue-Regular": ComicNeueRegular,
    "ComicNeue-Bold": ComicNeueBold,
    "PressStart2P-Regular": PressStart2PRegular,
  });

  const onReady = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  useEffect(() => {
    onReady();
  }, [onReady]);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <StatusBar translucent backgroundColor="transparent" />
        <Slot />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
