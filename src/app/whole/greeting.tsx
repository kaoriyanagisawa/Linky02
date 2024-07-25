import React from 'react';
import { View, Text, Button } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../components/navigation/RootStackParamList';

type GreetingScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'GreetingScreen'>;
type Props = {
    navigation: GreetingScreenNavigationProp
}

const GreetingScreen: React.FC<Props>  = ({ navigation }) => {
  return (
    <View>
      <Text>あいさつ</Text>
      <Button title='ぼしゅう' onPress={() =>
        navigation.navigate('RecruitingScreen')}
        />
    </View>
  );
};

export default GreetingScreen
