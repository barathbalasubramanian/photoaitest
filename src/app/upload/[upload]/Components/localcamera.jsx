"use client"
import { useEffect, useRef, useState } from 'react';

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
    }
  };

  return (
    <div>
      <video ref={videoRef}></video>
      <canvas ref={canvasRef}></canvas>
      <button onClick={takeSnapshot}>Take Snapshot</button>
    </div>
  );
};

export default CameraComponent;