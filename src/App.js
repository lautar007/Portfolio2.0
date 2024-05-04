import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route exact path='/' element = {<div><Home/></div>}/>
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
