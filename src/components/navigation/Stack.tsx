import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GreetingScreen from '../../app/whole/greeting';
import GroupChat from '../../app/chat/groupChat';
import MyTweet from '../../app/tweet/myTweet';
import Home from '../../app/home/home';
import RecruitingScreen from '../../app/whole/recruiting';
// import ButtomTabScreens from './ButtomTab';
import TopTabScreens from './TopTab';


const Stack = createNativeStackNavigator();

const StackScreens: React.FC = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="ButtomTabs" component={ButtomTabScreens} options={{ headerShown: false }} /> */}
      <Stack.Screen name="TopTabs" component={TopTabScreens} options={{ headerShown: false }} />
      <Stack.Screen name="GreetingScreen" component={GreetingScreen} />
      <Stack.Screen name="RecruitingScreen" component={RecruitingScreen} />
      <Stack.Screen name="Chat" component={GroupChat} />
      <Stack.Screen name="Tweet" component={MyTweet} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default StackScreens
