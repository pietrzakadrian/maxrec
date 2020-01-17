import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Card } from 'components/common';
import YouTube from 'react-youtube';
import { Image } from 'components/common/Image';
import musicVideos from 'components/common/MusicVideo/music-videos';
import { YouTubeToggle } from 'components/common/YouTubeToggle';
import { Wrapper, Grid, Item, Content, Stats } from './styles';

export const MusicVideos = () => (
  <Wrapper as={Container} id="music-videos">
    <h2>Teledyski</h2>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Grid>
        {musicVideos.map(video => (
          <YouTubeToggle key={video.id} video={video} />
        ))}
      </Grid>
    </div>
  </Wrapper>
);
