import React from 'react';
import { H2, Container, ComponentWrapper } from 'components/common';
import { Details, Typography, ContactFormWrapper } from './styles';
import ContactForm from './ContactForm';

export const Contact = () => (
  <ComponentWrapper as={Container} id="contact">
    <H2>Kontakt</H2>

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
