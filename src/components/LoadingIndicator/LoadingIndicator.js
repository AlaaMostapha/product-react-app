import React, { Component } from "react";
import Loader from "react-loader-spinner";
export default class LoadingIndicator extends Component {
  render() {
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
}
