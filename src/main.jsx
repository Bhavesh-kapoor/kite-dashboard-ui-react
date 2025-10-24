import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./index.css";
import OrderPage from './orders/OrderPage.jsx';
import HoldingPage from './holdings/HoldingPage.jsx';
import PositionPage from './postions/PositionPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/*' element={<Home/> }/>
          <Route path='/orders' element={<OrderPage/> }/>
          <Route path='/holdings' element={<HoldingPage/> }/>
          <Route path='/positions' element={<PositionPage/> }/>
      </Routes>
    </BrowserRouter>
 
  </StrictMode>,
)
