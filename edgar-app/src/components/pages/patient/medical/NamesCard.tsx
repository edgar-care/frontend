import { HStack, Stack, Text } from '@chakra-ui/react';

import { PatientInfos } from 'types/PatientInfos';

import colors from 'theme/foundations/colors';

const NamesCard = ({ infos }: { infos: PatientInfos | undefined }): JSX.Element => (
	<Stack
		direction={{ base: 'column', md: 'row' }}
		border={`2px solid ${colors.blue[200]}`}
		p="8px 16px"
		spacing={{ base: '8px', md: '32px' }}
		borderRadius="8px"
		bg="white"
	>
		<HStack>
			<Text size="boldLg">Prénom:</Text>
			<Text size="lg">{infos?.name}</Text>
		</HStack>
		<HStack>
			<Text size="boldLg">Nom:</Text>
			<Text size="lg">{infos?.last_name}</Text>
		</HStack>
		<HStack>
			<Text size="boldLg">Nom de naissance:</Text>
			<Text size="lg">{infos?.name}</Text>
		</HStack>
	</Stack>
);

export default NamesCard;
