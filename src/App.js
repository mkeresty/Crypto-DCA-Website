import logo from './logo.svg';
import './App.scss';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/AdapterDateFns';
import SetValues from './Components/SetValues/SetValues.js';
import ChartOutput from './Components/ChartOutput/ChartOutput.js';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div className="App">
      <header className="App-header">
        <h1>Currency DCA</h1>
      </header>
      <SetValues/>
      <ChartOutput/>
    </div>
    </LocalizationProvider>
  );
}

export default App;
