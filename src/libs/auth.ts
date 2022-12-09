import { MessageResponse } from '../types/MessageResponse';
import basicFetch from '../utils/basicFetch';

class Auth {
	public async login(email: string, password: string): Promise<MessageResponse> {
		try {
			// TODO: update this call
			if (!email || !password) return { title: 'Veuillez remplir tous les champs', status: 'error' };
			const auth = await basicFetch('auth/login', 'GET', JSON.stringify({ email, password }));

			const data = await auth.json();
			if (auth.status !== 200) return { title: data.message, status: 'error' };

			if (data.token) {
				localStorage.setItem('token', data.token);
				return { title: 'Connexion réussie', status: 'success' };
			}
			return { title: 'Echec de la connexion, veuillez réessayer', status: 'error' };
		} catch (error) {
			console.error(error);
			return { title: 'Echec de la connexion, veuillez réessayer', status: 'error' };
		}
	}

	public async signup(email: string, password: string): Promise<MessageResponse> {
		try {
			if (!email || !password) return { title: 'Veuillez remplir tous les champs', status: 'error' };
			const auth = await basicFetch('auth/signup', 'POST', JSON.stringify({ email, password }));

			const data = await auth.json();
			if (auth.status !== 200) return { title: data.message, status: 'error' };

			if (data.token) {
				localStorage.setItem('token', data.token);
				return { title: 'Inscription réussie', status: 'success' };
			}
			return { title: 'Echec de la connexion, veuillez réessayer', status: 'error' };
		} catch (error) {
			console.error(error);
			return { title: 'Echec de la connexion, veuillez réessayer', status: 'error' };
		}
	}

	public async logout(): Promise<MessageResponse> {
		try {
			// TODO: update this call
			const auth = await basicFetch('auth/logout', 'GET');

			if (auth.status === 200) return { title: 'Déconnexion réussie', status: 'success' };

			const data = await auth.json();
			return { title: data.message, status: 'error' };
		} catch (error) {
			console.error(error);
			return { title: 'Echec de la déconnexion', status: 'error' };
		}
	}

	public async checkToken(): Promise<MessageResponse> {
		try {
			// TODO: update this call
			const auth = await basicFetch('auth/check', 'GET');

			if (auth.status === 200) return { title: 'Token is valid', status: 'success' };

			const data = await auth.json();
			return { title: data.message, status: 'error' };
		} catch (error) {
			console.error(error);
			return { title: 'Connexion échouée, veuillez vous reconnecter', status: 'error' };
		}
	}

	public getToken(): string | null {
		return localStorage.getItem('token');
	}
}

export default Auth;
