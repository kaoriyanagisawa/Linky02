import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import GreetingScreen from "../../app/whole/greeting";
import RecruitingScreen from "../../app/whole/recruiting";
import InstanceChat from "../../app/chat/instanceChat";
import GroupChat from "../../app/chat/groupChat";
import FriendChat from "../../app/chat/friendChat";

const Tab = createMaterialTopTabNavigator()

const TopTabChatScreens:React.FC = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    marginTop: 40
                }
            }}
        >
            <Tab.Screen name="インスタント" component={InstanceChat} />
            <Tab.Screen name="グループ" component={GroupChat} />
            <Tab.Screen name="フレンド" component={FriendChat} />
        </Tab.Navigator>
    )
}

export default TopTabChatScreens
