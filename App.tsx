import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
} from "@expo-google-fonts/lato";

import theme from "./src/global/styles/theme";
import AppNavigator from "./src/app.routes";

export default function App() {
  const [isLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
  });

  useEffect(() => {
    const showSplashScreen = async () => {
      await SplashScreen.preventAutoHideAsync();
    };
    const hideSplashScreen = async () => {
      await SplashScreen.hideAsync();
    };

    isLoaded ? hideSplashScreen() : showSplashScreen();
  }, [isLoaded]);

  return isLoaded ? (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ThemeProvider>
  ) : null;
}
