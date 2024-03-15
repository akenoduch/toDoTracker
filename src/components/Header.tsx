import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, useColorScheme, Platform } from 'react-native';
import { headerStyles } from '../../assets/styles/HeaderStyle';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import 'moment/locale/pt-br';
import { textVariants } from '../utils/textVariants';

moment.locale('pt-br');

const Header: React.FC<{ onOpenMenu: () => void, onDateChange: (date: Date) => void, selectedDate: Date, setSelectedDate: React.Dispatch<React.SetStateAction<Date>> }> = ({ onOpenMenu, onDateChange, selectedDate, setSelectedDate }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [date, setDate] = useState(new Date());
  const [calendarVisible, setCalendarVisible] = useState(false);
  const scheme = useColorScheme();
  const theme = scheme !== 'dark' ? 'light' : 'dark';
  const textStyles = textVariants(theme);
  const styles = headerStyles(theme);

  const handleCalendarPress = () => {
    setCalendarVisible(true);
  };

    // Faz a primeira letra do nome do mês ser maiúscula
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const formatDate = (date: Date): string => {
    const formattedDate = moment(selectedDate).format('DD [de] MMMM [de] YYYY');
    return formattedDate.split(' ').map((word, index) => {
      return (index === 0 || index === 2) ? capitalizeFirstLetter(word) : word;
    }).join(' ');
  }

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onOpenMenu} style={styles.menu}>
        <Image source={require('../../assets/icons/menu.png')} style={styles.menuImg}/>
      </TouchableOpacity>
      <Text style={[styles.title, textStyles.title]}>toDoTracker</Text>
      <View style={styles.dateBar}>
        <Text style={[styles.today, textStyles.text]}>{formatDate(date)}</Text>
        <TouchableOpacity onPress={handleCalendarPress} style={styles.calendar}>
          <Image source={require('../../assets/icons/calendar.png')} style={styles.calendarImg} />
        </TouchableOpacity>
        {calendarVisible && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              const currentDate = selectedDate || date;
              setCalendarVisible(Platform.OS === 'ios' ? true : false);
              setSelectedDate(currentDate);
              onDateChange(currentDate);
            }}
          />
        )}
      </View>
    </View>
  );
};
export default Header;
