import { Image, VStack } from '@chakra-ui/react';

const Footer = (): JSX.Element => (
	<VStack w="100vw" position="fixed" zIndex="10" bottom="0" py="32px">
		<Image src="/assets/edgar.care-logo.svg" alt="edgar.care-footer" w={200} h="auto" />
	</VStack>
);

export default Footer;
