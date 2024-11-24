if (!process.env.NEXT_PUBLIC_API_URL) throw new Error('NEXT_PUBLIC_API_URL env variable must be set');
if (!process.env.NEXT_PUBLIC_WS_URL) throw new Error('NEXT_PUBLIC_WS_URL env variable must be set');

if (!process.env.NEXT_PUBLIC_VAPIDPUBLICKEY) throw new Error('NEXT_PUBLIC_VAPIDPUBLICKEY env variable must be set');

if (!process.env.NEXT_PUBLIC_SECRET_ENCRYPT_KEY)
	throw new Error('NEXT_PUBLIC_SECRET_ENCRYPT_KEY env variable must be set');

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const WS_URL = process.env.NEXT_PUBLIC_WS_URL;

export const VAPIDPUBLICKEY = process.env.NEXT_PUBLIC_VAPIDPUBLICKEY;

export const SECRET_ENCRYPT_KEY = process.env.NEXT_PUBLIC_SECRET_ENCRYPT_KEY;
