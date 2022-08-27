import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.View`
  width: 100%;
  padding: 16px;
  height: ${RFValue(56)}px;
  background-color: ${({ theme }) => theme.colors.white};

  flex-direction: row;
  align-items: center;
`

export const HeaderIcon = styled.Image`
  width: ${RFValue(24)}px;
  height: ${RFValue(24)}px;
`;

export const HeaderTile = styled.Text`
  margin-left: ${RFValue(16)}px;

  font-family: ${({ theme }) => theme.fonts.black};
  font-size: ${RFValue(24)}px;
  line-height: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.main};
`

export const ContentContainer = styled.View`
  flex-direction: row;
  margin-top: ${RFValue(24)}px;
  width: 100%;
  padding-left: ${RFValue(16)}px;
  padding-right: ${RFValue(16)}px;
`
