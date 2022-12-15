import { HStack, Text } from '@chakra-ui/react';

import { PatientInfos } from 'types/PatientInfos';

import colors from 'theme/foundations/colors';

const NamesCard = ({ infos }: { infos: PatientInfos | undefined }): JSX.Element => (
	<HStack border={`2px solid ${colors.blue[200]}`} p="8px 16px" spacing="32px" borderRadius="8px" bg="white">
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
	</HStack>
);

export default NamesCard;
