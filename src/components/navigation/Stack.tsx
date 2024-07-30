import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ButtomTabScreens from './ButtomTab';
import LogIn from '../../app/auth/log_in';
import GreetingScreen from '../../app/whole/greeting';
import SignUp from '../../app/auth/sign_up';

const Stack = createNativeStackNavigator();

const StackScreens: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LogIn"
        component={LogIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
     <Stack.Screen
        name="GreetingScreen"
        component={GreetingScreen}
        options={{ headerShown: false }}
      />


      <Stack.Screen
        name="ButtomTabs"
        component={ButtomTabScreens}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}

export default StackScreens
