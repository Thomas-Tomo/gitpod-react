import logo from './logo.svg';
import './App.css';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting="Im a stateful class component" name="Thomas" />
    </div>
  );
}

export default App;
