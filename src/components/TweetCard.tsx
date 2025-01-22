// import { View, Text } from 'react-native'
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

type Tweet = {
  id: string;
  user: {
    name: string;
    handle: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  retweets: number;
};


const TweetCard = ({ tweet }: { tweet: Tweet }) => {
  return (
    // <View>
    //   <Text>マイツイート</Text>
    // </View>
    <View style={styles.card}>
      <Image source={{ uri: tweet.user.avatar }} style={styles.avatar} />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text style={styles.handle}>{tweet.user.handle}</Text>
          <Text style={styles.timestamp}> · {tweet.timestamp}</Text>
        </View>
        <Text style={styles.text}>{tweet.content}</Text>
        <View style={styles.actions}>
          <TouchableOpacity>
            <Icon name="comment" type="material" size={18} />
            <Text style={styles.actionText}>{tweet.comments}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="repeat" type="material" size={18} />
            <Text style={styles.actionText}>{tweet.retweets}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="favorite" type="material" size={18} />
            <Text style={styles.actionText}>{tweet.likes}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  handle: {
    color: 'gray',
    marginRight: 5,
  },
  timestamp: {
    color: 'gray',
  },
  text: {
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
  },
  actionText: {
    marginLeft: 5,
  },
});
export default TweetCard
