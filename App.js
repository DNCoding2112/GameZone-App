import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading'; // Import AppLoading
import * as Font from 'expo-font';
import React, { useState } from 'react';
import Navigator from "./routes/appDrawer";

const getFonts = () => Font.loadAsync({
  'comic-neue': require('./assets/fonts/ComicNeue-Regular.ttf'),
  'comic-neue-bold': require('./assets/fonts/ComicNeue-Bold.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}  // handle errors
      />
    );
  }
}
