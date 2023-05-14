import { HStack, Icon, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';

const HelpCenter = ({ name, icon }: { name: string; path: string; icon: IconType }): JSX.Element => (
	<HStack bg="transparent" borderRadius="8px" spacing="24px" w="228px" p="6px 12px" transition="all .3s ease-in-out">
		<Icon as={icon} color="black" w="16px" />
		<Text color="black" size="lg">
			{name}
		</Text>
	</HStack>
);

export default HelpCenter;
