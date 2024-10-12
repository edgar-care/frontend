export type RegisterType = {
	email: string;
	password: string;
	name: string;
	firstname: string;
	address: {
		street: string;
		city: string;
		zip_code: string;
		country: string;
	};
};
