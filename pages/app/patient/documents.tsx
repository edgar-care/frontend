import { VStack, Text } from '@chakra-ui/react';
import NavBar from 'components/pages/patient/NavBar';

const Documents = (): JSX.Element => (
	<VStack>
		<NavBar />
		<Text>Documents</Text>
	</VStack>
);

export default Documents;
