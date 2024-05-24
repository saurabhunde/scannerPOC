import ScannerPlugin from "./ScannerPlugin";

// eslint-disable-next-line react/prop-types
const CodeScanner = () => {
    const onNewScanResult = (decodedText, decodedResult) => {
        console.log("App [result]", decodedResult);
        //setDecodedResults(prev => [...prev, decodedResult]);
    };
 return (
    <ScannerPlugin
                    fps={10}
                    qrbox={400}
                    disableFlip={false}
                    qrCodeSuccessCallback={onNewScanResult}
                />
 )
};

export default CodeScanner;
