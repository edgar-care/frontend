import { VStack } from '@chakra-ui/react';

const BasicPage = ({ children }: { children: JSX.Element }): JSX.Element => (
	<VStack minH="100vh" px="32px">
		{children}
	</VStack>
);

export default BasicPage;
