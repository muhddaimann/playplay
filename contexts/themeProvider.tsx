import React, { createContext, useContext } from "react";
import { useColorScheme } from "react-native";
import { createTheme } from "../src/ui/theme/createTheme";
import { lightTheme } from "../src/ui/theme/theme";

const ThemeContext = createContext(lightTheme);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const colorScheme = useColorScheme();
  const theme = createTheme(colorScheme === "dark" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
