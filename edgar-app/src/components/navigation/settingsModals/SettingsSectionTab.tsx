import type { Dispatch, SetStateAction } from 'react';
import { HStack, Icon, Text } from '@chakra-ui/react';

import SettingsSectionTabBadge from 'components/navigation/settingsModals/SettingsSectionTabBadge';

import RightChevronIcon from 'assets/icons/Chevron/RightChevronIcon';

import type { SettingsSectionTabType } from 'types/navigation/SettingsSectionTabType';

const SettingsSectionTab = ({
	tab,
	setSelectedPageStack,
}: {
	tab: SettingsSectionTabType;
	setSelectedPageStack: Dispatch<SetStateAction<string[]>>;
}): JSX.Element => (
	<HStack w="100%" py="4px">
		<HStack
			w="100%"
			justify="space-between"
			p="8px 16px 8px 8px"
			borderRadius="8px"
			transition="all .3s ease-out"
			cursor={tab.pageIndex ? 'pointer' : 'default'}
			role="group"
			_hover={tab.pageIndex ? { p: '8px', bg: 'blue.100' } : undefined}
			onClick={() => {
				if (tab.pageIndex) setSelectedPageStack((prev) => [...prev, tab.pageIndex!]);
			}}
		>
			<HStack spacing="16px">
				{tab.icon && <Icon as={tab.icon} w="16px" h="auto" color={tab.danger ? 'red.600' : 'black'} />}
				<Text color={tab.danger ? 'red.600' : 'black'}>{tab.name}</Text>
			</HStack>
			{(tab.placeholder || tab.hasChevron) && (
				<HStack spacing="16px" transition="all .3s ease-out" _groupHover={{ gap: '24px' }}>
					{tab.placeholder && (
						<Text size="sm" color="gray.500">
							{tab.placeholder}
						</Text>
					)}
					{tab.badge && tab.badgeStyle && (
						<SettingsSectionTabBadge label={tab.badge} style={tab.badgeStyle} />
					)}
					{tab.hasChevron && <Icon as={RightChevronIcon} w="8px" h="auto" />}
				</HStack>
			)}
		</HStack>
	</HStack>
);

export default SettingsSectionTab;
