import React from 'react';
import { Container } from 'components/common';
import { H2 } from 'components/common/Typography';
import { Wrapper, Details, Typography } from './styles';
import ContactForm from './ContactForm';

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <H2>Kontakt</H2>

    <Details>
      <Typography>
        <div>Chcesz podjąć z nami współpracę? Wyślij wiadomość w tym momencie.</div>
        <div>Skorzystaj z formularza. Odpowiadamy w ciągu 24h.</div>
      </Typography>
      <ContactForm />
    </Details>
  </Wrapper>
);
