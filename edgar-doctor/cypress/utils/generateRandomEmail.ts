const generateRandomEmail = (): string => {
	const random = Math.random().toString(36).substring(7);
	return `${random}@test.edgar-sante.fr`;
};

export default generateRandomEmail;
