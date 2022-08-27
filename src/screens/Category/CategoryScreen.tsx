import { ScrollView, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  Container,
  ContentContainer,
  Header,
  HeaderIcon,
  HeaderTile,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

import { NavigationParams } from "../../app.routes";

const CategoryScreen: React.FC = (props) => {
  const navigation = useNavigation<NavigationParams>();

  return (
    <>
      <StatusBar style="dark" />
      <Container>
        <Header>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <HeaderIcon source={require("../../assets/icons/left.png")} />
          </TouchableOpacity>
          <HeaderTile ellipsizeMode="tail" numberOfLines={1}>
            {props.route.params.name}
          </HeaderTile>
        </Header>
      </Container>
    </>
  );
};

export default CategoryScreen;
