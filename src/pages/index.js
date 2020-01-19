import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Photography, Contact, MusicVideos, Movies, AboutUs } from 'components/landing';
import { ParallaxProvider } from 'react-scroll-parallax';

export default () => (
  <ParallaxProvider>
    <Layout>
      <SEO />
      <Intro />
      <AboutUs />
      <MusicVideos />
      <Movies />
      <Photography />
      <Contact />
    </Layout>
  </ParallaxProvider>
);
