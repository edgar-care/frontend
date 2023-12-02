import { Dispatch, SetStateAction, useState } from 'react';

const useCustomState = <Type = undefined>(
	defaultValue: Type,
): {
	value: Type;
	setValue: Dispatch<SetStateAction<Type>>;
	error: boolean;
	setError: Dispatch<SetStateAction<boolean>>;
} => {
	const [value, setValue] = useState<Type>(defaultValue);
	const [error, setError] = useState(false);

	return { value, setValue, error, setError };
};

export default useCustomState;
