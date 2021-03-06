import React from 'react';
import { Form, withFormik, FastField, ErrorMessage } from 'formik';
import Recaptcha from 'react-google-recaptcha';
import * as Yup from 'yup';
import { Button, Input } from 'components/common';
import { recaptcha_key } from 'data/config';
import { Error, Center, InputField } from './styles';

const ContactForm = ({ setFieldValue, isSubmitting, values, errors, touched }) => (
  <Form method="post">
    <InputField>
      <Input
        as={FastField}
        type="text"
        aria-label="name"
        name="name"
        component="input"
        placeholder="Nazwa*"
        error={touched.name && errors.name}
      />
      <ErrorMessage component={Error} name="name" />
    </InputField>
    <InputField>
      <Input
        id="email"
        aria-label="email"
        component="input"
        as={FastField}
        type="email"
        name="email"
        placeholder="Email*"
        error={touched.email && errors.email}
      />
      <ErrorMessage component={Error} name="email" />
    </InputField>
    <InputField>
      <Input
        as={FastField}
        component="textarea"
        aria-label="message"
        id="message"
        rows="8"
        name="message"
        placeholder="Wiadomość*"
        error={touched.message && errors.message}
      />
      <ErrorMessage component={Error} name="message" />
    </InputField>
    {values.name && values.email && values.message && (
      <InputField>
        <FastField
          component={Recaptcha}
          sitekey={recaptcha_key}
          name="recaptcha"
          onChange={value => setFieldValue('recaptcha', value)}
        />
        <ErrorMessage component={Error} name="recaptcha" />
      </InputField>
    )}
    <Center>
      <Button secondary type="submit" disabled={!!values.success}>
        {values.success ? 'wiadomość została wysłana' : 'Wyślij wiadomość'}
      </Button>
    </Center>
  </Form>
);

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    message: '',
    recaptcha: '',
    success: false,
  }),
  validationSchema: () =>
    Yup.object().shape({
      name: Yup.string().required('Twoja nazwa jest wymagana.'),
      email: Yup.string()
        .email('Podaj prawidłowy adres email.')
        .required('Twój adres email jest wymagany.'),
      message: Yup.string().required('Twoja wiadomość jest wymagana.'),
      recaptcha: Yup.string().required('Wprowadź prawidłowy kod.'),
    }),
  handleSubmit: async ({ name, email, message, recaptcha }, { setSubmitting, resetForm, setFieldValue }) => {
    try {
      await fetch('/contact/index.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message,
          'g-recaptcha-response': recaptcha,
        }),
      });
      await setSubmitting(false);
      await setFieldValue('success', true);
    } catch (err) {
      setSubmitting(false);
      setFieldValue('success', false);
    }
  },
})(ContactForm);
