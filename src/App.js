import './App.scss';
import { Provider } from 'react-redux';
import Routes from './Route/index'
import store from './redux/store/index';


function App() {
  
  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
}


export default App;