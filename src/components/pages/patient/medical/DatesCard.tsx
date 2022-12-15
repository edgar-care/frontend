import { HStack, Text } from '@chakra-ui/react';

import { PatientInfos } from 'types/PatientInfos';

import colors from 'theme/foundations/colors';

// TODO: create a component for the card
// TODO: update display content with real data
const DatesCard = ({ infos }: { infos: PatientInfos | undefined }): JSX.Element => (
	<HStack border={`2px solid ${colors.blue[200]}`} p="8px 16px" spacing="32px" borderRadius="8px" bg="white">
		<HStack>
			<Text size="boldLg">Date de naissance:</Text>
			<Text size="lg">01/01/2000</Text>
		</HStack>
		<HStack>
			<Text size="boldLg">Age:</Text>
			<Text size="lg">{infos?.age}</Text>
		</HStack>
		<HStack>
			<Text size="boldLg">Lieu de naissance:</Text>
			<Text size="lg">Lyon</Text>
		</HStack>
	</HStack>
);

export default DatesCard;
