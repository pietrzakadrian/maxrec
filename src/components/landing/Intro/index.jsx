import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import logo from 'assets/logos/max_rec_white.png';
import social from 'components/theme/Footer/social';
import { Links } from 'components/theme/Footer/styles';

import { Wrapper, IntroWrapper, Bottom, Thumbnail, Center } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Center>
        <Thumbnail>
          <img src={logo} alt="MAXREC Maksymilian Grela" />
        </Thumbnail>

        <Button transparent="true" as={AnchorLink} href="#about-us">
          Rozpocznij
        </Button>
      </Center>

      <Bottom>
        <Links>
          {social.map(({ id, name, link, icon }) => (
            <a style={{ display: 'flex' }} key={id} href={link} target="_blank" rel="noopener noreferrer">
              <img width="35" src={icon} alt={name} />
            </a>
          ))}
        </Links>
      </Bottom>
    </IntroWrapper>
  </Wrapper>
);
