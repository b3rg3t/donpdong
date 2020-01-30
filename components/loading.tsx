import React from "react";
import PulseLoader from "react-spinners/BarLoader";

interface LoadingProps {
  loading?: boolean;
}
const Loading = ({ loading }: LoadingProps): React.ReactElement => {
  return (
    <div className="sweet-loading">
      <PulseLoader color={"rgb(126, 38, 38)"} loading={loading} width={"80px"} height={"0.5rem"} />
    </div>
  );
  //   }
};

export default Loading;
