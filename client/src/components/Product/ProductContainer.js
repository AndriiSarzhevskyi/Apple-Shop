import { useEffect, useState, useCallback, useContext} from "react";
import { HeaderContainer } from "../Header/HeaderContainer";
import { Product } from "./Product.jsx";
import { useHttp } from "../../hooks/http.hook";
import { BasketContext } from "../../context/Basket.context.jsx";

export const ProductContainer = () => {
    const basket = useContext(BasketContext);

    const { request} = useHttp();
    const [ad, setAd] = useState();

    const addToBasketHandler = useCallback((ad) =>{
        basket.addProduct(ad);
    },[]);

    const getAd = useCallback(async (id) => {
        try {
            await request('/api/ads/get-ad', 'Post', {id: id}).then(res => {
                setAd(res.ad);
            });
        }
        catch (e) { }
    }, []);

    useEffect(() => {
        const pathArray = window.location.pathname.split('/');
        const id = pathArray.pop();
        getAd(id);
    }, [])

    return (
        <>
            <HeaderContainer></HeaderContainer>
            {ad !== undefined && <Product ad = {ad} addToBasketHandler = {addToBasketHandler}></Product>}
        </>
    );
}