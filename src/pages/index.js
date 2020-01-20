import React from 'react';
import { Layout, SEO, Wrapper } from 'components/common';
import { Intro, Photography, Contact, MusicVideos, Movies, AboutUs } from 'components/landing';
import { Footer } from 'components/theme';
import { ParallaxProvider } from 'react-scroll-parallax';

export default () => (
  <ParallaxProvider>
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
  </ParallaxProvider>
);
