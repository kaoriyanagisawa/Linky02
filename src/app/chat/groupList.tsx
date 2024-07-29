import { View, Text, StyleSheet } from 'react-native'
import { ListItem, Avatar, SearchBar } from '@rneui/themed';

const GroupList = () => {
  return (
    <View>
      <SearchBar />
      <Text>グループチャット</Text>
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
  );
};

const styles = StyleSheet.create({
  itemList: {
    paddingHorizontal: 10,
    paddingVertical: 5
  }
})


export default GroupList
