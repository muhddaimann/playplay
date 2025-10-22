import { useWindowDimensions } from 'react-native';

export const useResponsive = () => {
  const { width, height } = useWindowDimensions();

  const isSmallScreen = width < 375;

  return { width, height, isSmallScreen };
};
