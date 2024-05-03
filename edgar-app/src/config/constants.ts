if (!process.env.NEXT_PUBLIC_API_URL) throw new Error('NEXT_PUBLIC_API_URL env variable must be set');
if (!process.env.NEXT_PUBLIC_LANDING_URL) throw new Error('NEXT_PUBLIC_LANDING_URL env variable must be set');

if (!process.env.NEXT_PUBLIC_VAPIDPUBLICKEY) throw new Error('NEXT_PUBLIC_VAPIDPUBLICKEY env variable must be set');

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const VAPIDPUBLICKEY = process.env.NEXT_PUBLIC_VAPIDPUBLICKEY;
