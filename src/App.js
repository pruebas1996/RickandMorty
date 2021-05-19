import './App.css';
import LocationContainer from './components/LocationContainer';
import getLocation from './services/getLocation';
function App() {
  
  return (
    <div className="App">
      <div><h1>RYCK AND MORTY</h1></div>
        <LocationContainer getLocation={getLocation} />    
    </div>
  );
}

export default App;
