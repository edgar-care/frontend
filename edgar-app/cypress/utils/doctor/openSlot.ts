const openSlot = async (accountAuthToken: string): Promise<string> => {
	const now = new Date();

	const response = await fetch(`${Cypress.env('apiUrl')}/doctor/slot`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': `${Cypress.env('apiUrl')}`,
			'access-control-allow-credentials': 'true',
			Authorization: `Bearer ${accountAuthToken}`,
		},
		body: JSON.stringify({
			start_date: new Date().setHours(now.getHours() + 1, 0, 0, 0) / 1000,
			end_date: new Date().setHours(now.getHours() + 1, 30, 0, 0) / 1000,
		}),
	});

	if (response.status !== 201) throw new Error('Unable to create medical info');

	const data: { rdv: { id: string } } = await response.json();
	return data.rdv.id;
};

export default openSlot;
