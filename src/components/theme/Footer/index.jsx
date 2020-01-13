import React from 'react';
import { Container } from 'components/common';
import social from 'components/theme/Footer/social';
import { Wrapper, Flex, Links, Details } from 'components/theme/Footer/styles';
import logo from 'assets/logos/masylogofont.png';
import NavbarLinks from '../Header/NavbarLinks';

export const Footer = () => (
  <Wrapper>
    <div style={{ display: 'flex', color: '#fff', fontFamily: 'GothamBook', lineHeight: '20px', marginBottom: 105 }}>
      <div style={{ width: 280 }}>
        <div style={{ textTransform: 'uppercase', padding: '0 0 30px', letterSpacing: '1px' }}>Mapa</div>

        <div>
          <NavbarLinks desktop footer />
        </div>
      </div>

      <div style={{ width: 400 }}>
        <div style={{ textTransform: 'uppercase', padding: '0 0 30px', letterSpacing: '1px' }}>MAXREC</div>

        <div>
          <div style={{ fontSize: 14, marginBottom: '0.4rem' }}>Maksymilian Grela</div>
          <div style={{ fontSize: 14, marginBottom: '0.4rem' }}>Warszawa, Polska</div>
          <br />
          <div style={{ fontSize: 14, marginBottom: '0.4rem' }}>Tel: 664 205 145</div>
          <div style={{ fontSize: 14, marginBottom: '0.4rem' }}>Email: kontakt@maxrec.pl</div>
        </div>
      </div>
    </div>

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* <img src={logo} style={{ width: 180, height: 'auto' }} alt="Maksymilian Grela" /> */}
        <div
          style={{
            color: '#fff',
            marginLeft: 5,
            fontSize: 13,
            letterSpacing: '0.5px',
            fontFamily: 'GothamLight',
            marginTop: 3,
          }}
        >
          © {new Date().getFullYear()} All rights reserved | Made by Adrian Pietrzak
        </div>
      </div>

      <div style={{ width: 180 }}>
        <Links>
          {social.map(({ id, name, link, icon }) => (
            <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
              <img width="30" src={icon} alt={name} />
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
