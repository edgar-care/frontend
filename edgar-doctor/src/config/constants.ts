if (!process.env.NEXT_PUBLIC_API_URL) throw new Error('NEXT_PUBLIC_API_URL env variable must be set');
if (!process.env.NEXT_PUBLIC_LANDING_URL) throw new Error('NEXT_PUBLIC_LANDING_URL env variable must be set');

// eslint-disable-next-line import/prefer-default-export
export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const LANDING_URL = process.env.NEXT_PUBLIC_LANDING_URL;
