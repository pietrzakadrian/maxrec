import React from 'react';
import { Container } from 'components/common';
import { Wrapper } from './styles';

export const AboutUs = () => (
  <Wrapper as={Container} id="about-us">
    <div style={{ textAlign: 'center', fontFamily: 'GothamLight', fontSize: 13, margin: '15px 0 30px' }}>
      <div>
        Od kilku lat zajmujemy się tworzeniem filmów fabularnych, reklam i teledysków. Oprócz pełnych realizacji,
        oferujemy również możliwość współpracy jako operatorzy kamer, montażyści i dźwiękowcy. Dodatkowo realizujemy
        sesje zdjęciowe (plenerowe, studyjne, reklamowe). Zlecenia wykonujemy głównie w Warszawie, lecz współpraca
        możliwa jest na terenie całej Polski.
      </div>
    </div>
  </Wrapper>
);
