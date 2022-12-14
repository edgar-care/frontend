import { VStack, Text } from '@chakra-ui/react';
import NavBar from 'components/pages/patient/NavBar';

const Home = (): JSX.Element => (
	<VStack>
		<NavBar />
		<Text>Home</Text>
	</VStack>
);

export default Home;
