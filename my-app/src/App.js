import React from 'react' 
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import Home from '../src/components/Home/Home'
import Login from './components/Login/Login'

const App = () => {
  return (
    <div>
      <ToastContainer theme='colored'></ToastContainer>
      <BrowserRouter>
          <Switch>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Login' element={<Login/>}></Route>
          </Switch>
      </BrowserRouter>
      <Login/>
    </div>
  )
}

export default App

