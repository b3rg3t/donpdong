import React from "react";
import PulseLoader from "react-spinners/ScaleLoader";

interface LoadingProps {
  loading?: boolean;
}
const Loading = ({ loading }: LoadingProps): React.ReactElement => {

  return (
    <div className="sweet-loading">
      <PulseLoader color={"#2859a3"} loading={loading} />
    </div>
  );
  //   }
};

export default Loading;
