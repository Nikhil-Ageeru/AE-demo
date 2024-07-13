import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import GameOverview from './pages/GameOverview';
import Community from './pages/Community';
import GameSingle from './pages/GameSingle';
import UpcommingGames from './pages/UpcommingGames';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/overview' element={<GameOverview />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/community' element={<Community />}></Route>
          <Route path='/gamesingle' element={<GameSingle />}></Route>
          <Route path='/upcomminggames' element={<UpcommingGames />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
