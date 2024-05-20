import { HStack, Icon, Text } from '@chakra-ui/react';
import type { ComponentWithAs } from '@chakra-ui/system';
import type { IconProps } from '@chakra-ui/icons';
import type { IconType } from 'react-icons';

const DiagnosticTitleCard = ({
	title,
	icon,
}: {
	title: string;
	icon: ComponentWithAs<'svg', IconProps> | IconType;
}): JSX.Element => (
	<HStack
		w="100%"
		p="4px 8px"
		border="1px solid"
		borderColor="blue.200"
		borderRadius="4px"
		bg="blue.50"
		justify="center"
	>
		<Icon as={icon} w="16px" h="auto" color="blue.700" />
		<Text size="lg">{title}</Text>
	</HStack>
);

export default DiagnosticTitleCard;
