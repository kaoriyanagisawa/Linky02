import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import TweetCard from '../../components/TweetCard';


const MyTweet = () => {
  // サンプルデータ
  const tweets = [
    {
      id: '1',
      user: {
        name: 'John Doe',
        handle: '@johndoe',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
      content: 'This is my first tweet!',
      timestamp: '10m',
      likes: 12,
      comments: 3,
      retweets: 5,
    },
    {
      id: '2',
      user: {
        name: 'Jane Smith',
        handle: '@janesmith',
        avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      },
      content: 'React Native is amazing!',
      timestamp: '1h',
      likes: 45,
      comments: 8,
      retweets: 15,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={tweets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TweetCard tweet={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default MyTweet;
