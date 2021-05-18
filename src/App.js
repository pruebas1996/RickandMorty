import './App.css';
import LocationContainer from './components/LocationContainer';
import getLocation from './services/getLocation';
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <LocationContainer getLocation={getLocation} />
      </header>
    </div>
  );
}

export default App;
