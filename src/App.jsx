
import './App.css'
import Home from './pages/Home'
import LoginPage from './pages/Loginpage'
import {BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import SignupPage from './pages/SignupPage'
import CartPage from './pages/CartPage'
import Checkout from './pages/Checkout'
import ProductDetailPage from './pages/ProductDetailPage'
import Protected from './features/auth/components/Protected'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice'
import { selectLoggedInUser } from './features/auth/authSlice'
function App() {
 
  const dispatch = useDispatch()
  const user = useSelector(selectLoggedInUser)
  useEffect(() => {
    if(user) {

      dispatch(fetchItemsByUserIdAsync(user.id))
    }
  }, [dispatch, user])

  return (
    <>
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
          <Protected><Home /> </Protected>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/cart' element={<Protected><CartPage /></Protected>} />
          <Route path='/checkout' element={<Protected><Checkout /></Protected> } />
          <Route path='/product-detail/:id' element={<ProductDetailPage />} />
        </Routes>
      </Router>
    
    </div>
    </>
  )
}

export default App
