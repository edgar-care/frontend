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
					symptoms: [],
					treatments: [
						{
							start_date: 1625596400,
							end_date: 1625596400,
							medicines: [
								{
									medicine_id: '66116e725ee223d8f1b39bfd',
									comment: 'Take 1 pill',
									period: [
										{
											quantity: 1,
											frequency: 2,
											frequency_ratio: 3,
											frequency_unit: 'JOUR',
											period_length: 4,
											period_unit: 'SEMAINE',
										},
									],
								},
							],
						},
						{
							start_date: 1625596400,
							end_date: 1625596400,
							medicines: [
								{
									medicine_id: '66116f1a5ee223d8f1b39c00',
									comment: 'Take 1 pill',
									period: [
										{
											quantity: 1,
											frequency: 2,
											frequency_ratio: 3,
											frequency_unit: 'JOUR',
											period_length: 4,
											period_unit: 'SEMAINE',
										},
									],
								},
							],
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
