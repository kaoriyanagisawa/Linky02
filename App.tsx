import { NavigationContainer } from '@react-navigation/native';

import StackScreens from './src/components/navigation/Stack';

const App: React.FC = () => {
  return(
    <NavigationContainer>
      <StackScreens />
    </NavigationContainer>
  )
}

export default App
