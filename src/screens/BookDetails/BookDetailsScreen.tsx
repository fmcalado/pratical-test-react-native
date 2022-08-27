import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ScrollView, TouchableOpacity, Text, View } from "react-native";
import { NavigationParams } from "../../app.routes";

import {
  AuthorName,
  BookCover,
  BookTitle,
  Button,
  ButtonText,
  ButtonWrapper,
  Container,
  DescriptionContainer,
  Header,
  HeaderIcon,
  HeadingTitle,
  IconsWrapper,
  InfoContainer,
  SectionContainer,
  TitleWrapper,
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
        <ScrollView>
          <SectionContainer>
            <InfoContainer>
              <BookCover source={{ uri: props.route.params.imageUrl }} />
              <TitleWrapper>
                <BookTitle>{props.route.params.title}</BookTitle>
                <AuthorName>{props.route.params.author}</AuthorName>
              </TitleWrapper>
            </InfoContainer>

            <HeadingTitle>Sobre esse livro</HeadingTitle>
            <DescriptionContainer>
              <Text>{props.route.params.description}</Text>
            </DescriptionContainer>
          </SectionContainer>
        </ScrollView>
        <ButtonWrapper>
          <Button>
            <ButtonText>Ler agora</ButtonText>
          </Button>
        </ButtonWrapper>
      </Container>
    </>
  );
};

export default BookDetailsScreen;
