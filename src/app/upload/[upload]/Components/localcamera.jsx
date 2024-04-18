import React, { useEffect, useRef, useState } from 'react';

const CameraComponent = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const createObjects = async () => {
      const video = videoRef.current;
      const canvas = canvasRef.current;

      if (video && canvas) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
          video.srcObject = stream;
          video.play();
        } catch (error) {
          console.error('Error accessing camera:', error);
        }
      }
    };

    createObjects();
  }, []);

  const takeSnapshot = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video && canvas) {
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, width, height);

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
      <video ref={videoRef} width={width} height={height}></video>
      <canvas ref={canvasRef} width={width} height={height} style={{ display: 'none' }}></canvas>
      <button onClick={takeSnapshot}>Take Snapshot</button>
    </div>
  );
};

export default CameraComponent;
