import { VStack, Text } from '@chakra-ui/react';
import NavBar from 'components/pages/patient/NavBar';

const Appointments = (): JSX.Element => (
	<VStack>
		<NavBar />
		<Text>appointment</Text>
	</VStack>
);

export default Appointments;
