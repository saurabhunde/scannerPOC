import './App.css'
 //import {BarcodeScanner} from './BarcodeScnner.jsx';
 //import CodeScanner from './CodeScanner';
 import AnyCodeScanner from './AnyCodeScanner';
//  import QRCodeScanner from './QRScanner';
//import BarcodeScanner1 from "./BarcodeScnner1"
// import {Scanner} from './Scanner.jsx';
function App() {
  // const handleScanSuccess = (decodedText, decodedResult) => {
  //   console.log(`Scan result: ${decodedText}`, decodedResult);
  //   // Handle the successful scan result (e.g., display it, send it to a server, etc.)
  // };

  // const handleScanFailure = (error) => {
  //   console.warn(`Scan error: ${error}`);
  //   // Handle scan failure (optional)
  // };
  return (
    <>
      {/* <BarcodeScanner/> */}
      <AnyCodeScanner />
      {/* <BarcodeScanner1/> */}
      {/* <QRCodeScanner
        onScanSuccess={handleScanSuccess}
        onScanFailure={handleScanFailure}
      /> */}
    </>
  )
}

export default App
