import React, { useState } from "react";
import Webcam from "react-webcam";
import Styles from "./page.module.css";

const videoConstraints = {
    width: 4000,
    height: 4000,
    facingMode: "user"
};

const TakeSelfi = ({ setSelfie, captureselfivalue }) => {
    const webcamRef = React.useRef(null);
    const [Retake, retakevalue] = useState(false);
    const [image, imagevalue] = useState('');

    const downloadImage = (imageSrc, imageName) => {
        // Create a new anchor element
        const a = document.createElement('a');
        // Set the href attribute to the image source
        a.href = imageSrc;
        // Set the download attribute to the desired file name
        a.download = imageName;
        // Append the anchor element to the document body
        document.body.appendChild(a);
        // Simulate a click on the anchor element to trigger the download
        a.click();
        // Remove the anchor element from the document body
        document.body.removeChild(a);
    };

    const capture = async () => {
        // Capture the image from the webcam
        const imageSrc = await webcamRef.current.getScreenshot();
        // Set the captured image source to state
        imagevalue(imageSrc);
        
        // Download the image
        downloadImage(imageSrc, 'selfie.jpg');

        // Note: You're already setting the captured image as blob in 'setSelfie' state. 
        // If you want to use the blob for other purposes, you can keep the following line.
        setSelfie(blob);
    };

    return (
        <div>
            <Webcam
                audio={false}
                height={720}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={1280}
                videoConstraints={videoConstraints}
                className={Styles.Webcam}
            />
            <button onClick={capture}>Capture</button>
        </div>
    );
};