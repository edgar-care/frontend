import { Dispatch, SetStateAction, useState } from 'react';

const useStringState = (
	defaultValue?: string,
): {
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
	error: boolean;
	setError: Dispatch<SetStateAction<boolean>>;
} => {
	const [value, setValue] = useState<string>(defaultValue || '');
	const [error, setError] = useState(false);

	return { value, setValue, error, setError };
};

export default useStringState;
