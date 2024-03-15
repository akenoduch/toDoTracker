import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { LoginProps } from './LoginScreen';
import { registerUser } from '../firebase/firestore/create';

export default function Register({ navigation }: LoginProps) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  async function handleRegister() {
    setLoading(true);
    try {
      await registerUser({ email, password, displayName: userName });

      Alert.alert(
        'Success',
        'Account created successfully. Please login to continue.',
        [{ text: 'Okay', onPress: () => navigation.navigate('Login') }]
      );
    } catch (error: any) {
      setLoading(false);
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Registration Failed', 'The email address is already in use by another account.');
      } else {
        Alert.alert('Registration Failed', error.message);
      }
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <Image
        source={require('../../assets/logo/taskTracker.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        inputMode="email"
        autoCapitalize={'none'}
      />
      <TextInput
        style={[styles.input, { marginTop: 15 }]}
        placeholder="Username"
        onChangeText={setUserName}
      />
      <TextInput
        style={[styles.input, { marginTop: 15 }]}
        placeholder="Password"
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        {loading ? (
          <ActivityIndicator
            size={'small'}
            color={'white'}
            animating={loading}
          />
        ) : (
          <Text style={{ color: 'white' }}>Register</Text>
        )}
      </TouchableOpacity>

      <View style={styles.register}>
        <Text style={styles.link}>Have an account already? </Text>
        <Text
          style={[styles.link, { color: '#3c1f7b' }]}
          onPress={() => navigation.navigate('Login')}
        >
          login
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    fontSize: 15,
    color: 'gray',
  },
  register: {
    marginTop: 25,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginBottom: 40,
    width: 180,
    height: 180,
    alignSelf: 'center',
  },
  button: {
    width: '90%',
    height: 45,
    backgroundColor: '#3c1f7b',
    borderRadius: 6,
    marginTop: 25,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    height: 45,
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});