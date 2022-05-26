import Home from './pages/Home'
import List from './pages/List'
import Single from './pages/Single'
import './App.css';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
      <Route path='/hotel' element={<List />} />
      <Route path='/hotel_detail' element={ <Single />} />
      </Routes>
  );
}

export default App;
