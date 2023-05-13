import { type MessageResponse } from 'types/MessageResponse';

const subscribeToNewsletter = async (email: string): Promise<MessageResponse> => {
	try {
		if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))
			return { title: 'Adresse mail invalide', status: 'error' };
		// CALL BACK
		return { title: 'Abonnement à la newsletter réussi', status: 'success' };
	} catch (error) {
		console.error(error);
		return { title: 'Une erreur est survenue, merci de réessayer', status: 'error' };
	}
};

export default subscribeToNewsletter;
