import { Text, VStack } from '@chakra-ui/react';

import type { SettingsSectionTabBadgeStyleType } from 'types/navigation/SettingsSectionTabBadgeStyleType';

const SettingsSectionTabBadge = ({
	label,
	style,
	id,
}: {
	label: string;
	style: SettingsSectionTabBadgeStyleType;
	id?: string;
}): JSX.Element => (
	<VStack p="2px 8px" borderRadius="8px" bg={style === 'green' ? 'green.100' : 'red.100'}>
		<Text size="sm" fontSize="10px" color={style === 'green' ? 'green.600' : 'red.600'} id={`${id}-tabBadge-text`}>
			{label}
		</Text>
	</VStack>
);

export default SettingsSectionTabBadge;
