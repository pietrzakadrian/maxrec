import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import logo from 'assets/logos/max_rec_white.png';
import social from 'components/theme/Footer/social';
import { Links } from 'components/theme/Footer/styles';
import { Parallax } from 'react-scroll-parallax';
import { Wrapper, IntroWrapper, Bottom, Thumbnail, Center } from './styles';

export const Intro = () => {
  const [sidebar, toggle] = useState(false);

  return (
    <Wrapper sidebar={sidebar}>
      <Header sidebar={sidebar} toggle={toggle} />
      <IntroWrapper as={Container}>
        <Center>
          <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
            <Thumbnail>
              <img src={logo} alt="MAXREC Maksymilian Grela" />
            </Thumbnail>

            <Button transparent as={AnchorLink} href="#about-us">
              Rozpocznij
            </Button>
          </Parallax>
        </Center>

        <Bottom>
          <Links>
            {social.map(({ id, name, link, icon }) => (
              <a key={id} href={link} target="_blank" rel="noopener noreferrer">
                <img width="35" src={icon} alt={name} />
              </a>
            ))}
          </Links>
        </Bottom>
      </IntroWrapper>
    </Wrapper>
  );
};
