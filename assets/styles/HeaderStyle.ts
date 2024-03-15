import { StyleSheet  } from "react-native";
import { colors, ThemeColors } from '../../src/utils/colors';


export const headerStyles = (theme: 'light' | 'dark') => {
  const themeColors: ThemeColors = colors[theme];
  
  return StyleSheet.create({
    header: {
      height: 180,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    },
    today: {
      color: themeColors.title,
      fontSize: 17,
      backgroundColor: '#272430',
      borderRadius: 5,
      position: 'absolute',
      padding: 3,
      marginTop: 5,
      marginLeft: 10,
      width: '70%'
    },
    dateBar: {
      backgroundColor: '#3c1f7b',
      position: 'absolute',
      bottom: 20,
      width: '70%',
      borderRadius: 5,
      height: 50,
      justifyContent: 'center'
    },
    calendar: {
      width: 30,
      height: 30,
      right: 15,
      top: 5,
      position: 'absolute'
    },
    calendarImg: {
      width: 40,
      height: 40,
    },
    menu: {
      width: 30,
      height: 30,
      alignSelf:'flex-start',
      position: 'absolute',
      top: 40,
      right: 15,
      zIndex: 99,
    },
    menuImg: {
      height: 25,
      width: 25,
    },
    title: {
      position: 'absolute',
      left: 40,
      top: 40,
      fontFamily: 'MadimiOne'
    },
  });
};