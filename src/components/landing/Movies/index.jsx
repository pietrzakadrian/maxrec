import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Card } from 'components/common';
import YouTube from 'react-youtube';
import movies from 'components/common/Movie/movies';
import { Image } from 'components/common/Image';
import { Wrapper, Grid, Item, Content, Stats } from './styles';

const opts = {
  height: '220',
  width: '380',
  playerVars: {
    autoplay: 0,
    showinfo: 1,
    controls: 0,
    autohide: 1,
    wmode: 'opaque',
    origin: 'http://localhost:8000/',
  },
};

const _onReady = event => event.target.pauseVideo();

export const Movies = () => (
  <Wrapper as={Container} id="projects">
    <h2>Film</h2>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Grid>
        {movies.map(movie => (
          <Image key={movie.id} src={movie.image} hover={movie.hover} alt="test" />
        ))}

        {/* <YouTube videoId="7zixHshR1s8" opts={opts} onReady={_onReady} />
        <YouTube videoId="fOfJ0_CzaY8" opts={opts} onReady={_onReady} />
        <YouTube videoId="VAn4C2l-Jb4" opts={opts} onReady={_onReady} />
        <YouTube videoId="y65Z51FFCSU" opts={opts} onReady={_onReady} />
        <YouTube videoId="esZ8iv2fb60" opts={opts} onReady={_onReady} />
        <YouTube videoId="CYbC3mhRCyU" opts={opts} onReady={_onReady} /> */}
      </Grid>
    </div>
  </Wrapper>
);
