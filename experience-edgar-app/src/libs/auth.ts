import basicFetch from 'utils/basicFetch';

import type { MessageResponse } from 'types/MessageResponse';
import type { Login2FAResponse } from 'types/login-2fa/Login2FAResponse';

class Auth {
	public async login(email: string, password: string): Promise<MessageResponse | Login2FAResponse> {
		try {
			if (!email || !password) return { title: 'Veuillez remplir tous les champs', status: 'error' };
			const auth = await basicFetch('auth/p/login', 'POST', JSON.stringify({ email, password }));

			const data = await auth.json();
			if (auth.status !== 200) return { title: data.message, status: 'error' };

			if (data.token) {
				localStorage.setItem('token', data.token);
				return { title: 'Connexion réussie', status: 'success' };
			}
			if (data.Methods) return { methods: data.Methods, deviceInfos: data.DeviceInfo };

			return { title: 'Echec de la connexion, veuillez réessayer', status: 'error' };
		} catch (error) {
			console.error(error);
			return { title: 'Echec de la connexion, veuillez réessayer', status: 'error' };
		}
	}

	public async signup(email: string, password: string): Promise<MessageResponse> {
		try {
			if (!email || !password) return { title: 'Veuillez remplir tous les champs', status: 'error' };
			const auth = await basicFetch('auth/p/register', 'POST', JSON.stringify({ email, password }));

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
			const auth = await basicFetch('simulation/logout', 'GET');

			if (auth.status === 200) return { title: 'Déconnexion réussie', status: 'success' };

			const data = await auth.json();
			return { title: data.message, status: 'error' };
		} catch (error) {
			console.error(error);
			return { title: 'Echec de la déconnexion', status: 'error' };
		}
	}

	public checkToken(): MessageResponse {
		try {
			if (this.getToken()) return { title: 'Token is valid', status: 'success' };
			return { title: 'Token is invalid', status: 'error' };
		} catch (error) {
			console.error(error);
			return { title: 'Connexion échouée, veuillez vous reconnecter', status: 'error' };
		}
	}

	public getToken(): string | null {
		if (typeof window !== 'undefined') return localStorage.getItem('token');
		return null;
	}

	public getId(): string {
		try {
			const token = this.getToken();
			if (!token) return '';

			const payload: { id: string } = JSON.parse(atob(token.split('.')[1]));
			return payload.id;
		} catch (error) {
			return '';
		}
	}

	public getEmail(): string {
		try {
			const token = this.getToken();
			if (!token) return '';

			const payload: { patient: string } = JSON.parse(atob(token.split('.')[1]));
			return payload.patient;
		} catch (error) {
			return '';
		}
	}
}

export default Auth;
