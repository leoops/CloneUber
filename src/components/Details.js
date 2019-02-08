import React, { Component } from 'react';
import {
  Container,
  TypeTitle,
  TypeDescription,
  TypeImage,
  RequestButton,
  RequestButtonText,
} from './Details.styled';
import uberx from '../assets/uberx.png';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <TypeTitle>Popular</TypeTitle>
        <TypeDescription>Viagens populares para o dia á dia</TypeDescription>
        <TypeImage source={uberx} />
        <TypeTitle>UberX</TypeTitle>
        <TypeDescription>R$ 6,00</TypeDescription>
        <RequestButton onPress={() => {}}>
          <RequestButtonText>SOLICITAR</RequestButtonText>
        </RequestButton>
      </Container>
    );
  }
}
