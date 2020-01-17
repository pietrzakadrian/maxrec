import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Details } from './styles';
import ContactForm from './ContactForm';

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <div style={{ textAlign: 'center', fontFamily: 'GothamLight', fontSize: 13, margin: '15px 0 30px' }}>
        <div>Chcesz podjąć z nami współpracę? Wyślij wiadomość w tym momencie.</div>
        <div>Skorzystaj z formularza. Odpowiadamy w ciągu 24h.</div>
      </div>
      <ContactForm />
    </Details>
  </Wrapper>
);
