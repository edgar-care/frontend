import { Dispatch, SetStateAction } from 'react';
import { FormControl, FormErrorMessage, Input, Stack, Text } from '@chakra-ui/react';

const UpdateModalNumberForm = ({
	label,
	placeholder,
	value,
	setValue,
	error,
	setError,
	isRequired,
}: {
	label: string;
	placeholder: string;
	value: number;
	setValue: Dispatch<SetStateAction<number>>;
	error: boolean;
	setError: Dispatch<SetStateAction<boolean>>;
	isRequired: boolean;
}): JSX.Element => (
	<FormControl isRequired={isRequired} isInvalid={error} w="100%">
		<Stack>
			<Text size="boldLg">{label}:</Text>
			<Input
				placeholder={placeholder}
				type="number"
				w="100%"
				h="32px"
				value={value}
				onChange={(e) => {
					setValue(Number(e.target.value));
					setError(false);
				}}
			/>
			{error && <FormErrorMessage>Champ obligatoire</FormErrorMessage>}
		</Stack>
	</FormControl>
);

export default UpdateModalNumberForm;
