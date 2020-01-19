import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Card } from 'components/common';
import YouTube from 'react-youtube';
import { Image } from 'components/common/Image';
import { musicVideos } from 'components/common/MusicVideo/music-videos';
import { YouTubeToggle } from 'components/common/YouTubeToggle';
import { H2 } from 'components/common/Typography';
import { Wrapper, Grid, MusicVideosWrapper } from './styles';

export const MusicVideos = () => (
  <Wrapper as={Container} id="music-videos">
    <H2>Teledyski</H2>

    <MusicVideosWrapper>
      <Grid>
        {musicVideos.map(video => (
          <YouTubeToggle key={video.id} video={video} />
        ))}
      </Grid>
    </MusicVideosWrapper>
  </Wrapper>
);
