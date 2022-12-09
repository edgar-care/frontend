import { HStack, Text, VStack } from '@chakra-ui/react';
import colors from 'theme/foundations/colors';

type DoctorCardProps = {
	doc: string;
	pos: string;
};

const DoctorCard = ({ doc, pos }: DoctorCardProps) => (
	<VStack backgroundColor="white" border={`2px solid ${colors.blue[100]}`} w="622px" p="8px 16px" borderRadius="8px">
		<HStack justify="space-between" w="100%">
			<Text size="xl">{doc}</Text>
			<Text size="xl">{pos}</Text>
		</HStack>
	</VStack>
);

export default DoctorCard;
