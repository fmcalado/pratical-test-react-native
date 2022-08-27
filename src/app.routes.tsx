import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";


import HomeScreen from "./screens/Home/HomeScreen";

export type NavigationParams = NativeStackNavigationProp<StackParams>;
type StackParams = {
  Home: any;
};

const AppNavigator = () => {
  const { Navigator, Screen } = createNativeStackNavigator<StackParams>();

  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  );
};

export default AppNavigator;
