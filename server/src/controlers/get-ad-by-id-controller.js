import { getAdById } from "../db/get-ad-by-id.js";

export const getAdByIdController = async (id) => {
    try {
        const data = await getAdById(id);
        return data;
      } catch (error) {
        console.error('Error in getAdByIdController:', error);
        return "Error";
      }
}