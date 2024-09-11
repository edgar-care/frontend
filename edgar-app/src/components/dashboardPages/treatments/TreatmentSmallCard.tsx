import { Text, VStack } from '@chakra-ui/react';

const TreatmentSmallCard = ({
	content,
	variant = 'DEFAULT',
	id,
	onClick,
}: {
	content: string;
	variant: 'DEFAULT' | 'SELECTED';
	id?: string;
	onClick?: () => void;
}): JSX.Element => (
	<VStack
		px="6px"
		borderRadius="4px"
		bg={variant === 'DEFAULT' ? 'grey.300' : 'blue.700'}
		cursor="pointer"
		_hover={{ bg: 'blue.300' }}
		onClick={onClick}
		id={id}
	>
		<Text color="white" userSelect="none">
			{content}
		</Text>
	</VStack>
);

export default TreatmentSmallCard;
