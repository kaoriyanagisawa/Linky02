import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons'

import GreetingScreen from "../../app/whole/greeting";
import GroupChat from "../../app/chat/groupChat";
import MyTweet from "../../app/tweet/myTweet";
import Home from "../../app/home/home";

const Tab = createBottomTabNavigator()

const ButtomTabScreens: React.FC = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="whole"
                component={GreetingScreen}
                options={{
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
                component={GroupChat}
                options={{
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
                component={MyTweet}
                options={{
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
