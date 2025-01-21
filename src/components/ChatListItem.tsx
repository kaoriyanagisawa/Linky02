import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { ListItem, Avatar } from '@rneui/themed';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { RootStackParamList } from './navigation/RootStackParamList';


const ChatListItem = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const handlePress = ():void => {
    console.log('Navigating to ChatScreen');
    navigation.navigate('ChatScreen')
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <View>
        <ListItem style={styles.itemList}>
          <Avatar
            size={48}
            rounded
            title="Fc"
            containerStyle={{ backgroundColor: '#3d4db7' }}
          />
          <ListItem.Content>
            <ListItem.Title>John Doe</ListItem.Title>
            <ListItem.Subtitle>CEO, Example.com</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </View>
    </TouchableOpacity>

  );
};


const styles = StyleSheet.create({
  touchableOpacity: {
    flex: 1, // これで全体がタッチ領域になります
  },
  itemList: {
    paddingHorizontal: 10,
    paddingVertical: 5
  }
})

export default ChatListItem
