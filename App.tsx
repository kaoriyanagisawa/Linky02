import { NavigationContainer,useNavigation, NavigationProp } from '@react-navigation/native';
import { ThemeProvider } from '@rneui/themed';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StackScreens from './src/components/navigation/Stack';
import Theme from './src/config/theme';
import { auth } from './config';
import ButtomTabScreens from './src/components/navigation/ButtomTab';
import { RootStackParamList } from './src/components/navigation/RootStackParamList';


const Stack = createNativeStackNavigator<RootStackParamList>();

// const Index = () => {
  // const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const Index = ({ navigation }: { navigation: NavigationProp<RootStackParamList> }) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        navigation.navigate('GreetingScreen')
      }else{
        navigation.navigate('LogIn')
      }
    })
    return () => unsubscribe()
  },[navigation])
  return null
}


const App = () => {
  return(
    <ThemeProvider theme={Theme} >
      <NavigationContainer>
          <Stack.Screen name="Index" component={Index} options={{ headerShown: false }} />
        <ButtomTabScreens />
      </NavigationContainer>
    </ThemeProvider>

  )
}

export default App
