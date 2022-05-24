import Home from './pages/Home'
import List from './pages/List'
import './App.css';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotel' element={<List /> } />
      </Routes>
  );
}

export default App;
