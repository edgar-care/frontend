export interface MissingPasswordDTO {
	email: string;
}

export interface ResetPasswordDTO {
	password: string;
	uuid: string;
}
