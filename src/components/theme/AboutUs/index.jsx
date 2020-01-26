import React from 'react';
import { Container, ComponentWrapper, TextWrapper } from 'components/common';
import { H3 } from 'components/common/Typography';

export const AboutUs = () => (
  <ComponentWrapper large as={Container} id="about-us">
    <H3>O nas</H3>

    <TextWrapper center>
      <span>
        Od kilku lat zajmujemy się tworzeniem filmów fabularnych, reklam i teledysków. <br />
        Oprócz pełnych realizacji, oferujemy również możliwość współpracy jako operatorzy kamer, montażyści i
        dźwiękowcy.
        <br />
        Dodatkowo realizujemy sesje zdjęciowe (plenerowe, studyjne, reklamowe).
        <br />
        Zlecenia wykonujemy głównie w Warszawie, lecz współpraca możliwa jest na terenie całej Polski.
      </span>
    </TextWrapper>
  </ComponentWrapper>
);
