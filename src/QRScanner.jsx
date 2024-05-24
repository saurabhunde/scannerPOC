import React, { useEffect, useRef, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

const QRCodeScanner = ({ onScanSuccess, onScanFailure }) => {
    const scannerRef = useRef(null);
  const html5QrCodeRef = useRef(null);
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    const startScanner = async () => {
      if (scannerRef.current && !isScanning) {
        html5QrCodeRef.current = new Html5Qrcode(scannerRef.current.id);

        const config = {
          fps: 10,
          qrbox: { width: 250, height: 250 },  // Set the scanning box size
        };

        try {
          const cameraConfig = { facingMode: "environment" };  // Use the rear camera
          await html5QrCodeRef.current.start(
            cameraConfig,
            config,
            onScanSuccess,
            onScanFailure
          );
          setIsScanning(true);
        } catch (err) {
          console.error("Failed to start scanning", err);
          onScanFailure(err);
        }
      }
    };

    if (!isScanning) {
      startScanner();
    }

    return () => {
      const stopScanner = async () => {
        if (html5QrCodeRef.current && isScanning) {
          try {
            await html5QrCodeRef.current.stop();
            await html5QrCodeRef.current.clear();
            setIsScanning(false);
          } catch (err) {
            console.error("Failed to stop scanning", err);
          }
        }
      };

      stopScanner();
    };
  }, [isScanning, onScanSuccess, onScanFailure]);

  return (
    <div id="reader" ref={scannerRef} style={{ width: '100%', height: '100%', minHeight: '300px' }} />
  );
};

export default QRCodeScanner;
