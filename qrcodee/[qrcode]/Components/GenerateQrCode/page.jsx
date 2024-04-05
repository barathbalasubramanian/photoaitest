"use client"
import React, { useState, useEffect } from 'react';
import Styles from './page.module.css';
import QRCode from 'qrcode';

export default function QrCodeGen({ EventName }) {
    const [qrCodeDataURL, setQRCodeDataURL] = useState('');

    useEffect(() => {
        generateQRCode();
    }, [EventName]);

    
    const generateQRCode = () => {
        const baseURL = `${process.env.NEXT_PUBLIC_WEB_APP_BASE_URL}/upload/${EventName}`;
        QRCode.toDataURL(baseURL)
            .then(url => {
                setQRCodeDataURL(url);
            })
            .catch(error => {
                console.error('Error generating QR code:', error);
            });
    };

    const handleDownload = () => {
        if (qrCodeDataURL) {
            // Create a temporary link element
            const link = document.createElement('a');
            link.download = 'qr_code.png'; // Set the download filename
            link.href = qrCodeDataURL;

            // Dispatch a click event to trigger the download
            document.body.appendChild(link);
            link.click();

            // Cleanup
            document.body.removeChild(link);
        }
    };

    return (
        <div className={Styles.QrCodeGen}>
            <div>
                <div className={Styles.scantit}>Scan Here</div>
                <div className={Styles.qrcodeDiv}>
                    {qrCodeDataURL && <img src={qrCodeDataURL} alt="QR Code" style={{"border-radius": "10px"}} />}
                </div>
                <div className={Styles.btndiv}>
                    <button className={Styles.downbtn} onClick={handleDownload}>Download</button>
                </div>
            </div>
        </div>
    );
}
