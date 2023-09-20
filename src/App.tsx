import './App.css';

import { LogoSuite } from './components/LogoSuite/LogoSuite';

function App() {
  return (
    <div className="App">
      <LogoSuite repeatingLines={5} />
    </div>
  );
}

export default App;
