import { HStack, Text } from '@chakra-ui/react';

import { PatientInfos } from 'types/PatientInfos';

import colors from 'theme/foundations/colors';

// TODO: update display content with real data
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DiseasesCard = ({ infos }: { infos: PatientInfos | undefined }): JSX.Element => (
	<HStack border={`2px solid ${colors.blue[200]}`} p="8px 16px" spacing="32px" borderRadius="8px" bg="white">
		<HStack>
			<Text size="boldLg">Maladies:</Text>
			<Text size="lg">Aucune maladie renseignée</Text>
		</HStack>
	</HStack>
);

export default DiseasesCard;
