import React, {useEffect} from 'react';
import { SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import ProtectedNavigation from './src/navigation/ProtectedNavigation';
import {initializeApp} from '@react-native-firebase/app';
import {firebaseConfig} from './src/config/firebase';
import { firebase } from '@react-native-firebase/firestore';

const App = () => {
  useEffect(() => {
    if (!firebase.apps.length) {
      initializeApp(firebaseConfig);
      console.log('Firebase app initialized');
    }
  }, [])

  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <ProtectedNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
