import React from 'react';
import { Container } from 'components/common';
import social from 'components/theme/Footer/social';
import { Wrapper, Flex, Links, Details } from 'components/theme/Footer/styles';
import logo from 'assets/logos/masylogofont.png';
import NavbarLinks from '../Header/NavbarLinks';

export const Footer = () => (
  <Wrapper>
    <div style={{ display: 'flex' }}>
      <div>
        <div>Mapa</div>

        <div>
          <NavbarLinks desktop />
        </div>
      </div>

      <div>
        <div>Maksymilian Grela</div>

        <div>Warszawa, Polska</div>
        <div>Tel: 664 205 145</div>
        <div>Email: kontakt@maxrec.pl</div>
      </div>
    </div>

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <img src={logo} style={{ width: 180, height: 'auto' }} alt="Maksymilian Grela" />
        <div>| © All rights reserved | {new Date().getFullYear()} | Made by Adrian Pietrzak</div>
      </div>

      <div>
        <Links>
          {social.map(({ id, name, link, icon }) => (
            <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
              <img width="40" src={icon} alt={name} />
            </a>
          ))}
        </Links>
      </div>
    </div>

    {/* <Flex as={Container}>
      <Details>
        <h2>John Doe</h2>
        <span>
          © All rights are reserved | {new Date().getFullYear()} | Made with{' '}
          <span aria-label="love" role="img">
            💖
          </span>{' '}
          by{' '}
          <a href="https://smakosh.com/?ref=portfolio-dev" rel="noopener noreferrer" target="_blank">
            Smakosh
          </a>
        </span>
      </Details>
      <Links>
        {social.map(({ id, name, link, icon }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            <img width="40" src={icon} alt={name} />
          </a>
        ))}
      </Links>
    </Flex> */}
  </Wrapper>
);
