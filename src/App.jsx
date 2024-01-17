import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import LandingPages from './Pages/LandingPages';
import WatchHistory from './Pages/WatchHistory';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <h1></h1>
     <Header/>

<Routes>

<Route path='/' element={<LandingPages/>}/>
<Route path='/Home' element={<Home/>}/>
<Route path='/WatchHistory' element={<WatchHistory/>}/>

  

</Routes>
    <Footer/>

    </div>
  );
}

export default App;
