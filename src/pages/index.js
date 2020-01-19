import React from 'react';
import { Layout, SEO, Wrapper } from 'components/common';
import { Intro, Photography, Contact, MusicVideos, Movies, AboutUs } from 'components/landing';
import { Footer } from 'components/theme';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Wrapper>
      <AboutUs />
      <MusicVideos />
      <Movies />
      <Photography />
      <Contact />
      <Footer />
    </Wrapper>
  </Layout>
);
