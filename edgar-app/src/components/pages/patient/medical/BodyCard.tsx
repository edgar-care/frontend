import { HStack, Stack, Text } from '@chakra-ui/react';

import { PatientInfos } from 'types/PatientInfos';

import colors from 'theme/foundations/colors';

const BodyCard = ({ infos }: { infos: PatientInfos | undefined }): JSX.Element => (
	<Stack
		direction={{ base: 'column', md: 'row' }}
		border={`2px solid ${colors.blue[200]}`}
		p="8px 16px"
		spacing={{ base: '8px', md: '32px' }}
		borderRadius="8px"
		bg="white"
	>
		<HStack>
			<Text size="boldLg">Sexe:</Text>
			<Text size="lg">{infos?.sex === 'M' ? 'Masculin' : 'Féminin'}</Text>
		</HStack>
		<HStack>
			<Text size="boldLg">Poids:</Text>
			<Text size="lg">{infos?.weight} kg</Text>
		</HStack>
		<HStack>
			<Text size="boldLg">Taille:</Text>
			<Text size="lg">{infos?.height} cm</Text>
		</HStack>
	</Stack>
);

export default BodyCard;
