import { lightTheme, darkTheme } from "./theme";

export const createTheme = (theme: "light" | "dark") => {
  if (theme === "dark") {
    return darkTheme;
  }
  return lightTheme;
};
