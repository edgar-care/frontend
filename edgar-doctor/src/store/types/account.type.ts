export interface MissingPasswordDTO {
	email: string;
}

export interface ResetPasswordDTO {
	password: string;
	uuid: string;
}

export interface RegisterTypeDTO {
	email: string;
	password: string;
	name: string;
	firstname: string;
	address: {
		street: string;
		city: string;
		zipCode: string;
		country: string;
	};
}
