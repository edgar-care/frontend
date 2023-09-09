import { HStack, Icon, Text } from '@chakra-ui/react';

import { type ProfileTabType } from 'types/navigation/ProfileType';

const ProfileTab = ({ tab }: { tab: ProfileTabType }): JSX.Element => (
	<HStack
		p="8px 16px"
		spacing="12px"
		w="100%"
		borderRadius="12px"
		transition="all .3s ease-out"
		_hover={{
			background: 'blue.100',
		}}
		onClick={tab.action}
	>
		<Icon as={tab.icon} color="blue.900" w="14px" />
		<Text color="blue.900" size="md">
			{tab.name}
		</Text>
	</HStack>
);

export default ProfileTab;
