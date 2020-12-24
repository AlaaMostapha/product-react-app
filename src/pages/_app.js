import { Provider } from "react-redux";
import App from "next/app";

import { wrapper } from "../redux/store";
import "../styles/styles.global.scss";
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      // <Provider store={store}>
      <Component {...pageProps} />
      // </Provider>
    );
  }
}
export default wrapper.withRedux(MyApp);
