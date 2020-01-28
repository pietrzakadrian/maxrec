import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { Image } from '../Image';

export const YouTubeToggle = ({ video }) => {
  const [selectedVideo, setVideo] = useState(0);
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return selectedVideo !== video.id ? (
    <Image isHover="true" onClick={() => setVideo(video.id)} image={video.image} hover={video.hover} />
  ) : (
    <YouTube containerClassName="youtube__container" style={{ display: 'flex' }} opts={opts} videoId={video.link} />
  );
};
