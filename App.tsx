import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@rneui/themed';

import StackScreens from './src/components/navigation/Stack';
import Theme from './src/config/theme';

const App: React.FC = () => {
  return(
    <ThemeProvider theme={Theme} >
      <NavigationContainer>
        <StackScreens />
      </NavigationContainer>
    </ThemeProvider>

  )
}

export default App
