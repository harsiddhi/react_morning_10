import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {Routes, Route, Link ,BrowserRouter} from 'react-router-dom'
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Usernav from './components/screen/Usernav';
import Cart from './components/pages/Cart';
import Userlogin from './components/screen/Userlogin';
import Counter from './components/screen/Counter';
import Funactionalstate from './components/Functionalstate';
import Admin from './components/pages/Admin';


function App() {
  return (
    <BrowserRouter>
          

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>

      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/userlogin' element={<Userlogin/>}></Route>
      <Route path='/counter' element={<Counter/>}></Route>
      <Route path='/functional' element={<Funactionalstate/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>



    </Routes>
    </BrowserRouter>

  );
}

export default App;
