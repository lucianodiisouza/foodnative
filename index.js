import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {CartProvider, ProductProvider} from './src/ui/providers';

const theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#a91f1f',
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
