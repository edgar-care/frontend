export const createAccount = async (): Promise<string> => {
	const random = Math.random().toString(36).substring(7);
	const generatedEmail = `${random}@test.edgar-sante.fr`;

	const response = await fetch(`${Cypress.env('apiUrl')}/auth/p/register`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': `${Cypress.env('apiUrl')}`,
			'access-control-allow-credentials': 'true',
		},
		body: JSON.stringify({
			email: generatedEmail,
			password: Cypress.env('loginTestPassword'),
		}),
	});

	if (response.status !== 200) throw new Error('Unable to create account');

	const content: { token: string } = await response.json();

	return content.token;
};
