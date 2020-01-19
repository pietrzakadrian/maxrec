import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { useMediaQuery } from 'react-responsive';
import { Image } from '../Image';

export const YouTubeToggle = ({ video }) => {
  const [selectedVideo, setVideo] = useState(0);
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1023px)' });
  const isTabletLarge = useMediaQuery({ query: '(min-width: 1024px) and (max-width: 1259px)' });

  const checkRwd = () => {
    if (isMobileOrTablet) {
      return {
        height: '200px',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };
    }

    if (isTabletLarge) {
      return {
        height: '170px',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };
    }

    return {
      height: '214',
      width: '380',
      playerVars: {
        autoplay: 1,
      },
    };
  };

  return selectedVideo !== video.id ? (
    <Image isHover="true" onClick={() => setVideo(video.id)} src={video.image} hover={video.hover} alt="thumbnail" />
  ) : (
    <YouTube style={{ display: 'flex' }} opts={checkRwd()} videoId={video.link} />
  );
};
