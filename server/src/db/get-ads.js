import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const  getAllAds = async () =>{
    
  try {
    const adsWithPhotos = await prisma.ad.findMany({
      include: {
        Photo: true
      },
      orderBy: {
        created_at: 'desc'
      }
    });

    return adsWithPhotos;
  } catch (error) {
    console.error('Error fetching ads with photos:', error);
    return "Error";
  }
}