import { StyleSheet } from "react-native";
import { colors, ThemeColors } from '../../src/utils/colors';

export const editPopupStyles = (theme: 'light' | 'dark') => {
  const themeColors: ThemeColors = colors[theme];

  return StyleSheet.create({
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: '80%',
      backgroundColor: themeColors.cardBackground,
      padding: 20,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    input: {
      borderWidth: 1,
      padding: 10,
      marginBottom: 10,
      color: themeColors.text,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 10,
    },
    button: {
      flex: 1,
      marginHorizontal: 5,
    },
    modalTitle: {
      justifyContent: 'center',
      fontSize: 20,
      color: themeColors.primary,
      marginBottom: 5,
    },
  });
};
