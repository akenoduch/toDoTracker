import { Platform, StyleSheet, Dimensions } from "react-native";
import { colors, ThemeColors } from '../../src/utils/colors';

const { height } = Dimensions.get('window');

export const homeStyles = (theme: 'light' | 'dark') => {
  const themeColors: ThemeColors = colors[theme];
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      height: height ,
      paddingBottom: Platform.OS === 'android' ? 0 : 0, 
    },
    scrollview: {
      width: '90%', 
      alignSelf: 'center',
      height: '100%'
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
