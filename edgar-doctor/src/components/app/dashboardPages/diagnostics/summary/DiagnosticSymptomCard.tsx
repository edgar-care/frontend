import { Text, VStack } from '@chakra-ui/react';

const DiagnosticSymptomCard = ({ name }: { name: string }): JSX.Element => (
	<VStack p="4px 8px" bg="blue.50" border="1px solid" borderColor="blue.200" borderRadius="4px">
		<Text size="sm">{name}</Text>
	</VStack>
);

export default DiagnosticSymptomCard;
