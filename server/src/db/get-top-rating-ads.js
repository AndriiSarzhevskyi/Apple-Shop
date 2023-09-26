import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getTopRatedAds = async () => {
  try {
    const topRatedAds = await prisma.ad.findMany({
      take: 4, 
      orderBy: {
        rating: 'desc', 
      },
      include: {
        Photo: true,
      },
    });

    return topRatedAds;
  } catch (error) {
    console.error('Error fetching top rated ads:', error);
    throw error;
  }
};






