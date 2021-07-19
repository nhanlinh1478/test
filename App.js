
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as  firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAvZiDxwaRucuTI3YdY9-bcf0r12OXdf40",
  authDomain: "instagram-dev-f3560.firebaseapp.com",
  projectId: "instagram-dev-f3560",
  storageBucket: "instagram-dev-f3560.appspot.com",
  messagingSenderId: "1073486513297",
  appId: "1:1073486513297:web:8bcd118fe116902b192b30",
  measurementId: "G-FBKP5GWK45"
};
if (firebase.apps.length === 0 ) {
  firebase.initializeApp(firebaseConfig)
}
import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'
import MainScreen from './components/Main'
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Main">
        <Stack.Screen name = "Main" component = {MainScreen} options = {{headerShown:false}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;