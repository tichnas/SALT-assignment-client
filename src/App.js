import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import PrivateOutlet from './components/PrivateOutlet';
import Auth from './components/Auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/auth' element={<Auth />} />

          <Route element={<PrivateOutlet />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
