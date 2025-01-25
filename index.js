import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import {app} from './src/config/firebase'; 

console.log('Firebase App Initialized:', app);
AppRegistry.registerComponent(appName, () => App);
