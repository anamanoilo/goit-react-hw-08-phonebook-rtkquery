import { TailSpin } from 'react-loader-spinner';

const Loader = ({ height, width }) => {
  return (
    <TailSpin
      color="#81a9ff"
      height={height}
      width={width}
      ariaLabel="loading"
    />
  );
};

export default Loader;
