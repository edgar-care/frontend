import { Text } from '@chakra-ui/react';

const SelectHealthIssueMedicineInputCard = ({
	children,
	onClick,
}: {
	children: JSX.Element;
	onClick: () => void;
}): JSX.Element => (
	<Text onClick={onClick} cursor="pointer" _hover={{ bg: 'blue.100' }} w="100%" p="4px 8px" borderRadius="8px">
		{children}
	</Text>
);

export default SelectHealthIssueMedicineInputCard;
