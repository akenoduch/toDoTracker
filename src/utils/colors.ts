export type ThemeColors = {
    primary: string;
    text: string;
    title: string;
    cardBackground: string;
    fontFamily: string;
  };
  
export const colors: Record<'light' | 'dark', ThemeColors> = {
    light: {
      primary: '#ffffff',
      text: '#ffffff',
      title: '#26AF76',
      cardBackground: '#7e64ff',
      fontFamily: 'MadimiOne',
    },
    dark: {
      primary: '#ffffff',
      text: '#ffffff',
      title: '#ffffff',
      cardBackground: '#7e64ff',
      fontFamily: 'MadimiOne',
    },
  };