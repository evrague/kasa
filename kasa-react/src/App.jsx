import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Accueil from './Components/Accueil';
import Apropos from'./Components/Apropos';
import Details_logement from './Components/Details_logement';
import Error404 from './Components/Error404';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Accueil/>} />
        <Route path='/Apropos' element={<Apropos/>} />
        <Route path='/Details/:id' element={<Details_logement/>} />
        <Route path='*' element={<Error404/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
