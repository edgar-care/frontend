import { Box, Text, VStack } from '@chakra-ui/react';

const ProductMilestonesCard = ({
	variant,
	label,
	id,
}: {
	variant: 'blue' | 'green' | 'empty';
	label: string;
	id: string;
}): JSX.Element => (
	<>
		{variant === 'empty' ? (
			<Box
				as="span"
				p="16px 32px"
				borderColor="green.400"
				borderWidth="1px 0px"
				borderStyle="dashed"
				w={{ base: '100%', smd: '300px', lg: '360px' }}
				h="68px"
				borderRadius="12px"
			/>
		) : (
			<VStack
				p="16px 32px"
				bg={variant === 'blue' ? 'blue.700' : 'green.600'}
				w={{ base: '100%', smd: '300px', lg: '360px' }}
				borderRadius="16px"
			>
				<Text
					id={`edgar-productMilestones-${id}-text`}
					color="white"
					size={{ base: 'boldLg', lg: 'boldXl' }}
					textAlign="center"
				>
					{label}
				</Text>
			</VStack>
		)}
	</>
);

export default ProductMilestonesCard;
