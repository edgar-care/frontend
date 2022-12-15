import { HStack, Text } from '@chakra-ui/react';

import { PatientInfos } from 'types/PatientInfos';

import colors from 'theme/foundations/colors';

// TODO: update display content with real data
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TreatmentCard = ({ infos }: { infos: PatientInfos | undefined }): JSX.Element => (
	<HStack border={`2px solid ${colors.blue[200]}`} p="8px 16px" spacing="32px" borderRadius="8px" bg="white">
		<HStack>
			<Text size="boldLg">Traitements en cours:</Text>
			<Text size="lg">Aucuns traitements en cours</Text>
		</HStack>
	</HStack>
);

export default TreatmentCard;
