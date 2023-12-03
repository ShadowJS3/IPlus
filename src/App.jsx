import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App /> } />
        <Route path='/login' element={<Login /> } />
        <Route path='/signup' element={<Signup /> } />
        <Route path='/forgotpassword' element={<ForgotPassword /> } />
      </Routes>
    </BrowserRouter>
  )
};

export default App