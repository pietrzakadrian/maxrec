import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Card } from 'components/common';
import starIcon from 'assets/icons/star.svg';
import forkIcon from 'assets/icons/fork.svg';
import YouTube from 'react-youtube';
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

export const Projects = () => (
  <Wrapper as={Container} id="projects">
    <h2>Teledyski</h2>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Grid>
        <YouTube videoId="Te_0LvaPwgA" opts={opts} onReady={_onReady} />
        <YouTube videoId="l0tNYMwlWaA" opts={opts} onReady={_onReady} />
        <YouTube videoId="36KcK_uq44M" opts={opts} onReady={_onReady} />
        <YouTube videoId="CfacHCkuZp4" opts={opts} onReady={_onReady} />
        <YouTube videoId="hbX2lQlJwTE" opts={opts} onReady={_onReady} />
        <YouTube videoId="lsWglt2GRM8" opts={opts} onReady={_onReady} />
      </Grid>
    </div>
  </Wrapper>
);
