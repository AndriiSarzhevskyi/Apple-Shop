import { useContext } from "react";
import { BasketRow } from "./BasketRow.jsx"
import { BasketContext } from "../../context/Basket.context.jsx";

export const BasketRowContainer = ({ ad, removeFromBasket, addCountProduct, minusCountProduct }) => {
    const basket = useContext(BasketContext);

 


    return (
        <BasketRow ad={ad} removeFromBasket = {removeFromBasket} addCountProduct = {addCountProduct} minusCountProduct = {minusCountProduct}></BasketRow>
    )
}   