import { Center, Img, VStack } from '@chakra-ui/react';

import GridLoader from 'components/loader/GridLoader';

import colors from 'theme/foundations/colors';

const LoadingScreen = (): JSX.Element => (
	<Center w="100%" h="100vh">
		<VStack p={{ base: '32px', sm: '64px' }} w="100%" bg="blue.100" spacing="64px">
			<Img src="/assets/logo/colored-edgar-logo.svg" w="400px" />
			<GridLoader size="64" speed="1.5" color={colors.blue[900]} />
		</VStack>
	</Center>
);

export default LoadingScreen;
