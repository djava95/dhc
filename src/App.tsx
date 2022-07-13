import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './layout/HomePage';
import News from './layout/News';
import Reports from './layout/Reports';
import Gallery from './layout/Gallery';
import About from './layout/About';
import Contacts from './layout/Contacts';
import './App.css';

function App() {  
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>  
          <Route path='/' element={<HomePage/>} /> 
          <Route path='/news' element={<News/>} /> 
          <Route path='/reports' element={<Reports/>} />
          <Route path='/gallery' element={<Gallery/>} /> 
          <Route path='/about' element={<About/>} /> 
          <Route path={`/${encodeURIComponent('contact us')}`} element={<Contacts/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
