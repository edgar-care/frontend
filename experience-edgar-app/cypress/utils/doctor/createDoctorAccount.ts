import generateRandomEmail from 'utils/generateRandomEmail';

const createDoctorAccount = async (): Promise<{ email: string; authToken: string }> => {
	const generatedEmail = generateRandomEmail();

	const response = await fetch(`${Cypress.env('apiUrl')}/auth/d/register`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': `${Cypress.env('apiUrl')}`,
			'access-control-allow-credentials': 'true',
		},
		body: JSON.stringify({
			email: generatedEmail,
			password: Cypress.env('loginTestPassword'),
			name: 'Medecin',
			firstname: 'Edgar',
			address: {
				street: '25 Rue des médecins',
				zip_code: '69000',
				country: 'France',
				city: 'Lyon',
			},
		}),
	});

	if (response.status !== 200) throw new Error('Unable to create account');

	const content: { token: string } = await response.json();

	return { email: generatedEmail, authToken: content.token };
};

export default createDoctorAccount;
