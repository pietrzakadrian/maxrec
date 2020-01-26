import React from 'react';
import { H3, Container, ComponentWrapper } from 'components/common';
import { Details, Typography, ContactFormWrapper } from './styles';
import ContactForm from './ContactForm';

export const Contact = () => (
  <ComponentWrapper as={Container} id="contact">
    <H3>Kontakt</H3>

    <Details>
      <Typography>
        <div>Chcesz podjąć z nami współpracę? Wyślij wiadomość w tym momencie.</div>
        <div>Skorzystaj z formularza. Odpowiadamy w ciągu 24h.</div>
      </Typography>
      <ContactFormWrapper>
        <ContactForm />
      </ContactFormWrapper>
    </Details>
  </ComponentWrapper>
);
