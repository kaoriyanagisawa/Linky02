import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// アプリケーションのルートコンポーネントを登録
AppRegistry.registerComponent(appName, () => App);
