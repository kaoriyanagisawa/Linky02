import { View, ScrollView, Text, StyleSheet } from 'react-native'
import { SearchBar, Avatar, ListItem, Divider } from '@rneui/themed';

const listData = [
  { label: 'ゲーム', value: 'apex' },
  { label: '人数', value: '2人' },
  { label: '募集機種', value: 'cs' },
  { label: '開始時間', value: '18:00' },
  { label: '終了時間', value: '21:00' },
]

const RecruitingScreen = () => {
  return (

    <ScrollView style={styles.container}>
      <SearchBar />
      <View>
        <View style={styles.headerContainer}>
          <Avatar
            size={64}
            rounded
            title='Name'
            containerStyle={{
              backgroundColor: '#3d4db7'
            }}
          />
          <Text style={styles.title}>なまえ</Text>
          <Text style={styles.date}>2023/07/26 21:38</Text>
        </View>
        <View style={styles.main}>
        </View>
        <View style={styles.listItem}>
          {listData.map((item, index) => (
            <ListItem key={index} bottomDivider>
              <ListItem.Content style={styles.listContent}>
                <ListItem.Title style={styles.label}>{item.label}</ListItem.Title>
                <ListItem.Subtitle style={styles.value}>{item.value}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
        </View>
        <Divider />
      </View>

      <View>
        <View style={styles.headerContainer}>
          <Avatar
            size={64}
            rounded
            title='Name'
            containerStyle={{
              backgroundColor: '#3d4db7'
            }}
          />
          <Text style={styles.title}>なまえ</Text>
          <Text style={styles.date}>2023/07/26 21:38</Text>
        </View>
        <View style={styles.main}>
        </View>
        <View style={styles.listItem}>
          {listData.map((item, index) => (
            <ListItem key={index} bottomDivider>
              <ListItem.Content style={styles.listContent}>
                <ListItem.Title style={styles.label}>{item.label}</ListItem.Title>
                <ListItem.Subtitle style={styles.value}>{item.value}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
        </View>
        <Divider />
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  title: {
    fontWeight: 'bold'
  },
  date: {
    textAlign: 'right'
  },
  main: {

  },
  listItem: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // marginVertical: 5,
    marginTop: 5,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  listContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  label: {
    fontWeight: 'bold',
  },
  value: {
    textAlign: 'right',
  },


})


export default RecruitingScreen
