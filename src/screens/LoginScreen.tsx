import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebaseConfig';
import { NavigationProp, StackActions } from '@react-navigation/native';

export interface LoginProps {
  navigation: NavigationProp<any>;
}

export default function Login({ navigation }: LoginProps) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    setLoading(true);
    try {
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      navigation.dispatch(StackActions.replace('Home')); 
    } catch (error: any) {
      setLoading(false);
      Alert.alert('Oops', error.message);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={require('../../assets/logo/taskTracker.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        autoComplete="off"
      />
      <TextInput
        style={[styles.input, { marginTop: 15 }]}
        placeholder="Password"
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        {loading ? (
          <ActivityIndicator
            size={'small'}
            color={'white'}
            animating={loading}
          />
        ) : (
          <Text style={{ color: 'white' }}>Login</Text>
        )}
      </TouchableOpacity>

      <View style={styles.register}>
        <Text style={styles.link}>Don't have an account? </Text>
        <Text
          style={[styles.link, { color: '#3c1f7b' }]}
          onPress={() => navigation.navigate('Register')}
        >
          Register
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