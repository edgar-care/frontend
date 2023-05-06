import { VStack, Image } from '@chakra-ui/react';
import React from 'react';

type CheckBoxType = {
	image: string;
	value: boolean;
	valueHandler: () => void;
};

const CheckBox = ({ image, value, valueHandler }: CheckBoxType) => (
	<VStack
		onClick={valueHandler}
		borderRadius="16px"
		bg={value ? 'blue.200' : 'blue.100'}
		p="12px 32px"
		cursor="pointer"
	>
		<Image src={image} w="16px" h="16px" />
	</VStack>
);

export default CheckBox;
