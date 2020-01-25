import React from 'react';
import social from 'components/theme/Footer/social';
import { Link } from 'gatsby';

import {
  Wrapper,
  Flex,
  Links,
  Col,
  Heading,
  LinksWrapper,
  Description,
  FooterWrapper,
  Copyright,
} from 'components/theme/Footer/styles';
import NavbarLinks from '../Header/NavbarLinks';

export const Footer = () => (
  <Wrapper>
    <Flex>
      <Col>
        <Heading>Mapa</Heading>

        <div>
          <NavbarLinks desktop footer />
        </div>
      </Col>

      <Col>
        <Heading>MAXREC</Heading>

        <Description>
          <div>Maksymilian Grela</div>
          <div>Warszawa, Polska</div>
          <br />
          <div>
            Tel: <a href="tel:664 205 145">664 205 145</a>
          </div>
          <div>
            Email: <a href="mailto:kontakt@maxrec.pl">kontakt@maxrec.pl</a>
          </div>
        </Description>
      </Col>
    </Flex>

    <FooterWrapper>
      <Copyright>
        <div>
          <span>© {new Date().getFullYear()} All rights reserved</span>{' '}
          <span>
            <Link to="/privacy">Polityka prywatności</Link>
          </span>{' '}
          <span>
            Made by <a href="mailto:contact@pietrzakadrian.com">Adrian Pietrzak</a>
          </span>
        </div>
      </Copyright>

      <LinksWrapper>
        <Links>
          {social.map(({ id, name, link, icon }) => (
            <a key={id} href={link} target="_blank" rel="noopener noreferrer">
              <img width="35" src={icon} alt={name} />
            </a>
          ))}
        </Links>
      </LinksWrapper>
    </FooterWrapper>
  </Wrapper>
);
