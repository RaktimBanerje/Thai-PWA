import React from 'react';

const FullScreenIframe = ({ src }) => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <iframe 
        src={src}
        style={{ width: '100%', height: '100%' }}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default FullScreenIframe;