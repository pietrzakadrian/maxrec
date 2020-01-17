import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Photography, Contact, MusicVideos, Movies, AboutUs } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <AboutUs />
    <MusicVideos />
    <Movies />
    <Photography />
    <Contact />
  </Layout>
);
