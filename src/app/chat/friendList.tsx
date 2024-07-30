import { View, Text, StyleSheet } from 'react-native'
import { SearchBar } from '@rneui/themed';

import ChatListItem from '../../components/ChatListItem';

const FriendList = () => {
  return (
    <View>
      <SearchBar />
      <Text>フレンドチャット</Text>
      <ChatListItem />
      <ChatListItem />


    </View>
  );
};

const styles = StyleSheet.create({
  itemList: {
    paddingHorizontal: 10,
    paddingVertical: 5
  }
})


export default FriendList
