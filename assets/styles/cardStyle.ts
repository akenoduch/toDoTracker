import { StyleSheet } from 'react-native';
import { colors } from '../../src/utils/colors'; 

export const cardStyles = (theme: 'light' | 'dark') => StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    backgroundColor: colors[theme].cardBackground,
  },
  title: {
    fontWeight: '500'
  },
  content: {
    width: '85%'
  },
  deleteButton: {
    position: 'absolute',
    right: 0,
    width: 40,
    height: 40,
    zIndex: 2,
  },
  editButton: {
    position: 'absolute',
    right: 40,
    width: 40,
    height: 40,
    zIndex: 2,
  },
  icon: {
    width: 30,
    height: 30
  },
  checkbox: {
    position: 'absolute',
    right: 10,
    bottom: 5,
  }
});
