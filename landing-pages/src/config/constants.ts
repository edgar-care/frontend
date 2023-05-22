if (!process.env.NEXT_PUBLIC_APP_URL) throw new Error('NEXT_PUBLIC_APP_URL env variable must be set');
if (!process.env.NEXT_PUBLIC_AIRTABLE_KEY) throw new Error('NEXT_PUBLIC_AIRTABLE_KEY env variable must be set');

// eslint-disable-next-line import/prefer-default-export
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL;
export const AIRTABLE_KEY = process.env.NEXT_PUBLIC_AIRTABLE_KEY;
