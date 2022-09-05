import { FidgetSpinner } from "react-loader-spinner";
import { SpinnerContainer } from "./styles";

export const Spinner = () => {
  return (
    <SpinnerContainer>
      <FidgetSpinner
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        ballColors={["#ff0000", "#00ff00", "#0000ff"]}
        backgroundColor="#F4442E"
      />
    </SpinnerContainer>
  );
};
