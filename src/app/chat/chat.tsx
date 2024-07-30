import { View, Text, StyleSheet,
 SafeAreaView, TextInput,
 TouchableOpacity
} from "react-native";
import { useState, useCallback, useEffect } from "react";
import { Button, Input } from "@rneui/themed";
import { GiftedChat, IMessage, Send } from "react-native-gifted-chat";
import 'dayjs/locale/ja';

const ChatScreen = () => {
    const [messages, setMessages] = useState<IMessage[]>([]);

    useEffect(() => {
      // 初期メッセージを設定
      setMessages([
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEief0jlQMQFPYXsA7ENsXPzDMZfwjWj_mHYt3OMiQQdDD8v73yS6AT86G4lX_iPvkPx9RCuFV8y-CbPOUL5konZZmCSFb1pfGVMixqeZUWGNURPOzur3WuYYZom9qBrngjHdwrrRYAcyktw/s1600/animalface_araiguma.png',
          },
        },
      ]);
    }, []);

    const renderSend = (props: any) => {
        return(
            <View style={styles.sendButtonContainer}>
                <TouchableOpacity
                    style={styles.sendButton}
                    onPress={() =>{
                        if (props.text && props.onSend){
                            props.onSend({text: props.text.trim()}, true)
                        }
                    }}
                >
                    <Text
                        style={styles.sendButtonText}
                    >
                        そうしん
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }


    const onSend = useCallback((newMessages: IMessage[] = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages));
      }, []);

    return (
      <SafeAreaView style={styles.container}>
        <GiftedChat
          messages={messages}
          onSend={newMessages => onSend(newMessages)}
          user={{
            _id: 1,
          }}
          renderSend={renderSend}
        />
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    sendButtonContainer: {
        justifyContent: 'center',
        alignItems:'center',
        paddingVertical: 8,
        paddingHorizontal: 8,
    },
    sendButton: {
        // flex: 1,
        backgroundColor: '#007AFF',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#007AFF',
        // justifyContent: 'center',
        // alignItems:'center'

      },
      sendButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        // justifyContent: 'center',
        // alignItems:'center'
        // paddingVertical: 10,
        // paddingHorizontal: 20,
      },
  })



export default ChatScreen
