import { SpinnerOverlay } from "./spinner.styles";
import loader from "../../assets/loader.svg";

const Spinner = () => (
  <SpinnerOverlay>
    {/* <SpinnerContainer /> */}
    <img src={loader} />
  </SpinnerOverlay>
);

export default Spinner;
