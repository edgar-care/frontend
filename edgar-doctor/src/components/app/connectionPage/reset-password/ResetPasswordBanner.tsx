import { VStack, Box } from '@chakra-ui/react';

const ResetPasswordBanner = (): JSX.Element => (
	<VStack w="128px" spacing="16px" align="start">
		<Box w="100%" h="100%" bg="radial-gradient(circle at center, #A0C9F0 0, #335FC2 100%);" borderRadius="32px" />
	</VStack>
);

export default ResetPasswordBanner;
