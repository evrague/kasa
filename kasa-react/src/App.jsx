import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Accueil from './Components/Accueil';
import Apropos from'./Components/Apropos';
import Details_log from './Components/Details_log';
import Error404 from './Components/Error404';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Accueil/>} />
        <Route path='/Apropos' element={<Apropos/>} />
        <Route path='/Details/:id' element={<Details_log/>} />
        <Route path='*' element={<Error404/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
