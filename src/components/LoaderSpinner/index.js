import Loader from "react-loader-spinner";

const LoaderSpinner = () => (
  <div className="loader-container">
    <Loader type="TailSpin" color="#4094EF" height={30} width={30} />
  </div>
);

export default LoaderSpinner;
