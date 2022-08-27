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
`

export const IconsWrapper = styled.View`
  flex-direction: row;
`

export const InfoContainer = styled.View`
  flex-direction: row;
  border: 1px;
  margin-top: ${RFValue(24)}px;
  padding: 16px;
  width: 100%;
`

export const BookCover = styled.Image`
  width: ${RFValue(164)}px;
  height: ${RFValue(253)}px;
`
