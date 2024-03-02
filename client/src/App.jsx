import React, {lazy} from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login';
import Chat from './pages/Chat';
import Groups from './pages/Groups';


// dynamic routes upload
const home = lazy(()=> import("./pages/Home"));
const login = lazy(()=> import("./pages/Login"));
const chat = lazy(()=> import("./pages/Chat"));
const groups = lazy(()=> import('./pages/Groups'));



const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/login' element={<Login/>}/>
    <Route path='/groups' element={<Groups/>}/>
    <Route path='/chat/:chatId' element={<Chat/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
