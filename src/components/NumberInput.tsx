import { Input, InputGroup, InputRightAddon } from '@chakra-ui/react';
import React from 'react';

type IsType = {
	placeholder: string;
	children: string;
	changeValue: (v: string) => void;
};

const NumInput = ({ placeholder, children, changeValue }: IsType) => (
	<InputGroup textColor="black" variant="filled" w="96px">
		<Input
			onChange={(v) => changeValue(v.target.value)}
			borderRadius="14px"
			type="number"
			fontWeight={600}
			placeholder={placeholder}
			backgroundColor="#DADEF2"
		/>
		<InputRightAddon borderRadius="14px" fontSize="12px" children={children} backgroundColor="#DADEF2" p="8px" />
	</InputGroup>
);

export default NumInput;
