const setupMedicalInfo = async (accountAuthToken: string): Promise<void> => {
	const response = await fetch(`${Cypress.env('apiUrl')}/dashboard/medical-info`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': `${Cypress.env('apiUrl')}`,
			'access-control-allow-credentials': 'true',
			Authorization: `Bearer ${accountAuthToken}`,
		},
		body: JSON.stringify({
			name: 'Patient',
			firstname: 'Edgar',
			birthdate: 1425596400,
			sex: 'MALE',
			weight: 6870,
			height: 150,
			primary_doctor_id: '65feebafd238ecea17cc0f4b',
			medical_antecedents: [],
		}),
	});

	if (response.status !== 200) throw new Error('Unable to create medical info');
};

export default setupMedicalInfo;
