import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import GreetingScreen from "../../app/whole/greeting";
import RecruitingScreen from "../../app/whole/recruiting";
import MyTweet from "../../app/tweet/myTweet";
import FriendChat from "../../app/chat/friendChat";
import FriendTweet from "../../app/tweet/friendTweet";

const Tab = createMaterialTopTabNavigator()

const TopTabTweetScreens:React.FC = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    marginTop: 40
                }
            }}
        >
            <Tab.Screen name="じぶんのツイート" component={MyTweet} />
            <Tab.Screen name="ともだちのツイート" component={FriendTweet} />
        </Tab.Navigator>
    )
}

export default TopTabTweetScreens
