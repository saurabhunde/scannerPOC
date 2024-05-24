// import { useState } from 'react'
// import {QrScanner} from '@yudiel/react-qr-scanner';

// export const BarcodeScanner = () => {
//   const [result, setResult] = useState(null);
//   return (
//     <div>
//       <div>Result-{result}</div>
//       <div style={{ width: 500, height: 500 }}>
//       <video id='videoElement' autoPlay style={{ width: 0, height: 0 }}/>
//       <QrScanner
//       videoId={'videoElement'}
//       constraints={{
//         facingMode: 'environment',
//       }}
//           onDecode={(result) => setResult(result)}
//           onError={(error) => console.log(error?.message)}
//       />
//       {/* <Scanner
//             videoId={'videoElement'}
//             enabled={true}
//             options={{
//               constraints: {
//                 facingMode: 'environment',
//               }
//             }}
//             onResult={(text) => setResult(text)}
//             onError={(error) => console.log(error?.message)}
//         /> */}
//         </div>
//     </div>
//   )
// }


  // import { useState } from 'react'
  // import {Scanner, useDevices, centerText, boundingBox} from '@yudiel/react-qr-scanner';

  // export const BarcodeScanner = () => {
  //   const [result, setResult] = useState(null);
  //   const [pauseScaner, setPauseScaner] = useState(false);
  //   const devices = useDevices();
  //   const onScanComplte = (result) => {
  //     console.log("result--->", result);
  //     setResult(result?.rawValue);
  //     setPauseScaner(true);
  //   }
  //   return (
  //     <div>
  //       <div>Result-{result}</div>
  //       <div style={{ width: 500, height: 500 }}>
  //         <video id='videoElement' autoPlay style={{ width: 0, height: 0 }}/>
  //         <Scanner
  //           videoId={'videoElement'}
  //           scanDelay={500}
  //           paused={pauseScaner}
  //           torch={true}
  //           constraints={{
  //             facingMode: "environment",
  //             deviceId: devices?.[0]?.deviceId,
  //           }}
  //           allowMultiple={true}
  //           //formats={["CODE_128"]}
  //           onScan={onScanComplte}
  //           components={{
  //             audio: true,
  //             onOff: true,
  //             finder: true,
  //           }}
  //           onError={(error) => console.log(error?.message)}
  //         />
  //         {/* <Scanner
  //             videoId={'videoElement'}
  //             enabled={true}
  //             options={{
  //               constraints: {
  //                 facingMode: 'environment',
  //               }
  //             }}
  //             onResult={(text) => setResult(text)}
  //             onError={(error) => console.log(error?.message)}
  //         /> */}
  //       </div>
  //     </div>
  //   );
  // }


  
  import { useState } from 'react'
  //import {Scanner, useDevices, centerText, boundingBox} from '@yudiel/react-qr-scanner';
  import {QrScanner, useMediaDevices} from '@yudiel/react-qr-scanner';
  export const BarcodeScanner = () => {
    const [result, setResult] = useState(null);
    const [pauseScaner, setPauseScaner] = useState(false);
    const devices = useMediaDevices({
      facingMode: "environment"
    });
    console.log("devices--->", devices);
    const onScanComplte = (result) => {
      console.log("result--->", result);
      setResult(result);
      setPauseScaner(true);
    }
    return (
      <div>
        <div>Result-{result}</div>
        <div style={{ width: 500, height: 500 }}>
          <video id="videoElement" autoPlay style={{ width: 0, height: 0 }} />
          <QrScanner
            constraints={{
              facingMode: "environment",
              aspectRatio: 1
            }}
            deviceId={devices?.[0]?.deviceId}
            scanDelay={500}
            // onResult={(text) => {
            //   setResult(text);
            //   console.log("result-->", text);
            //   //setPauseScaner(true);
            // }}
            stopDecoding={pauseScaner}
            audio={true}
            tracker={true}
            onDecode={onScanComplte}
            onError={(error) => console.log(error?.message)}
          />
        </div>
      </div>
    );
  }


  // import { useState } from 'react'
  // //import {Scanner, useDevices, centerText, boundingBox} from '@yudiel/react-qr-scanner';
  // import {Scanner, useDeviceList} from '@yudiel/react-qr-scanner';
  // export const BarcodeScanner = () => {
  //   const [result, setResult] = useState(null);
  //   //const [pauseScaner, setPauseScaner] = useState(false);
  //   const devices = useDeviceList();
  //   console.log("devices--->", devices);
  //   const onScanComplte = (text, result) => {
  //     console.log("result--->",text, result);
  //     setResult(text);
  //    // setPauseScaner(true);
  //   }
  //   return (
  //     <div>
  //       <div>Result-{result}</div>
  //       <div style={{ width: 500, height: 500 }}>
  //         <video id="videoElement" autoPlay style={{ width: 0, height: 0 }} />
  //         <Scanner
  //           //enabled={!pauseScaner}
  //           onResult={onScanComplte}
  //           onError={(error) => console.log(error?.message)}
  //           options={{
  //             constraints: {
  //               aspectRatio: 1,
  //               facingMode: 'environment',
  //             }
  //           }}
  //           components={{
  //             audio: true,
  //             onOff: true,
  //             finder: true,
  //             torch: true,
  //             tracker: true,
  //           }}
  //       />
  //       </div>
  //     </div>
  //   );
  // }