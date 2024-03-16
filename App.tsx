import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import * as Font from 'expo-font';
import { View, ActivityIndicator } from 'react-native';

const fetchFonts = () => {
  return Font.loadAsync({
    'MadimiOne': require('./assets/fonts/MadimiOne.ttf'),
  });
};

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    fetchFonts().then(() => setFontLoaded(true));
  }, []);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('onAuthStateChanged: ', user);
      setIsSignedIn(!!user);
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  if (!fontLoaded || isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SafeAreaProvider style={{flex: 1}}>
      <NavigationContainer>
        <StackNavigator isSignedIn={isSignedIn} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}