import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route exact path='/' element = {<div><NavBar/><Home/></div>}/>
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
