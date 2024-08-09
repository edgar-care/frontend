import type { Dispatch, SetStateAction } from 'react';
import { Box, HStack, Text, VStack } from '@chakra-ui/react';

import SettingsSectionTab from 'components/navigation/settingsModals/SettingsSectionTab';

import { type SettingsSectionType } from 'types/navigation/SettingsSectionType';

const SettingsSection = ({
	section,
	id,
	setSelectedPageStack,
}: {
	section: SettingsSectionType;
	id?: string;
	setSelectedPageStack: Dispatch<SetStateAction<string[]>>;
}): JSX.Element => (
	<VStack w="100%" spacing="0px">
		<HStack w="100%">
			<Box as="span" w="32px" h="1px" bg="blue.100" />
			<Text size="sm" whiteSpace="nowrap" id={`edgar-${id}-name-text`}>
				{section.name}
			</Text>
			<Box as="span" w="100%" h="1px" bg="blue.100" />
		</HStack>
		<VStack w="100%" spacing="0px">
			{section.tabs.map((tab, index) => (
				<VStack key={tab.name} w="100%" spacing="0px">
					{index !== 0 && <Box as="span" w="100%" h="1px" bg="blue.100" />}
					<SettingsSectionTab
						tab={tab}
						id={`edgar-${id}-${tab.name.replace(/ /g, '')}`}
						setSelectedPageStack={setSelectedPageStack}
					/>
				</VStack>
			))}
		</VStack>
	</VStack>
);

export default SettingsSection;
