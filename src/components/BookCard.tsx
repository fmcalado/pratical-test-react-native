import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { NavigationParams } from "../app.routes";

interface BookCardData {
  imageUrl: string;
  title: string;
  author: string;
  category: string;
  categoryEncoded: string;
  description: string;
}

const BookCard: React.FC<BookCardData> = ({ imageUrl, title, author }) => {
  const navigation = useNavigation<NavigationParams>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("BookDetails", {imageUrl})}
    >
      <BookCardCover source={{ uri: imageUrl }} />
      <BookCardNameWrapper>
        <BookCardName ellipsizeMode="tail" numberOfLines={2}>
          {title}
        </BookCardName>
        <BookCardAuthorName ellipsizeMode="tail" numberOfLines={2}>
          {author}
        </BookCardAuthorName>
      </BookCardNameWrapper>
    </TouchableOpacity>
  );
};

const BookCardCover = styled.Image`
  width: ${RFValue(104)}px;
  height: ${RFValue(160)}px;
  margin-right: ${RFValue(12)}px;
  border-radius: 4px;
  margin-bottom: ${RFValue(4)}px;
`;

const BookCardNameWrapper = styled.View`
  width: ${RFValue(74)}px;
`;

const BookCardName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.main};
`;

const BookCardAuthorName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.gray2};
`;

export default BookCard;
