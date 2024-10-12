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
		zip_code: string;
		country: string;
	};
}
