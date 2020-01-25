import React, { useState } from 'react';
import { Layout, StaticWrapper, ComponentWrapper, Container } from 'components/common';
import { Privacy, Header, Footer } from 'components/theme';
import Navbar from 'components/theme/Header/Navbar';

export default () => (
  <Layout>
    <Privacy />
    <Footer />
  </Layout>
);
