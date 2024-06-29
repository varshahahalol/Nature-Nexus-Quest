import React from 'react';
import ReactPlayer from 'react-player/youtube';

const Vidplayer = ({ url }) => {
  return (
    <div className='video-player'>
      <ReactPlayer
        url={url}
        controls={true}
        width='100%'
        height='100%'
      />
    </div>
  );
};

export default Vidplayer;
