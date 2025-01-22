import {
    View, Text, StyleSheet, Alert,
    TextInput, TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button } from "@rneui/themed";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import { auth } from "../../../config";
import GreetingScreen from "../whole/greeting";
import { RootStackParamList } from "../../components/navigation/RootStackParamList";




const LogIn = ():JSX.Element => {
    const [email, setEmail ] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const handlePress = (email: string, password:string): void => {
        //ログイン
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential.user.uid)
        navigation.navigate('ButtomTabs')
    })
    .catch((error) => {
        const { code, message } = error
        console.log(code, message)
        Alert.alert(message)
    })}
    return(
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.title}>Log In</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => { setEmail(text) }}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    placeholder="Email Address"
                    textContentType="emailAddress"
                />
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={(text) => { setPassword(text)}}
                    autoCapitalize="none"
                    secureTextEntry
                    placeholder="Password"
                    textContentType="password"
                />
                <Button title='Submit' onPress={() => handlePress(email,password)} />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Not registersd?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.footerLink}>Sign up here</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f8'
    },
    inner: {
        paddingVertical: 24,
        paddingHorizontal: 27
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24
    },
    input: {
        borderWidth: 1,
        borderColor: '#dddddd',
        backgroundColor:'#ffffff',
        height: 48,
        padding: 8,
        fontSize: 16,
        marginBottom: 16
    },
    footer: {
        flexDirection: 'row'
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
        color: '#000000'
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: '#467fd3'
    }

})

export default LogIn

