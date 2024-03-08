import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProtectedRoute from './components/auth/ProtectedRoute';
import {Loader} from './components/layout/Loader';


// dynamic routes upload
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import('./pages/Groups'));


let user = true;
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route element={<ProtectedRoute user={user} />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/groups" element={<Groups />} />
            <Route path="/chat/:chatId" element={<Chat />} />

          </Route>
          <Route path="/login" element={
            <ProtectedRoute user={!user} redirect='/'>
              <Login />
            </ProtectedRoute>
          } />

        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
