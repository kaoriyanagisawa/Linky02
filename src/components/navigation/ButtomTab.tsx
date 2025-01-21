import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Home from "../../app/home/home";
import TopTabWholeScreens from "./TopTab_whole";
import TopTabChatScreens from "./TopTab_chat";
import TopTabTweetScreens from "./TopTab_tweet";

const Tab = createBottomTabNavigator()

const ButtomTabScreens: React.FC = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="whole"
                component={TopTabWholeScreens}
                options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="human-greeting-variant"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Chat"
                component={TopTabChatScreens}
                options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="chat"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Tweet"
                component={TopTabTweetScreens}
                options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="message-text"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="home"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />


        </Tab.Navigator>

    )
}

export default ButtomTabScreens
