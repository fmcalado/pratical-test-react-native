import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { NavigationParams } from "../app.routes";

interface CategoryCardData {
  name: string;
  encodedName: string;
}

const CategoryCard: React.FC<CategoryCardData> = ({ name }) => {
  const navigation = useNavigation<NavigationParams>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Category')}>
      <Card />
      <CategoryNameWrapper>
        <CategoryName ellipsizeMode="tail" numberOfLines={3}>
          {name}
        </CategoryName>
      </CategoryNameWrapper>
    </TouchableOpacity>
  );
};

const Card = styled.View`
  width: ${RFValue(74)}px;
  height: ${RFValue(74)}px;
  margin-right: ${RFValue(12)}px;
  margin-bottom: ${RFValue(4)}px;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const CategoryName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.main};
`;

const CategoryNameWrapper = styled.View`
  width: ${RFValue(74)}px;
`;

export default CategoryCard;
