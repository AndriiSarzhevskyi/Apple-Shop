import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAdById = async (id) => {
    try {
        const adWithPhotos = await prisma.ad.findFirst({
            include: {
                Photo: true,
            },
            where: {
                id: parseInt(id)
            }
        });
        
        return adWithPhotos;
    } catch (error) {
        console.error('Error fetching ads with photos:', error);
        return 'Error';
    }
};