import React from 'react';
import { Layout, SEO, ContainerWrapper } from 'components/common';
import { Intro, Photography, Contact, MusicVideos, Movies, AboutUs, Footer, Privacy } from 'components/theme';
import { ParallaxProvider } from 'react-scroll-parallax';

export default () => (
  <Layout>
    <SEO />
    <Privacy />
  </Layout>
);
