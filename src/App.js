import './App.scss';
import  CreateButton from './components/Btn/Btn';
import  MediaCard from './components/Card/Card';
import FadeMenu from './components/Menu/Menu';
import MenuAppBar from './containers/header/Header';
import { Provider } from 'react-redux';
import store from './redux/store/index';
import {getProducts,showProducts} from '../src/redux/actions/actions';
import {connect} from 'react-redux';
import * as actions from './redux/actions/actions';
  const state = store.getState();
function App() {
  
  return (
    <Provider store={store}>
      {/* {console.log(state)}
      {console.log(store.dispatch(getProducts()))}
      {console.log(store.dispatch(showProducts()))}
      {console.log(store.getState)}
{console.log(state)} */}
      <div className="App">
        <MenuAppBar/>
        <CreateButton color="primary" text="search" href="#"/>
        <CreateButton color="secondary"/>
        <FadeMenu/>
        <MediaCard title="lizard" discription="lllizzzard" img="https://hbr.org/resources/images/article_assets/2020/04/Apr20_07_1162572100-768x432.jpg"/>
        <MediaCard title="horse" discription="lllizzzard" img="https://www.fiftyfiveandfive.com/wp-content/uploads/2019/06/header-2-2000x500.png"/>
      </div>
    </Provider>
  );
}

// function mapDispatchToProps(dispatch){
//   return{
//    getProducts : ()=>dispatch(actions.getProducts())
//   }
// } 
// export default connect(null,mapDispatchToProps)(App); 

export default App;