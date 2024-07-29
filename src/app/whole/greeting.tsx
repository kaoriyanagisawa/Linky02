// import React from 'react';
// import { View, Text, Button } from 'react-native'
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// import { RootStackParamList } from '../../components/navigation/RootStackParamList';

// type GreetingScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'GreetingScreen'>;
// type Props = {
//     navigation: GreetingScreenNavigationProp
// }

// const GreetingScreen: React.FC<Props>  = ({ navigation }) => {
//   return (
//     <View>
//       <Text>あいさつ</Text>
//       <Button title='ぼしゅう' onPress={() =>
//         navigation.navigate('RecruitingScreen')}
//         />
//     </View>
//   );
// };

// export default GreetingScreen

import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Card } from '@rneui/themed';

import TopTabWholeScreens from '../../components/navigation/TopTab_whole';

const GreetingScreen:React.FC = () => {
  return(

    <ScrollView>
      {/* <TopTabWholeScreens /> */}
      <View style={styles.container}>
        <Card>
          <View style={styles.headerContainer}>
            <Card.Title style={styles.title}>
              なまえ
            </Card.Title>
              <Text style={styles.dateText}>2024/07/26 8:12</Text>
            <Card.Divider />
            <Card.Image
              style={styles.cardImage}
              source={{
                uri:
                  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh667QZKtVCMD8b7DgYYA7xH5ST3RtWqURf12p6jffgN8MzvhUQTlaloyR1GF0Sd5Vx25pyW8JQ8vCPt3RbPLDhAiQFrR53NkDQfwgPMuRiyDjSc4vW0YOkVm69f4dgCeNbpgEHIEFrVdfY/s762/osyaberi_man.png',
              }}
            />
          </View>
        </Card>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {

  },
  title: {
    marginBottom: 0
  },
  dateText: {
    textAlign: 'right',
    marginBottom: 5
  },
  cardImage: {
    height: 200, // ここで縦幅を広く設定
    width: '60%',
    alignSelf: 'center'
  }

})

export default GreetingScreen
