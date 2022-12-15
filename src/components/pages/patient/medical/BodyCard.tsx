import { HStack, Text } from '@chakra-ui/react';

import { PatientInfos } from 'types/PatientInfos';

import colors from 'theme/foundations/colors';

const BodyCard = ({ infos }: { infos: PatientInfos | undefined }): JSX.Element => (
	<HStack border={`2px solid ${colors.blue[200]}`} p="8px 16px" spacing="32px" borderRadius="8px" bg="white">
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
	</HStack>
);

export default BodyCard;
