import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './layout/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>  
          <Route path='/' element={<HomePage/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
