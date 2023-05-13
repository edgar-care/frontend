import { Box, Button, HStack, Text, useBreakpointValue, VStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';

const CatchPhraseSection = (): JSX.Element => {
	const imageDisplayed = useBreakpointValue({ base: false, lg: true });

	return (
		<VStack w="100%" spacing="64px" align="start">
			<HStack w="100%" spacing="64px">
				<VStack align="start" w="100%" spacing="32px">
					<Text size={{ base: '5xl', lg: '6xl', '2xl': '7xl' }} color="white">
						Gagne du temps avec
						<Box as="br" /> l'assistant virtuel du pré-diagnostic.
					</Text>
					<VStack align="start" maxW="900px" spacing="0px">
						<Text size={{ base: 'xl', lg: '2xl' }} color="white">
							Marre d'attendre pour avoir un rendez-vous chez le médecin généraliste ?
						</Text>
						<Text size={{ base: 'xl', lg: '2xl' }} color="white">
							Un Français attend en moyenne 6 jours avant d'avoir un rendez-vous chez un médecin
							généraliste.
						</Text>
					</VStack>
				</VStack>
				{imageDisplayed && (
					<Image
						src="/assets/Edgars/edgar-high-five.svg"
						alt="edgar-high-five-image"
						height={250}
						width={233}
					/>
				)}
			</HStack>
			<Button size={{ base: 'customLg', xl: '2xl' }} variant="primaryBordered">
				Trouvez votre rendez-vous <Box as="br" /> dès maintenant
			</Button>
		</VStack>
	);
};

export default CatchPhraseSection;
