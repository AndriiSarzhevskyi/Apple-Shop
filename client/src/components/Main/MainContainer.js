import { HeaderContainer } from "../Header/HeaderContainer";
import { useEffect, useState, useCallback } from "react";
import { useHttp } from "../../hooks/http.hook";
import { Main } from "./Main";
import { AdsContainer } from "../Ads/AdsContainer.jsx";
import { About } from "../About/About.jsx";

export const MainContainer = () => {

    const { request} = useHttp();
    const [top_ads, setTopAds] = useState();

    const getAds = useCallback(async () => {
        try {
            await request('/api/ads/get-top-ads', 'GET').then(res => {
                setTopAds(res.ads);
            });
        }
        catch (e) { }
    }, []);

    useEffect(() => {
        getAds();
    }, []);



    return (
        <>
            <HeaderContainer></HeaderContainer>
            <Main></Main>
            {top_ads !== undefined && <AdsContainer ads={top_ads} header={"Топ рейтингу"}></AdsContainer>}
            <About></About>
        </>
    )
}