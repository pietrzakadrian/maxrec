import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Card } from 'components/common';
import starIcon from 'assets/icons/star.svg';
import forkIcon from 'assets/icons/fork.svg';
import YouTube from 'react-youtube';
import { Image } from 'components/common/Image';
import musicVideos from 'components/common/MusicVideo/music-videos';
import { Wrapper, Grid, Item, Content, Stats } from './styles';

const opts = {
  height: '220',
  width: '380',
  playerVars: {
    autoplay: 0,
    controls: 0,
    autohide: 1,
    wmode: 'opaque',
    origin: 'http://localhost:8000/',
  },
};

const _onReady = event => event.target.pauseVideo();

export const Projects = () => {
  const [selectedMusicVideo, selectMusicVideo] = useState(0);
  const determineItemStyle = key => {
    const isItemSelected = selectedMusicVideo === key;
    return isItemSelected ? 'bg-light-gray' : '';
  };

  return (
    <Wrapper as={Container} id="projects">
      <h2>Teledyski</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Grid>
          {musicVideos.map(musicVideo => (
            <Image key={musicVideo.id} src={musicVideo.image} hover={musicVideo.hover} alt="test" />
          ))}
        </Grid>
      </div>
    </Wrapper>
  );
};
