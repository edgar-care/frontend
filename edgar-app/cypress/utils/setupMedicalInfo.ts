const setupMedicalInfo = async (accountAuthToken: string): Promise<void> => {
	const doctor = await fetch(`${Cypress.env('apiUrl')}/doctors`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': `${Cypress.env('apiUrl')}`,
			'access-control-allow-credentials': 'true',
			Authorization: `Bearer ${accountAuthToken}`,
		},
	});
	const doctorJson = await doctor.json();

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
			primary_doctor_id: doctorJson.Doctors[0].id,
			medical_antecedents: [
				{
					name: 'Allergie',
					treatments: [
						{
							day: ['WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY', 'TUESDAY', 'MONDAY'],
							medicine_id: '66116e725ee223d8f1b39bfd',
							period: ['NOON'],
							quantity: 2,
						},
						{
							day: ['MONDAY', 'FRIDAY'],
							medicine_id: '66116f1a5ee223d8f1b39c00',
							period: ['MORNING', 'NOON', 'EVENING', 'NIGHT'],
							quantity: 1,
						},
					],
					still_relevant: true,
				},
			],
			family_members_med_info_id: [],
		}),
	});

	if (response.status !== 201) throw new Error('Unable to create medical info');
};

export default setupMedicalInfo;
