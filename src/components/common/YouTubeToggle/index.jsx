import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { Image } from '../Image';

export const YouTubeToggle = ({ video }) => {
  const [selectedVideo, setVideo] = useState(0);
  const opts = {
    height: '214',
    width: '380',
    playerVars: {
      autoplay: 1,
    },
  };

  return selectedVideo !== video.id ? (
    <Image onClick={() => setVideo(video.id)} src={video.image} hover={video.hover} alt="thumbnail" />
  ) : (
    <YouTube style={{ display: 'flex' }} opts={opts} videoId={video.link} />
  );
};