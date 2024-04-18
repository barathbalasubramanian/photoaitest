import React, { useEffect, useRef, useState } from 'react';

const CameraComponent = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const createObjects = () => {
      const video = videoRef.current;
      const canvas = canvasRef.current;

      if (video && canvas) {
        video.width = width;
        video.height = height;
        video.autoplay = true;

        const constraints = { video: true };

        navigator.mediaDevices.getUserMedia(constraints)
          .then((stream) => {
            video.srcObject = stream;
            video.play();
          })
          .catch((err) => {
            console.error('Error accessing camera:', err);
          });
      }
    };

    createObjects();
  }, [width, height]);

  const takeSnapshot = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video && canvas) {
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, width, height);

      // Create a link element and set its href to the data URL of the canvas image
      const snapshot = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = snapshot;
      link.download = 'snapshot.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div>
      <video ref={videoRef}></video>
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
      <button onClick={takeSnapshot}>Take Snapshot</button>
    </div>
  );
};

export default CameraComponent;
