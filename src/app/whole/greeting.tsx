import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Card } from '@rneui/themed';
import { Icon } from '@rneui/base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation,NavigationProp } from '@react-navigation/native';

import { RootStackParamList } from '../../components/navigation/RootStackParamList';
import CircleButton from '../../components/CircleButton';


const GreetingScreen:React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const handlePress = (): void => {
    console.log('Navigating go back');
    navigation.goBack();
};

  return(

    <ScrollView>
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
      <CircleButton onPress={handlePress}>
        <Icon name="add" size={40} color="#ffffff" />
      </CircleButton>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10
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
  },
  button: {
    padding: 10,
    margin: 10,

  }

})

export default GreetingScreen
