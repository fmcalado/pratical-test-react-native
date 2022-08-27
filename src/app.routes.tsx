import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import BookDetailsScreen from "./screens/BookDetails/BookDetailsScreen";
import CategoryScreen from "./screens/Category/CategoryScreen";
import HomeScreen from "./screens/Home/HomeScreen";

export type NavigationParams = NativeStackNavigationProp<StackParams>;
type StackParams = {
  Home: any;
  Category: any;
  BookDetails: {
    imageUrl: string;
    title: string;
    author: string;
    description: string;
  };
};

const AppNavigator = () => {
  const { Navigator, Screen } = createNativeStackNavigator<StackParams>();

  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Category" component={CategoryScreen} />
      <Screen name="BookDetails" component={BookDetailsScreen} />
    </Navigator>
  );
};

export default AppNavigator;
