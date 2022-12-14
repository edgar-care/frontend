import { VStack, Text } from '@chakra-ui/react';
import NavBar from 'components/pages/patient/NavBar';

const Medical = (): JSX.Element => (
	<VStack>
		<NavBar />
		<Text>Medical</Text>
	</VStack>
);

export default Medical;
