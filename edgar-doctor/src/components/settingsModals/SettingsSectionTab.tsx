import type { Dispatch, SetStateAction } from 'react';
import { HStack, Icon, Text } from '@chakra-ui/react';

import SettingsSectionTabBadge from 'components/settingsModals/SettingsSectionTabBadge';

import RightChevronIcon from 'assets/icons/Chevron/RightChevronIcon';

import type { SettingsSectionTabType } from 'types/navigation/SettingsSectionTabType';

const SettingsSectionTab = ({
	tab,
	id,
	setSelectedPageStack,
}: {
	tab: SettingsSectionTabType;
	id?: string;
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
			id={`${id}-tab`}
			onClick={() => {
				if (tab.pageIndex) setSelectedPageStack((prev) => [...prev, tab.pageIndex!]);
			}}
		>
			<HStack spacing="16px">
				{tab.icon && (
					<Icon
						as={tab.icon}
						w="16px"
						h="auto"
						color={tab.danger ? 'red.600' : 'black'}
						id={`${id}-tabIcon-img`}
					/>
				)}
				<Text color={tab.danger ? 'red.600' : 'black'} id={`${id}-tabName-text`}>
					{tab.name}
				</Text>
			</HStack>
			{(tab.placeholder || tab.hasChevron) && (
				<HStack spacing="16px" transition="all .3s ease-out" _groupHover={{ gap: '24px' }}>
					{tab.placeholder && (
						<Text size="sm" color="gray.500" id={`${id}-tabPlaceholder-text`}>
							{tab.placeholder}
						</Text>
					)}
					{tab.badge && tab.badgeStyle && (
						<SettingsSectionTabBadge label={tab.badge} style={tab.badgeStyle} id={id} />
					)}
					{tab.hasChevron && <Icon as={RightChevronIcon} w="8px" h="auto" id={`${id}-tabChevron-img`} />}
				</HStack>
			)}
		</HStack>
	</HStack>
);

export default SettingsSectionTab;
