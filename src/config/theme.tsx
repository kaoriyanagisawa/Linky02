import { createTheme } from '@rneui/themed';

// テーマの定義
const Theme = createTheme({
  lightColors: {
    primary: 'red',  // ライトテーマのプライマリーカラー
  },
  darkColors: {
    primary: 'blue', // ダークテーマのプライマリーカラー
  },
  components: {
    Button: {
      raised: true,  // ボタンに影をつける
    },
  },
});

export default Theme;
