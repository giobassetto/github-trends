import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  display: flex;
  background: #fff;
`;

export const List = styled(FlatList)`
  margin-top: 15px;
`;

export const BackgroundList = styled.View`
  display: flex;
  margin: 10px 10px 10px 10px;
  align-self: center;
  height: 100px;
  width: 95%;
  border-radius: 10px;
`;

export const NameRepositoryContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  margin-left: 10px;
`;

export const StarButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-right: 15px;
  background: #6d6972;
  border-radius: 8px;
  width: 90px;
  height: 45px;
`;
