export interface MissingPasswordDTO {
	email: string;
}

export interface ResetPasswordDTO {
	password: string;
	uuid: string;
}

export interface UpdatePasswordDTO {
	oldPassword: string;
	newPassword: string;
}
