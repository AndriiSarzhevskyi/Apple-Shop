import { useCallback, useContext} from "react";
import { Ad } from "./Ad.jsx"
import { BasketContext } from "../../context/Basket.context.jsx";

export const AdContainer = (props) => {
    const basket = useContext(BasketContext);

    const addToBasketHandler = useCallback((ad) =>{
        basket.addProduct(ad);
    },[]);

    return(
        <Ad ad = {props.ad} addToBasketHandler = {addToBasketHandler}></Ad>
    )
}