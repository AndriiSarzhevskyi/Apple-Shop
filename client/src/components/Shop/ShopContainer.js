import { useState, useCallback, useEffect } from "react";
import { useHttp } from "../../hooks/http.hook";
import { HeaderContainer } from "../Header/HeaderContainer";
import { Shop } from "./Shop.jsx";

export const ShopContainer = () => {
    const [ads, setAds] = useState();
    const { request, error } = useHttp();
    const [sort, setSort] = useState("new");
    const [filters, setFilters] = useState({ minPrice: 0, maxPrice: 1000000, category: 'all' })
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const getAds = async () => {
        try {
            await request('/api/ads/get-filter-ads', 'POST', { sort: sort, ...filters }).then(res => {
                setAds(res.ads);
            });
        }
        catch (e) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAds();
    }, [])

    useEffect(() => {
        getAds();
    },[sort]);

    const handleChangeSort = (event) => {
        setSort(event.target.value);
    };

    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };

    const changeFiltersHandler = (event) => {
        setFilters({ ...filters, [event.target.name]: event.target.value });
    }

    const filterHandler = () => {
        getAds();
    }
    
    return (
        <>
            <HeaderContainer></HeaderContainer>
            <Shop
                ads={ads}
                sort={sort}
                filters={filters}
                handleChangeSort={handleChangeSort}
                handleDrawerOpen={handleDrawerOpen}
                handleDrawerClose={handleDrawerClose}
                isDrawerOpen={isDrawerOpen}
                changeFiltersHandler={changeFiltersHandler}
                filterHandler={filterHandler}
            >
            </Shop>
        </>
    );
}