import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import GreetingScreen from "../../app/whole/greeting";
import RecruitingScreen from "../../app/whole/recruiting";

const Tab = createMaterialTopTabNavigator()

const TopTabWholeScreens:React.FC = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    marginTop: 40
                }
            }}
        >
            <Tab.Screen name="あいさつ" component={GreetingScreen} />
            <Tab.Screen name="ぼしゅう" component={RecruitingScreen} />
        </Tab.Navigator>
    )
}

export default TopTabWholeScreens
