import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Add1 from './Component/Add1';
import Add2 from './Component/Add2';
import Home from './Component/Home';
import Nav from './Component/Nav';
import Reactflows from './Component/Reactflows';
import Settings from './Component/Settings';

function App() {
  return (
    <>

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/Add1' element={<Add1 />} />
          <Route path='/Add2' element={<Add2 />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
