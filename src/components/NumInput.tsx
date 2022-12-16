import { Input, InputGroup, InputRightAddon } from '@chakra-ui/react';
import React, { Dispatch, SetStateAction } from 'react';

type NumInputType = {
	placeholder: string;
	children: string;
	setValue: Dispatch<SetStateAction<number>>;
};

const NumInput = ({ placeholder, children, setValue }: NumInputType) => (
	<InputGroup textColor="black" variant="filled" w="100px">
		<Input
			borderRadius="14px"
			type="number"
			fontWeight={600}
			backgroundColor="#DADEF2"
			placeholder={placeholder}
			onChange={(v) => setValue(Number(v.target.value))}
		/>
		<InputRightAddon borderRadius="14px" fontSize="12px" children={children} backgroundColor="#DADEF2" p="8px" />
	</InputGroup>
);

export default NumInput;
