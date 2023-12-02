const emailValidityChecker = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default emailValidityChecker;
