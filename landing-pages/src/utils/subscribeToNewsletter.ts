import { AIRTABLE_KEY } from 'config/constants';

import { type MessageResponse } from 'types/MessageResponse';

const subscribeToNewsletter = async (email: string): Promise<MessageResponse> => {
	try {
		if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))
			return { title: 'Adresse mail invalide', status: 'error' };

		const res = await fetch('https://api.airtable.com/v0/apppNB1HHznqlQND3/tblHPux1OBUFVId1S', {
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
							Date: new Date().toISOString(),
						},
					},
				],
			}),
		});
		if (res.status !== 200) return { title: 'Une erreur est survenue, merci de réessayer', status: 'error' };
		return { title: 'Abonnement à la newsletter réussi', status: 'success' };
	} catch (error) {
		console.error(error);
		return { title: 'Une erreur est survenue, merci de réessayer', status: 'error' };
	}
};

export default subscribeToNewsletter;
