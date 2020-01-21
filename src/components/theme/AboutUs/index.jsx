import React from 'react';
import { Container, ComponentWrapper } from 'components/common';
import { H2 } from 'components/common/Typography';
import { Wrapper, AboutUsWrapper } from './styles';

export const AboutUs = () => (
  <ComponentWrapper large as={Container} id="about-us">
    <H2>O nas</H2>

    <AboutUsWrapper>
      <span>
        Od kilku lat zajmujemy się tworzeniem filmów fabularnych, reklam i teledysków. <br />
        Oprócz pełnych realizacji, oferujemy również możliwość współpracy jako operatorzy kamer, montażyści i
        dźwiękowcy.
        <br />
        Dodatkowo realizujemy sesje zdjęciowe (plenerowe, studyjne, reklamowe).
        <br />
        Zlecenia wykonujemy głównie w Warszawie, lecz współpraca możliwa jest na terenie całej Polski.
      </span>
    </AboutUsWrapper>
  </ComponentWrapper>
);
