import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ButtomTabScreens from './ButtomTab';


const Stack = createNativeStackNavigator();

const StackScreens: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ButtomTabs"
        component={ButtomTabScreens}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default StackScreens
