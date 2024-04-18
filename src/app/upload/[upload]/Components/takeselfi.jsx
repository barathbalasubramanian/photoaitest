import React, { useState } from "react";
import Styles from "./page.module.css";

const TakeSelfi = ({ setSelfie, captureselfivalue }) => {
  const [Retake, setRetake] = useState(false);
  const [image, setImage] = useState('');

  const captureImage = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      const track = stream.getVideoTracks()[0];
      const imageCapture = new ImageCapture(track);
      const blob = await imageCapture.takePhoto();
        
      const imageUrl = URL.createObjectURL(blob);

      setImage(imageUrl);
      setSelfie(blob);
    } catch (error) {
      console.error('Error capturing image:', error);
    }
  };

  return (
    <div className={Styles.TakeSelfi}>
      <div>
        <div>
          <h4>Capture Selfie</h4>
          <strong>Keep Face in the Center</strong>
          <div>and</div>
          <div className={Styles.SecondStrong}>Press Capture</div>
          <div
            className={Styles.CrossIcon}
            onClick={() => captureselfivalue(false)}
          >
            &#x2716;
          </div>
        </div>
        <div className={Styles.PositionRelative}>
          {!Retake ? (
            <div className={Styles.LottiePlayerDiv}>
              <lottie-player
                src="/svg/facescan.json"
                className={Styles.LottiePlayer}
                background="transparent"
                speed="0.5"
                style={{ width: '300px', height: '300px' }}
                direction="0"
                mode="normal"
                loop
                autoplay
              ></lottie-player>
            </div>
          ) : (
            <img
              src={image}
              alt=""
              style={{
                height: '300px',
                width: '300px',
                objectFit: 'cover',
                borderRadius: '30%',
                transform: 'scaleX(-1)'
              }}
            />
          )}
        </div>
        <div className={Styles.capturebtn}>
          {Retake && (
            <div onClick={() => setRetake(false)}>Re-Take</div>
          )}
          <div onClick={() => {
            if (Retake) {
              captureselfivalue(false);
            } else {
              captureImage();
              setRetake(true);
            }
          }}>
            {Retake ? 'Submit' : 'Capture'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakeSelfi;
