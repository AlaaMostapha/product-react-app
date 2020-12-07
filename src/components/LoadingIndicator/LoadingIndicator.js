import React from "react";
import Loader from "react-loader-spinner";
export default function LoadingIndicator() {
  return (
    <div className="text-center">
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
}
