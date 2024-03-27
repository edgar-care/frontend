export type DoctorType = {
	id: string;
	email: string;
	name: string;
	firstname: string;
	address: {
		street: string;
		city: string;
		zipCode: string;
		country: string;
	};
};
