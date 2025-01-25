import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
import PaymentScreen from '../screens/PaymentScreen';
import HomeScreen from '../screens/HomeScreen';
import LoansScreen from '../screens/LoansScreen';
import MoreScreen from '../screens/MoreScreen';
import Welcome from '../screens/Welcome';
import PaymentOptions from '../screens/PaymentOptions';
import About from '../screens/more/About';
import Feedback from '../screens/more/Feedback';
import Help from '../screens/more/Help';
import Complaints from '../screens/more/Complaints';
import TermsAndConditions from '../screens/more/TermsAndConditions';
import PrivacyPolicy from '../screens/more/PrivacyPolicy';
import Education from '../screens/programs/Education';
import Car from '../screens/programs/Car';
import HomeLoan from '../screens/programs/HomeLoan';
import Business from '../screens/programs/Business';
import Professional from '../screens/programs/Professional';
import Salaried from '../screens/programs/Salaried';

type TProtectedNavigation = {
  Tabs: undefined;
};

const ProtectedNavigation = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const MyTabs = () => {
    return (
      <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: "#09e",
        tabBarInactiveTintColor: "#555",
        tabBarStyle: {
          height: 80,
          paddingTop:10,
          backgroundColor: '#fff',
          borderTopWidth: 0,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 5,
        },
      }}
      >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' },
          tabBarIcon: ({ color, focused }) => {
            const iconName = focused ? 'home' : 'home-outline';
            return <Ionicons name={iconName} size={22} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Payments"
        component={PaymentScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Payments',
          tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' },
          tabBarIcon: ({ color, focused }) => (
            <Entypo name="wallet" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Loans"
        component={LoansScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Loans',
          tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' },
          tabBarIcon: ({ color, focused }) => (
            <Icon name="opencart" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'More',
          tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' },
          tabBarIcon: ({ color, focused }) => (
            <Entypo name="menu" size={22} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
    );
  };

  const HeaderLogo = () => {
    return (
      <Image
        source={require('../assets/logopng.png')}
        style={{width: 160, height: 60}}
        resizeMode="contain"
      />
    );
  };

  // Main Stack Navigator
  return (
    <Stack.Navigator
      initialRouteName="Tabs"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: '500',
        },
        headerStyle: {
          backgroundColor: '#09f',
        },
      }}>
      <Stack.Screen
        name="Tabs"
        component={MyTabs}
        options={{
          headerTitle: () => <HeaderLogo />,
        }}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen name="PaymentOptions" component={PaymentOptions} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Feedback" component={Feedback} />
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="Complaints" component={Complaints} />
      <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="Education" component={Education} />
      <Stack.Screen name="Car" component={Car} />
      <Stack.Screen name="HomeLoan" component={HomeLoan} />
      <Stack.Screen name="Business" component={Business} />
      <Stack.Screen name="Professional" component={Professional} />
      <Stack.Screen name="Salaried" component={Salaried} />
    </Stack.Navigator>
  );
};

export type TProtectedRoutes = NativeStackNavigationProp<TProtectedNavigation>;

export default ProtectedNavigation;
