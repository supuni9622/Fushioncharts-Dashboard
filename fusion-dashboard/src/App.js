import './App.css';
import Header from "./headerComponent/Header";
import ChartsView from "./ChartsView";
import ObjectLiterals from './objectLiterals/ObjectLiterals';

function App() {
  return (
    <div className="App">
      <Header/>
      <ChartsView/>
      <a 
        className="App-link" 
        href="https://www.fusioncharts.com/dev/chart-attributes/area2d" 
        target="_blank"
        rel="noreferrer"
      >
        See all the fusion chart types here
      </a>
      <ObjectLiterals/>
    </div>
  );
}

export default App;
