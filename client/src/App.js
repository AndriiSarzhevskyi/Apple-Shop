
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './router';
import { BasketContext } from './context/Basket.context';
import { useBasket } from './hooks/basket.hook';

function App() {

  const routes = useRoutes()
  const { ads_basket, addProduct, removeProduct, addCount, minusCount, clearBasket } = useBasket();

  return (
    <BasketContext.Provider value={{ ads_basket, addProduct, removeProduct, addCount, minusCount, clearBasket }}>
      <Router>
        {routes}
      </Router>
    </BasketContext.Provider>
  );
}

export default App;
