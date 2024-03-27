export interface DoctorStoreType {
	id: string;
	email: string;
	name: string;
	firstname: string;
	address: {
		street: string;
		city: string;
		zip_code: string;
		country: string;
	};
}
