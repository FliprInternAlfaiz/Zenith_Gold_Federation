import React, { useEffect } from 'react';
import { Alert, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { requestMultiple, PERMISSIONS, RESULTS } from "react-native-permissions";
import ProtectedNavigation from './src/navigation/ProtectedNavigation';

const App = () => {
  const requestPermissions = async () => {
    try {
      const statuses = await requestMultiple([
        PERMISSIONS.ANDROID.READ_CONTACTS,
        PERMISSIONS.ANDROID.WRITE_CONTACTS,
        PERMISSIONS.ANDROID.READ_CALL_LOG,
        PERMISSIONS.ANDROID.WRITE_CALL_LOG,
        PERMISSIONS.ANDROID.ANSWER_PHONE_CALLS,
      ]);
      
      const deniedPermissions = Object.entries(statuses).filter(
        ([, status]) => status === RESULTS.DENIED,
      );
      if (deniedPermissions.length > 0) {
        Alert.alert(
          'Permissions Required',
          'Some permissions are necessary for the app to function properly. Please grant them in the app settings.',
        );
      }
    } catch (error) {
      console.error('Error requesting permissions:', error);
    }
  };

  useEffect(() => {
    requestPermissions();
    
  }, []);


  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <ProtectedNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;