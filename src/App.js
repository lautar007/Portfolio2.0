import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Proyects from './components/Proyects';
import Resume from './components/Resume';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route exact path='/' element = {<div><NavBar/><Home/></div>}/>
        <Route exact path='/proyects' element = {<div><NavBar/><Proyects/></div>}/>
        <Route exact path='/resume' element = {<div><NavBar/><Resume/></div>}/>
        <Route exact path='/about' element = {<div><NavBar/><About/></div>}/>
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
