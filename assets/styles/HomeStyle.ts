import { StyleSheet } from "react-native";
import { colors, ThemeColors } from '../../src/utils/colors';

export const homeStyles = (theme: 'light' | 'dark') => {
  const themeColors: ThemeColors = colors[theme];
  return StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  scrollview: {
    width: '90%', 
    alignSelf: 'center'
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 50,
  },
  icon: {
    width: 70,
    height: 70,
  },
});
};