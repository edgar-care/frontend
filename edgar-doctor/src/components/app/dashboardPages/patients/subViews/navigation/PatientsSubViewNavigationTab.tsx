import { Dispatch, SetStateAction } from 'react';
import { HStack, Icon, Text } from '@chakra-ui/react';

import { type NavbarTabType } from 'types/navigation/NavbarType';

const PatientsSubViewNavigationTab = ({
	tab,
	navigationPath,
	setNavigationPath,
}: {
	tab: NavbarTabType;
	navigationPath: string;
	setNavigationPath: Dispatch<SetStateAction<string>>;
}): JSX.Element => (
	<HStack
		w="100%"
		spacing="12px"
		p="4px 8px"
		borderRadius="8px"
		cursor="pointer"
		onClick={() => setNavigationPath(tab.path)}
		role="group"
		bg={navigationPath === tab.path ? 'blue.950' : 'white'}
		transition="all .3s ease-out"
		_hover={{
			bg: 'blue.700',
		}}
	>
		<Icon
			as={tab.icon}
			w="16px"
			color={navigationPath === tab.path ? 'white' : 'blue.950'}
			transition="all .3s ease-out"
			_groupHover={{
				color: 'white',
			}}
		/>
		<Text
			color={navigationPath === tab.path ? 'white' : 'blue.950'}
			transition="all .3s ease-out"
			_groupHover={{
				color: 'white',
			}}
		>
			{tab.name}
		</Text>
	</HStack>
);
export default PatientsSubViewNavigationTab;
