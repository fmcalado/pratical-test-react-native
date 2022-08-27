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

  padding: 16px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderIcon = styled.Image`
  width: ${RFValue(24)}px;
  height: ${RFValue(24)}px;
`;

export const IconsWrapper = styled.View`
  flex-direction: row;
`;

export const SectionContainer = styled.View`
  padding: 16px;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  margin-top: ${RFValue(24)}px;
  margin-bottom: ${RFValue(32)}px;
  width: 100%;
`;

export const BookCover = styled.Image`
  width: ${RFValue(164)}px;
  height: ${RFValue(253)}px;
`;

export const TitleWrapper = styled.View`
  margin-left: ${RFValue(16)}px;
  margin-bottom: ${RFValue(8)}px;
  width: ${RFValue(140)}px;
`;

export const BookTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.main};
`;

export const AuthorName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.gray2};
`;

export const HeadingTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.black};
  font-size: ${RFValue(18)}px;
  line-height: ${RFValue(21.6)}px;
  color: ${({ theme }) => theme.colors.main};
`;

export const DescriptionContainer = styled.View`
  margin-top: ${RFValue(16)}px;
  width: 100%;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(22.4)}px;
  color: ${({ theme }) => theme.colors.main};
`;

export const ButtonWrapper = styled.View`
  padding: 16px;
`

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 4px;
  width: 100%;
  height: ${RFValue(40)}px;
`

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.black};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.white};
`

