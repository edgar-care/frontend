import { VStack } from '@chakra-ui/react';

import BasicPage from 'components/pages/BasicPage';
import NavBar from 'components/landingPage/NavBar';

const Team = (): JSX.Element => (
	<BasicPage>
		<VStack w="100%">
			<NavBar />
		</VStack>
	</BasicPage>
);

export default Team;
