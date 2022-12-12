import { VStack } from '@chakra-ui/react';

import Footer from 'components/Footer';

const SimulationPage = ({ children }: { children: JSX.Element }): JSX.Element => (
	<VStack minH="100vh" p="128px">
		{children}
		<Footer />
	</VStack>
);

export default SimulationPage;
