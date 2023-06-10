import { AIRTABLE_KEY } from 'config/constants';

import type { MessageResponse } from 'types/MessageResponse';

import emailValidityChecker from './emailValidityChecker';

const sendContactForm = async (email: string, name: string, message: string): Promise<MessageResponse> => {
	try {
		if (!emailValidityChecker(email)) return { title: 'Adresse mail invalide', status: 'error' };
		if (!name) return { title: 'Merci de renseigner votre nom', status: 'error' };
		if (!message) return { title: 'Merci de renseigner votre message', status: 'error' };

		const res = await fetch('https://api.airtable.com/v0/apppNB1HHznqlQND3/tblYv0iZL8XQLXwGH', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${AIRTABLE_KEY}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				records: [
					{
						fields: {
							Email: email,
							Name: name,
							Message: message,
							Date: new Date().toISOString(),
						},
					},
				],
			}),
		});
		if (res.status !== 200) return { title: 'Une erreur est survenue, merci de réessayer', status: 'error' };
		return { title: 'Message envoyé', status: 'success' };
	} catch (error) {
		console.error(error);
		return { title: 'Une erreur est survenue, merci de réessayer', status: 'error' };
	}
};

export default sendContactForm;
