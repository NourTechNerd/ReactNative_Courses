import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import {Slot, SplashScreen} from 'expo-router'
import {useFonts} from 'expo-font';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync(); // prevents the splash screen from hiding automatically before the fonts are loaded.

export default function App_layout()
{
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });
  
  useEffect(
  ()=> {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync(); // hides the splash screen after the fonts are loaded.
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null; // Shows a Blank screen if the fonts are not loaded.

  return (
    <View className="flex flex-col items-center justify-center h-screen bg-primary">
      <Text className= "text-2xl font-bold text-secondary">Header</Text>
      <Slot />
      <Text className= "text-2xl font-bold text-secondary">Footer</Text>
      <StatusBar style="auto" />
    </View>
  );
}

