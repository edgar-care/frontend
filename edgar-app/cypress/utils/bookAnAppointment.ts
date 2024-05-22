const bookAnAppointment = async (accountAuthToken: string, slotId: string): Promise<void> => {
	const response = await fetch(`${Cypress.env('apiUrl')}/appointments/${slotId}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': `${Cypress.env('apiUrl')}`,
			'access-control-allow-credentials': 'true',
			Authorization: `Bearer ${accountAuthToken}`,
		},
		body: JSON.stringify({
			session_id: 'test',
		}),
	});

	if (response.status !== 201) throw new Error('Unable to create medical info');
};

export default bookAnAppointment;
