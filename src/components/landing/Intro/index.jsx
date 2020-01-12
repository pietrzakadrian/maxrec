import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import logo from 'assets/logos/max_rec_white.png';
import social from 'components/theme/Footer/social';
import { Links } from 'components/theme/Footer/styles';

import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      {/* <Details>
        <h1>Hi There!</h1>
        <h4>I’m John and I’m a Backend & Devops engineer!</h4>
    
      </Details> */}
      <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: 0, left: 0 }}>
        <Thumbnail>
          <img style={{ marginBottom: 50 }} src={logo} alt="MAXREC Maksymilian Grela" />
        </Thumbnail>

        <Button transparent="true" as={AnchorLink} href="#contact">
          Rozpocznij
        </Button>
      </div>

      <div
        style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', width: 190 || 250 }}
      >
        <Links>
          {social.map(({ id, name, link, icon }) => (
            <a
              style={{ display: 'flex' }}
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`follow me on ${name}`}
            >
              <img width="35" src={icon} alt={name} />
            </a>
          ))}
        </Links>
      </div>
    </IntroWrapper>
  </Wrapper>
);
