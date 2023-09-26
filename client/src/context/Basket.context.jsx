import { createContext } from 'react'

function noop() { }

export const BasketContext = createContext({
    ads_basket: [],
    addProduct: noop,
    removeProduct: noop,
    addCount: noop,
    minusCount: noop,
    clearBasket: noop,
})