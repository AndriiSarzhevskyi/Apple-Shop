
import { Routes, Route, Navigate, /*Redirect*/ } from 'react-router-dom';
import { MainContainer } from './components/Main/MainContainer.js';
import { BasketContainer } from './components/Basket/BasketContainer.js';
import { ShopContainer } from './components/Shop/ShopContainer.js';
import { ProductContainer } from './components/Product/ProductContainer.js';
export const useRoutes = () => {


  return (
    <Routes>
      <Route path="/" element={<MainContainer />}></Route>
      <Route path="/basket" element={<BasketContainer />}></Route>
      <Route path="/shop" element={<ShopContainer />}></Route>
      <Route path="/product/:id" element={<ProductContainer />}></Route>
      <Route path="*" element={<Navigate to="/" replace />}></Route>
    </Routes>
  )
}