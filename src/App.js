import './App.scss';
import  CreateButton from './components/Btn/Btn';
import  MediaCard from './components/Card/Card';
import FadeMenu from './components/Menu/Menu';
function App() {
  return (
    <div className="App">
      <CreateButton color="primary" text="search" href="#"/>
      <CreateButton color="secondary"/>
      <FadeMenu/>
      <MediaCard title="lizard" discription="lllizzzard" img="https://hbr.org/resources/images/article_assets/2020/04/Apr20_07_1162572100-768x432.jpg"/>
      <MediaCard title="horse" discription="lllizzzard" img="https://www.fiftyfiveandfive.com/wp-content/uploads/2019/06/header-2-2000x500.png"/>

      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
