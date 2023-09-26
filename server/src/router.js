import express from 'express';
import { adsRouter } from './routers/ads-router.js';

export const router = (app) =>{
    app.use('/api/ads', adsRouter);
}