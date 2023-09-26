import { getTopRatedAds } from "../db/get-top-rating-ads.js";

export const getTopAdsController = async () => {
    try {
        const data = await getTopRatedAds();
        return data;
    } catch (error) {
        console.error('Error in getTopAdsController:', error);
        return "Error";
    }
}