import { View, Text, StyleSheet } from 'react-native'

import ChatListItem from '../../components/ChatListItem';

const InstanceList = () => {
  return (
    <View>
    <Text>一時チャット</Text>
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

export default InstanceList
