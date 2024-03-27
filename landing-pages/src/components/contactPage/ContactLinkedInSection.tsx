import { Button, Link, Text, useBreakpointValue, VStack } from '@chakra-ui/react';

import HighlightText from '../HighlightText';

const ContactLinkedInSection = (): JSX.Element => {
	const isTitleMultiLines = useBreakpointValue({ base: true, sm: false });

	return (
		<VStack spacing="32px" w="100%" align="start">
			<Text size={{ base: '5xl', lg: '6xl', '2xl': '7xl' }} id="edgar-contactPage-linkedInTitle-text">
				{isTitleMultiLines ? (
					<>
						edgar sur <HighlightText>les réseaux</HighlightText> <HighlightText>sociaux</HighlightText>
					</>
				) : (
					<>
						edgar sur <HighlightText>les réseaux sociaux</HighlightText>
					</>
				)}
			</Text>
			<Text size={{ base: 'xl', lg: '2xl' }} maxW="650px" id="edgar-contactPage-linkedInSubtitle-text">
				Suivez-nous sur LinkedIn pour être à l'affût des nouveautés de notre assistant numérique.
			</Text>
			<Link href="https://www.linkedin.com/company/edgar-care/" target="_blank">
				<Button size={{ base: 'customLg', xl: 'xl' }} variant="primary" id="edgar-contactPage-linkedIn-button">
					Direction LinkedIn
				</Button>
			</Link>
		</VStack>
	);
};

export default ContactLinkedInSection;
