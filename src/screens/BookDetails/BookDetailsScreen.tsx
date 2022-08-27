import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, View } from "react-native";
import { NavigationParams } from "../../routes/app.routes";

import {
  BookCover,
  Container,
  Header,
  HeaderIcon,
  IconsWrapper,
  InfoContainer,
} from "./styles";

const BookDetailsScreen: React.FC = (props) => {
  const navigation = useNavigation<NavigationParams>();

  return (
    <>
      <StatusBar style="dark" />
      <Container>
        <Header>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <HeaderIcon source={require("../../assets/icons/left.png")} />
          </TouchableOpacity>

          <IconsWrapper>
            <HeaderIcon source={require("../../assets/icons/heart.png")} />
            <HeaderIcon source={require("../../assets/icons/share.png")} />
          </IconsWrapper>
        </Header>

        <InfoContainer>
          <BookCover source={{ uri: props.route.params.imageUrl }} />
        </InfoContainer>
      </Container>
    </>
  );
};

export default BookDetailsScreen;
