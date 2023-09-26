import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getFilterAds = async (sort, minPrice, maxPrice, category) => {
    try {
        let orderBy = {};

        if (sort === 'old') {
            orderBy = { created_at: 'asc' };
        } else if (sort === 'new') {
            orderBy = { created_at: 'desc' };
        } else if (sort === 'rating') {
            orderBy = { rating: 'desc' };
        } else if (sort === 'price-asc') {
            orderBy = { price: 'asc' };
        } else if (sort === 'price-desc') {
            orderBy = { price: 'desc' };
        }

        let where = {
            price: {
                gte: minPrice,
                lte: maxPrice,
            },
        };

        if (category !== 'all') {
            where.product_type = category;
        }

        const adsWithPhotos = await prisma.ad.findMany({
            include: {
                Photo: true,
            },
            where,
            orderBy,
        });

        return adsWithPhotos;
    } catch (error) {
        console.error('Error fetching ads with photos:', error);
        return 'Error';
    }
};