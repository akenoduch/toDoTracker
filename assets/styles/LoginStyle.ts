import { StyleSheet } from 'react-native';

export const loginStyles = (theme: 'dark' | 'light') => {
  const darkMode = theme === 'dark';

  return StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  registerText: {
    color: '#007bff',
    textAlign: 'center',
    marginTop: 20,
  },
});
};