import { getFilterAds } from "../db/get-filter-ads.js";

export const getFilterAdsController = async (sort, minPrice, maxPrice, category) => {
    try {
        const data = await getFilterAds(sort, minPrice, maxPrice, category);

        return data;
    } catch (error) {
        console.error('Error in getFilterAdsController:', error);
        return "Error";
    }
}