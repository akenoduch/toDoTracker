import { colors } from "./colors";

type Theme = 'light' | 'dark';

export const textVariants = (theme: Theme) => {
  const themeColors = colors[theme];

  return {
    header: {
      fontSize: 26,
      fontWeight: 'bold',
      color: themeColors.text,
    },
    title: {
      fontSize: 28,
      color: themeColors.text,
      fontFamily: 'MadimiOne',
    },
    subHeader: {
      fontSize: 18,
      color: themeColors.text,
    },
    cardTitle: {
      fontSize: 20,
      color: 'white',
    },
    cardContent: {
      fontSize: 15,
      color: themeColors.text,
    },
    text: {
      fontSize: 18,
      color: themeColors.text,
    }
  };
};