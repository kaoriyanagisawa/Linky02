import { Text, StyleSheet, TouchableOpacity, Alert,  } from "react-native"
import { signOut } from "firebase/auth"
import { useNavigation,NavigationProp } from "@react-navigation/native"

import { auth } from "../../config"
import { RootStackParamList } from "./navigation/RootStackParamList"

const LogOutBottun = ():JSX.Element => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const handlePress = ():void => {
        signOut(auth)
        .then(() => {
            navigation.navigate('LogIn')
        })
        .catch(
            () =>(
                Alert.alert('ログアウトに失敗しました')
        ))
    }
    return(
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.text}>ログアウト</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        lineHeight: 24,
        // color: 'rgba(255,255,255,0.7)'
    }
})



export default LogOutBottun
