import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import InstanceList from "../../app/chat/instanceList";
import GroupList from "../../app/chat/groupList";
import FriendList from "../../app/chat/friendList";


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
            <Tab.Screen name="インスタント" component={InstanceList} />
            <Tab.Screen name="グループ" component={GroupList} />
            <Tab.Screen name="フレンド" component={FriendList} />
        </Tab.Navigator>
    )
}

export default TopTabChatScreens
