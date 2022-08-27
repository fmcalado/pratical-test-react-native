import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(56)}px;
  background-color: ${({ theme }) => theme.colors.white};

  padding: 12px 24px 12px 24px; /* top right bottom left */

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.black};
  font-size: ${RFValue(24)}px;
  line-height: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.main};
`;

export const HeaderAvatar = styled.Image`
  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.gray3};
`;

export const Body = styled.View`
  height: 100%;
  width: 100%;
  padding: ${RFValue(16)}px;
`;

export const SearchField = styled.View`
  width: 100%;
  height: ${RFValue(56)}px;
  padding: 20px;

  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.gray6};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${RFValue(24)}px; ;
`;

export const SearchFieldPlaceholder = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.gray3};
`;

export const SearchFieldIcon = styled.Image`
  width: ${RFValue(24)}px;
  height: ${RFValue(24)}px;
`;

export const HeadingTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.black};
  font-size: ${RFValue(18)}px;
  line-height: ${RFValue(21.6)}px;
  color: ${({ theme }) => theme.colors.main};
`;

export const BookList = styled.FlatList`
  margin-top: ${RFValue(16)}px;
  margin-bottom: ${RFValue(32)}px;
`;

export const CategoryList = styled.FlatList`
  margin-top: ${RFValue(16)}px;
`;
