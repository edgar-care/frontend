import crypto from 'crypto';

import { SECRET_ENCRYPT_KEY } from 'config/constants';

export type Encrypted = {
	iv: string;
	content: string;
};

export const encrypt = (text: string): Encrypted => {
	const iv = crypto.randomBytes(16);
	const cipher = crypto.createCipheriv('aes-256-ctr', SECRET_ENCRYPT_KEY, iv);
	const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

	return {
		iv: iv.toString('hex'),
		content: encrypted.toString('hex'),
	};
};

export const decrypt = (hash: Encrypted): string => {
	const decipher = crypto.createDecipheriv('aes-256-ctr', SECRET_ENCRYPT_KEY, Buffer.from(hash.iv, 'hex'));
	const decrypted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);

	return decrypted.toString();
};
