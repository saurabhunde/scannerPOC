import useZxing from "./useZxing";
export const Scanner = ({
    onResult = () => {},
    onError = () => {},
  }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { ref } = useZxing({ onResult, onError });
    return <video ref={ref} />;
  };