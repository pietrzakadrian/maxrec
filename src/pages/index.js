import React from 'react';
import { Layout, SEO, ContainerWrapper } from 'components/common';
import { Intro, Photography, Contact, MusicVideos, Movies, AboutUs, Footer } from 'components/theme';
import { ParallaxProvider } from 'react-scroll-parallax';
import 'animate.css/animate.min.css';

export default () => (
  <Layout>
    <SEO />
    <ParallaxProvider>
      <Intro />
    </ParallaxProvider>

    <ContainerWrapper>
      <AboutUs />
      <MusicVideos />
      <Movies />
      <Photography />
      <Contact />
      <Footer />
    </ContainerWrapper>
  </Layout>
);
