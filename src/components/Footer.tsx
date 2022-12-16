import { Box, Divider, Image, VStack } from '@chakra-ui/react';

const Footer = (): JSX.Element => (
	<Box as="footer" w="100vw" position="fixed" zIndex="10" bottom="0" bg="white">
		<Divider />
		<VStack py="16px">
			<Image src="/assets/edgar.care-logo.svg" alt="edgar.care-footer" w="150px" h="auto" />
		</VStack>
	</Box>
);

export default Footer;
