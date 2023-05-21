import { Box, Button, HStack, Link, Text, useBreakpointValue, VStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';

const HowItWorks = (): JSX.Element => {
	const imageDisplayed = useBreakpointValue({ base: false, lg: true });

	return (
		<VStack w="100%" align="start" spacing="64px">
			<VStack w="100%" align="start" spacing="32px">
				<Text
					size={{ base: 'bold2xl', lg: '4xl', '2xl': '5xl' }}
					color="white"
					id="edgar-productPage-productTitle-text"
				>
					Comment ça marche ?
				</Text>
				<HStack w="100%" align="center" justify="space-between" spacing="64px">
					<VStack align="start" w="100%" spacing="24px">
						<Text
							size={{ base: 'lg', lg: '2xl' }}
							color="white"
							maxW="1125px"
							id="edgar-productPage-productDescription1-text"
						>
							Avant de prendre un rendez-vous chez le médecin, vous allez devoir échanger avec Edgar,
							notre assistant numérique. Son rôle, faire en sorte de fournir au médecin toutes les{' '}
							<Box as="span" fontWeight="600" color="green.400">
								informations nécessaires
							</Box>{' '}
							pour qu’il puisse proposer un diagnostic{' '}
							<Box as="span" fontWeight="600" color="green.400">
								fiable
							</Box>{' '}
							et{' '}
							<Box as="span" fontWeight="600" color="green.400">
								rapide
							</Box>
							.
						</Text>
						<Text
							size={{ base: 'lg', lg: '2xl' }}
							color="white"
							maxW="1125px"
							id="edgar-productPage-productDescription2-text"
						>
							Edgar: "Lors de la prise de rendez-vous, je vais échanger avec vous, vous posez plein de
							questions afin de spécifier le plus possible vos symptômes.
						</Text>
						<Text
							size={{ base: 'lg', lg: '2xl' }}
							color="white"
							maxW="1125px"
							id="edgar-productPage-productDescription3-text"
						>
							Cette étape est très{' '}
							<Box as="span" fontWeight="600" color="green.400">
								importante
							</Box>{' '}
							pour le médecin, parce qu’il est très compliqué de déceler la totalité de ses propres
							symptômes, surtout quand on en est pas un. Une fois que j’ai suffisamment d’informations
							pour générer un pré-diagnostic, le médecin pourra alors{' '}
							<Box as="span" fontWeight="600" color="green.400">
								valider ou non la nécessité
							</Box>{' '}
							de votre rendez-vous.
						</Text>
						<Text
							size={{ base: 'lg', lg: '2xl' }}
							color="white"
							maxW="1125px"
							id="edgar-productPage-productDescription4-text"
						>
							Dans le cas où le rendez-vous n’est pas nécessaire, ne vous inquiétez pas, il vous proposera
							quand même une solution pour{' '}
							<Box as="span" fontWeight="600" color="green.400">
								réduire le plus possible
							</Box>{' '}
							vos symptômes et vous soigner. Si votre rendez-vous est nécessaire, le médecin aura accès à
							l’entièreté de mon pré-diagnostic lui permettant de{' '}
							<Box as="span" fontWeight="600" color="green.400">
								gagner un temps considérable
							</Box>{' '}
							lors de votre consultation.
						</Text>
						<Text
							size={{ base: 'lg', lg: '2xl' }}
							color="white"
							maxW="1125px"
							id="edgar-productPage-productDescription5-text"
						>
							Voilà, vous savez maintenant comment je fonctionne."
						</Text>
					</VStack>
					{imageDisplayed && (
						<Image
							src="/assets/Edgars/edgar-presentation.svg"
							alt="edgar-thinking-image"
							width={294}
							height={401}
							id="edgar-productPage-presentationEdgar-img"
						/>
					)}
				</HStack>
			</VStack>
			<Link href="/product#milestones">
				<Button
					size={{ base: 'customLg', xl: '2xl' }}
					variant="primaryBordered"
					id="edgar-productPage-milestone-button"
				>
					Voir nos milestones
				</Button>
			</Link>
		</VStack>
	);
};

export default HowItWorks;
