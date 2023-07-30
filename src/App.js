import logo from './logo.svg';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {Routes, Route} from "react-router-dom";
import { CartPage, LandingPage, ProfilePage } from './pages/index';


function App() {
  return (
  <div>
    <Navbar/>
  <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/cart' element={<CartPage/>}/>
    <Route path='/profile' element={<ProfilePage/>}/>
  </Routes>
    <Footer/>
  
  </div>
  );
}

export default App;
