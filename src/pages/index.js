import Header from "./header";
import { Provider } from "react-redux";
import store from "../../redux/store/index";
function Home() {
  return (
    <div>
      <Provider store={store}>
        <Header />
      </Provider>
    </div>
  );
}

export default Home;
