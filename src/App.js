import Home from './components/Home/Home';
import Ranking from './components/Ranking/Ranking';
import Tournaments from './components/Tournaments/Tournaments';
import Authentication from './components/Authentication/Authentication';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Tournaments" element={<Tournaments />} />
            <Route path="/Ranking" element={<Ranking />} />
            <Route path='/Authentication' element={<Authentication />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
