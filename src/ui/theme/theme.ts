import { lightColors, darkColors } from "../tokens/colors";
import { spacing } from "../tokens/spacing";
import { typography } from "../tokens/typography";
import { radius } from "../tokens/radius";
import { elevation } from "../tokens/elevation";
import { duration, easing, spring } from "../tokens/motion";

export const lightTheme = {
  mode: "light",
  colors: lightColors,
  spacing,
  typography,
  radius,
  elevation,
  motion: {
    duration,
    easing,
    spring,
  },
};

export const darkTheme = {
  mode: "dark",
  colors: darkColors,
  spacing,
  typography,
  radius,
  elevation,
  motion: {
    duration,
    easing,
    spring,
  },
};
