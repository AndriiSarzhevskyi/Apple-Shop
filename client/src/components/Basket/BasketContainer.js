import { useContext, useEffect, useState } from "react";
import { HeaderContainer } from "../Header/HeaderContainer";
import { BasketContext } from "../../context/Basket.context.jsx";
import { Basket } from "./Basket.jsx";
export const BasketContainer = () => {
    const basket = useContext(BasketContext);

    const [openModal, setOpenModal] = useState(false);
    const [adsBasket, setAdsBasket] = useState();
    const [total, setTotal] = useState();

    useEffect(() => {
        setAdsBasket(basket.ads_basket);
        if (basket.ads_basket.length > 0) {
            let price = 0;
            for (let i = 0; i < basket.ads_basket.length; i++) {
                price += basket.ads_basket[i].count * basket.ads_basket[i].price;
            }
            setTotal(price);
        }
    }, [basket.ads_basket, basket.ads_basket.length]);

    const removeFromBasket = (ad) => {
        basket.removeProduct(ad);
    }

    const addCountProduct = (ad) => {
        basket.addCount(ad);
    }

    const minusCountProduct = (ad) => {
        basket.minusCount(ad);
    }

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        basket.clearBasket();
        setOpenModal(false);
    };

    return (
        <>
            <HeaderContainer></HeaderContainer>
            {adsBasket !== undefined && adsBasket.length >= 0 &&
                <Basket
                    ads={adsBasket}
                    total={total}
                    removeFromBasket={removeFromBasket}
                    addCountProduct={addCountProduct}
                    minusCountProduct={minusCountProduct}
                    handleOpenModal = {handleOpenModal}
                    handleCloseModal = {handleCloseModal}
                    openModal = {openModal}
                >
                </Basket>
            }

        </>
    )
}