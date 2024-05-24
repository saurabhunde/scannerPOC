import { useCallback, useEffect, useRef, useState } from 'react'
import {Html5Qrcode} from "html5-qrcode";
const AnyCodeScanner = () => {
const [devices, setDevices] = useState([]);
const [selectedDevice, setSelectedDevice] = useState("");
let scannerInstance = useRef(null);


const stopScanner = useCallback(() => {
    if(scannerInstance && scannerInstance.current) {
        scannerInstance.current
        .stop(() => (console.log("Scanning Stopped")))
        .catch((err) => {
          console.log("error while stopping scanner", err);
        });
    }
    
}, []);

 const clearCanvas = useCallback(() => {
    if(scannerInstance && scannerInstance.current) { 
        scannerInstance.current.clear()
        .catch((err) => {
          console.log("error while clearing scanner", err);
        });
    }
 }, []);

const stopAndClearScanner = useCallback(() => {
    stopScanner();
    clearCanvas();
}, [clearCanvas, stopScanner]);

const pauseScanner = useCallback(() => { 
    if(scannerInstance && scannerInstance.current) { 
        scannerInstance.current
        .pause()
        .catch((err) => {
          console.log("error while pausing scanner", err);
        });
    }
}, []);

const onSuccess = useCallback((decodedText, decodedResult) => {
    console.log(decodedText, decodedResult);
    pauseScanner()
}, [pauseScanner]);

const onError = useCallback((errorMessage) => {
    console.warn(errorMessage);
    stopAndClearScanner();
}, [stopAndClearScanner]);


const initiateScanner = useCallback(() => {
    if(scannerInstance && scannerInstance.current) { 
        // if(scannerInstance.current.getState() === "SCANNING" || scannerInstance.current.getState() === "PAUSED") {
        //     stopAndClearScanner();
        // }
        scannerInstance.current
        .start(
            { facingMode: "environment" },
          {
            fps: 10, 
            qrbox: { width: 400, height: 400 },
          },
          onSuccess,
          onError
        )
        .catch((err) => {
          console.log("error while starting scanner", err);
          stopAndClearScanner();
        });
    } else {
        console.error("scannerInstance is not initialized");
        stopAndClearScanner();
    }
    
}, [onError, onSuccess, stopAndClearScanner]);

const onChangeCamera = useCallback((e) => {
  setSelectedDevice(e.target.value);
  stopAndClearScanner();
  initiateScanner();
}, [initiateScanner, stopAndClearScanner]);

useEffect(() => {
        Html5Qrcode.getCameras()
          .then((devices) => {
            setDevices(devices);
            if (devices && devices.length) {
              setSelectedDevice(devices[0]?.id);
              scannerInstance.current = new Html5Qrcode( "reader", false);
              initiateScanner(devices[0]?.id);
            }
          })
          .catch((err) => {
            console.log("Error while getting devices", err);
            stopAndClearScanner();
          });

          
          return () => {
            stopAndClearScanner();
            scannerInstance.current = null;
          }
}, [initiateScanner, stopAndClearScanner]);
  return (
    <>
    <select value={selectedDevice?.id} onChange={onChangeCamera}>
      <option value="">Select Device</option>
      {devices.map((device) =>
        <option key={device.id} value={device.id}>{device.label || device.id}</option>
      )}
    </select>
    <div id="reader" style={{width: "600px" }}></div>
    </>
  )
}

export default AnyCodeScanner