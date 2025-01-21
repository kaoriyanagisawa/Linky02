import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ButtomTabScreens from './ButtomTab';
import LogIn from '../../app/auth/log_in';
import SignUp from '../../app/auth/sign_up';
import ChatScreen from '../../app/chat/chat';

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
        name="ButtomTabs"
        component={ButtomTabScreens}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default StackScreens
