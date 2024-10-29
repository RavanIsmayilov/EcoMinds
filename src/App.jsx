import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './home/home';
import Login from './shared/login/login';
import SignUp from './shared/signup/signup';
import Explore from './pages/explore/explore';
import Main from './pages/main/main';


function App() {


  return (
      <>
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/explore' element={<Explore/>} />
          </Routes>
      </BrowserRouter>
      </>
  )
}

export default App
