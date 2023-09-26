import { useState, useCallback, useEffect } from 'react'

const storageName = 'Basket'

export const useBasket = () => {
  const [ads_basket, setAdsBasket] = useState([])

  const addProduct = useCallback((ad) => {

    const data = JSON.parse(localStorage.getItem(storageName)) || [];
    if (!Array.isArray(data.ads_basket)) {
      data.ads_basket = [];
    }

    const index = data.ads_basket.findIndex((item) => item.id === ad.id);
    if (index === -1) {
      const newAd = { ...ad, count: 1 };
      data.ads_basket.push(newAd);
    }
    else {
      data.ads_basket[index].count = data.ads_basket[index].count + 1;
    }

    setAdsBasket([...data.ads_basket]);
    localStorage.setItem(storageName, JSON.stringify({
      ads_basket: data.ads_basket
    }))


  }, [])

  const removeProduct = useCallback((ad) => {
    const data = JSON.parse(localStorage.getItem(storageName));
    const index = data.ads_basket.findIndex((item) => item.id === ad.id);
    if (index !== -1) {
      data.ads_basket.splice(index, 1);
    }
    setAdsBasket(data.ads_basket);
    localStorage.setItem(storageName, JSON.stringify({
      ads_basket: data.ads_basket
    }));
  }, []);

  const addCount = useCallback((ad) => {
    const data = JSON.parse(localStorage.getItem(storageName));
    const index = data.ads_basket.findIndex((item) => item.id === ad.id);
    if (index !== -1) {
      data.ads_basket[index].count = data.ads_basket[index].count + 1;
    }
    setAdsBasket(data.ads_basket);
    localStorage.setItem(storageName, JSON.stringify({
      ads_basket: data.ads_basket
    }));
  }, []);

  const minusCount = useCallback((ad) => {
    const data = JSON.parse(localStorage.getItem(storageName));
    const index = data.ads_basket.findIndex((item) => item.id === ad.id);
    if (index !== -1) {
      data.ads_basket[index].count = data.ads_basket[index].count - 1;
    }
    if (data.ads_basket[index].count !== 0) {
      setAdsBasket(data.ads_basket);
      localStorage.setItem(storageName, JSON.stringify({
        ads_basket: data.ads_basket
      }));
    }
    else{
      removeProduct(data.ads_basket[index]);
    }
  }, []);

  const clearBasket = useCallback(() => {
    setAdsBasket([]);
    localStorage.removeItem(storageName)
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName))

    if (data && data.ads_basket) {

      setAdsBasket(data.ads_basket)
    }

  }, [addProduct])


  return { ads_basket, addProduct, removeProduct, addCount, minusCount, clearBasket }
}