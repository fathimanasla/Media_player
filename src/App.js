import './App.css';
import Landing from './Pages/Landing';
import Home from './Pages/Home';
import History from './Pages/History';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
       <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/watch-history' element={<History/>}/>
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
