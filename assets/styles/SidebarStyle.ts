import { StyleSheet } from 'react-native';

export const sidebarStyles = (theme: 'light' | 'dark') => StyleSheet.create({
    fullScreen: {
      flex: 1,
      flexDirection: 'row',
    },
    transparentArea: {
      width: '30%',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    menuContainer: {
      width: '70%',
      backgroundColor: theme === 'dark' ? '#333' : '#FFF',
    },
  menuItem: {
    color: theme === 'dark' ? '#FFF' : '#000',
    marginLeft: 20 ,
    marginTop: 10,
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  menuLogo: {
    width: '100%',
    height: 200
  },
  logoutButton: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
  logoutButtonText: {
    color: theme === 'dark' ? '#FFF' : '#000', 
    fontSize: 16, 
  },
  menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  menuIcon: {
    width: 35, 
    height: 35, 
    marginRight: 8, 
  },
  menuItemText: {
    color: theme === 'dark' ? '#FFF' : '#000',
    fontSize: 17
  },
  hello: {
    color: theme === 'dark' ? '#FFF' : '#000',
    marginLeft: 20 ,
    marginTop: 10,
    fontSize: 25,
  },
  hello2: {
    color: theme === 'dark' ? '#FFF' : '#000',
    marginLeft: 20 ,
    marginTop: 10,
    marginBottom: 20
  }
});
