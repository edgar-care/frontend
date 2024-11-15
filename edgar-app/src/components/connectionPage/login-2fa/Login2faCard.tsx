import { HStack, Icon, Text } from '@chakra-ui/react';
import { type ComponentWithAs } from '@chakra-ui/system';
import { type IconProps } from '@chakra-ui/icons';

import RightChevronIcon from 'assets/icons/Chevron/RightChevronIcon';

export interface Login2FACardProps {
	title: string;
	icon: ComponentWithAs<'svg', IconProps>;
	onClick: () => void;
}

const Login2faCard = ({ title, icon, onClick }: Login2FACardProps) => (
	<HStack
		w="100%"
		justify="space-between"
		p="8px"
		borderRadius="8px"
		bg="white"
		cursor="pointer"
		_hover={{ bg: 'blue.50' }}
		onClick={onClick}
	>
		<HStack spacing="12px">
			<Icon as={icon} w="16px" h="16px" />
			<Text size="lg">{title}</Text>
		</HStack>
		<Icon as={RightChevronIcon} h="16px" w="auto" />
	</HStack>
);

export default Login2faCard;
