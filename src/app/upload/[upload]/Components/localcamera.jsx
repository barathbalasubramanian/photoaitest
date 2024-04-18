import { useEffect, useRef, useState } from "react";

const CustomWebcam = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const photoRef = useRef(null);
  const [stream, setStream] = useState(null);

  useEffect(() => {
    const constraints = {
      audio: false,
      video: { facingMode: "user" },
    };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        setStream(stream);
        videoRef.current.srcObject = stream;
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const takePhoto = () => {
    const width = videoRef.current.videoWidth;
    const height = videoRef.current.videoHeight;
    canvasRef.current.width = width;
    canvasRef.current.height = height;
    canvasRef.current
      .getContext("2d")
      .drawImage(videoRef.current, 0, 0, width, height);
    const dataURL = canvasRef.current.toDataURL("image/png");
    photoRef.current.src = dataURL;
  };

  const closeCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = photoRef.current.src;
    link.download = "webcam-photo.png";
    link.click();
  };

  return (
    <div className="container">
      <video ref={videoRef} autoPlay />
      <canvas ref={canvasRef} style={{ display: "none" }} />
      <img ref={photoRef} alt="webcam" />
      <button onClick={takePhoto}>Take Photo</button>
      <button onClick={closeCamera}>Close Camera</button>
      <button onClick={downloadImage}>Download Image</button>
    </div>
  );
};

export default CustomWebcam;