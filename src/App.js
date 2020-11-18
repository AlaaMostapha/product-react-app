import './App.scss';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Route/index';
import store from './redux/store/index';

import Header from './containers/header/Header';

function App() {
  
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
           <Header/>
          <Routes />
        </div>
      </Router>
    </Provider>
  );
}


export default App;