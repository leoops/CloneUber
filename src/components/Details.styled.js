import styled from 'styled-components/native';

export const Container = styled.View`
  background: '#FFF';
  height: 300px;
  width: 100;
  position: absolute;
  bottom: 0;
  shadow-color: '#000';
  shadow-offset: 0 0;
  shadow-opacity: 0.2;
  shadow-radius: 10;
  elevation: 3;
  border: 1px solid #ddd;
  aling-items: center;
  padding: 20px;
`;

export const TypeTitle = styled.Text`
  font-size: 20px;
  color: '#222';
`;
export const TypeDescription = styled.Text`
  color: '#666';
  font-size: 14px;
`;
export const TypeImage = styled.Image`
  heigth: 80px;
  margin: 10px 0;
`;
export const RequestButton = styled.TouchableOpacity`
  backgrounfolor: '#222';
  justify-content: center;
  align-items: center;
  height: 44px;
  align-self: center;
  margin=top: 10px;
`;
export const RequestButtonText = styled.Text`
  color: '#FFF';
  font-weight: bolt;
  font-size: 18px;
`;
