import { VStack, Image } from '@chakra-ui/react';
import React from 'react';

type IsType = {
	image: string;
	value: boolean;
	changeSex: () => void;
};

const CheckBox = ({ image, value, changeSex }: IsType) => (
	<VStack onClick={() => changeSex()} borderRadius="16px" bg={value ? 'blue.100' : 'blue.200'} p="12px 32px">
		<Image src={image} w="16px" h="16px" />
	</VStack>
);

export default CheckBox;
