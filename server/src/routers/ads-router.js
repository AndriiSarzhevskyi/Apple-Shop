import express from 'express';
import { getAdsController } from '../controlers/get-all-ads-controller.js';
import { getTopAdsController } from '../controlers/get-top-rating-ads-controller.js';
import { getFilterAdsController } from '../controlers/get-filter-ads-controller.js';
import { getAdByIdController } from '../controlers/get-ad-by-id-controller.js';
import pkg from 'body-parser';

const { json, urlencoded } = pkg;
export const adsRouter = express();
adsRouter.use(json());
adsRouter.use(urlencoded({ extended: true }));
adsRouter.get(
    '/getads',
    async (req, res) => {
        try {
            const ads = await getAdsController();
            res.status(201).json({ message: "Ads succesfully received", ads: ads });
        }
        catch (e) {
            res.status(500).json({ message: 'Something went wrong, try later' });
        }
    }
)

adsRouter.get(
    '/get-top-ads',
    async (req, res) => {
        try {
            const ads = await getTopAdsController();
            res.status(201).json({ message: "Ads succesfully received", ads: ads });
        }
        catch (e) {
            res.status(500).json({ message: 'Something went wrong, try later' });
        }
    }
)

adsRouter.post(
    '/get-filter-ads',
    async (req, res) => {
        try {
            const { sort, minPrice, maxPrice, category } = req.body;
            let ads;


            if (sort === "new" && minPrice === 0 && maxPrice === 1000000 && category === 'all') {
                ads = await getAdsController();
            }
            else {
                ads = await getFilterAdsController(sort, minPrice, maxPrice, category);
            }
            res.status(201).json({ message: "Ads succesfully received", ads: ads });
        }
        catch (e) {
            res.status(500).json({ message: 'Something went wrong, try later' });
        }
    }
)

adsRouter.post(
    '/get-ad',
    async (req, res) => {
        try {
            const { id } = req.body;
            const ad = await getAdByIdController(parseInt(id));
            
            res.status(201).json({ message: "Ads succesfully received", ad: ad });
        }
        catch (e) {
            res.status(500).json({ message: 'Something went wrong, try later' });
        }
    }
)
