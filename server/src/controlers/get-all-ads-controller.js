import { getAllAds } from "../db/get-ads.js"

export const getAdsController = async () => {
    try {
      const data = await getAllAds();
      
      return data;
    } catch (error) {
      console.error('Error in getAdsController:', error);
      return "Error";
    }
  }