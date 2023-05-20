import { MessageResponse } from '../types/MessageResponse';

const sendContactForm = async (email: string, name: string, message: string): Promise<MessageResponse> => {
	try {
		if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))
			return { title: 'Adresse mail invalide', status: 'error' };
		if (!name) return { title: 'Merci de renseigner votre nom', status: 'error' };
		if (!message) return { title: 'Merci de renseigner votre message', status: 'error' };
		// CALL BACK
		return { title: 'Abonnement à la newsletter réussi', status: 'success' };
	} catch (error) {
		console.error(error);
		return { title: 'Une erreur est survenue, merci de réessayer', status: 'error' };
	}
};

export default sendContactForm;
