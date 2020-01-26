import React from 'react';
import { H3, YouTubeToggle, Container, VideoGrid, VideoWrapper, ComponentWrapper } from 'components/common';
import { musicVideos } from 'components/theme/MusicVideos/music-videos';

export const MusicVideos = () => (
  <ComponentWrapper as={Container} id="music-videos">
    <H3>Teledyski</H3>

    <VideoWrapper>
      <VideoGrid>
        {musicVideos.map(video => (
          <YouTubeToggle key={video.id} video={video} />
        ))}
      </VideoGrid>
    </VideoWrapper>
  </ComponentWrapper>
);
