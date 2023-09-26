import { useContext, useEffect, useState} from "react";
import { BasketContext } from "../../context/Basket.context.jsx";
import { Header } from "./Header.jsx";

export const HeaderContainer = (props) => {
    const basket = useContext(BasketContext);
    const [countBasket, setCountBasket] = useState();

    useEffect(()=>{
        setCountBasket(basket.ads_basket.length);
    },[basket.ads_basket]);

    return(
        <Header countBasket={countBasket}></Header>
    )
}