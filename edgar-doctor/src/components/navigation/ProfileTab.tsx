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
		id={`edgar-dashboardNavbar-profileTab-${tab.name}`}
	>
		<Icon as={tab.icon} color="blue.900" w="14px" id={`edgar-dashboardNavbar-profileTab-${tab.name}-icon`} />
		<Text color="blue.900" size="md" id={`edgar-dashboardNavbar-profileTab-${tab.name}-text`}>
			{tab.name}
		</Text>
		{tab.actionComponent}
	</HStack>
);

export default ProfileTab;
