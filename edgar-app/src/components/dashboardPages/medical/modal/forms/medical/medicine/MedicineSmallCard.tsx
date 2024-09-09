import { Text, VStack } from '@chakra-ui/react';

const MedicineSmallCard = ({
	content,
	variant = 'DEFAULT',
	id,
	onClick,
}: {
	content: string;
	variant: 'DEFAULT' | 'SELECTED';
	id?: string;
	onClick?: () => void;
}): JSX.Element => {
	const bg = variant === 'DEFAULT' ? 'grey.300' : 'blue.700';

	return (
		<VStack
			px="6px"
			borderRadius="4px"
			bg={bg}
			cursor={onClick ? 'pointer' : 'default'}
			_hover={{ bg: onClick ? 'blue.300' : bg }}
			onClick={onClick}
			id={id}
		>
			<Text color="white" userSelect="none">
				{content}
			</Text>
		</VStack>
	);
};

export default MedicineSmallCard;
