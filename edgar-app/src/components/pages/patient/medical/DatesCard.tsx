import { HStack, Stack, Text } from '@chakra-ui/react';

import { PatientInfos } from 'types/PatientInfos';

import colors from 'theme/foundations/colors';

// TODO: create a component for the card
// TODO: update display content with real data
const DatesCard = ({ infos }: { infos: PatientInfos | undefined }): JSX.Element => (
	<Stack
		direction={{ base: 'column', lg: 'row' }}
		border={`2px solid ${colors.blue[200]}`}
		p="8px 16px"
		spacing={{ base: '8px', lg: '32px' }}
		borderRadius="8px"
		bg="white"
	>
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
	</Stack>
);

export default DatesCard;
