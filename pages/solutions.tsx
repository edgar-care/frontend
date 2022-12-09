import { Box, Text, VStack } from '@chakra-ui/react';

import NavBar from 'components/landingPage/NavBar';
import BasicPage from 'components/pages/BasicPage';
import colors from '../src/theme/foundations/colors';

const Solutions = (): JSX.Element => (
	<BasicPage>
		<VStack w="100%">
			<NavBar />
			<VStack py="192px" w="50%" textAlign="center" spacing="128px">
				<VStack>
					<Text size="3xl">Notre solution:</Text>
					<Text size="boldXl" w="750px">
						Une plateforme permettant d'échanger avec notre{' '}
						<Box
							as="span"
							bg={`linear-gradient(90deg, ${colors.blue[500]} 0%, ${colors.pink[500]} 100%)`}
							bgClip="text"
							fontWeight="800"
						>
							assistant numérique Edgar
						</Box>{' '}
						avant votre prise de rendez-vous.
					</Text>
				</VStack>
				<VStack>
					<Text size="3xl">Dans quel but ?</Text>
					<Text size="boldXl" w="700px">
						Afin d'éviter d'aller chez le médecin pour une{' '}
						<Box
							as="span"
							bg={`linear-gradient(90deg, ${colors.blue[500]} 0%, ${colors.pink[500]} 100%)`}
							bgClip="text"
							fontWeight="800"
						>
							consultation inutile
						</Box>
						, l'assistant fournira à celui-ci un{' '}
						<Box
							as="span"
							bg={`linear-gradient(90deg, ${colors.blue[500]} 0%, ${colors.pink[500]} 100%)`}
							bgClip="text"
							fontWeight="800"
						>
							compte-rendu
						</Box>{' '}
						de l'échange afin de déterminer si la prise de votre rendez-vous est{' '}
						<Box
							as="span"
							bg={`linear-gradient(90deg, ${colors.blue[500]} 0%, ${colors.pink[500]} 100%)`}
							bgClip="text"
							fontWeight="800"
						>
							nécessaire
						</Box>
						.
					</Text>
					<Text size="boldXl" fontWeight="900">
						<Box
							as="span"
							bg={`linear-gradient(90deg, ${colors.blue[500]} 0%, ${colors.pink[500]} 100%)`}
							bgClip="text"
						>
							Seul le médecin
						</Box>{' '}
						pourra déterminer si la prise de rendez-vous est nécessaire.
					</Text>
				</VStack>
				<VStack>
					<Text size="boldXl" w="750px">
						En plus de cet échange avec Edgar, vous pourrez retrouver{' '}
						<Box
							as="span"
							bg={`linear-gradient(90deg, ${colors.blue[500]} 0%, ${colors.pink[500]} 100%)`}
							bgClip="text"
							fontWeight="800"
						>
							l'entièreté
						</Box>{' '}
						de vos informations médicales,{' '}
						<Box
							as="span"
							bg={`linear-gradient(90deg, ${colors.blue[500]} 0%, ${colors.pink[500]} 100%)`}
							bgClip="text"
							fontWeight="800"
						>
							facilement
						</Box>{' '}
						et au{' '}
						<Box
							as="span"
							bg={`linear-gradient(90deg, ${colors.blue[500]} 0%, ${colors.pink[500]} 100%)`}
							bgClip="text"
							fontWeight="800"
						>
							même endroit
						</Box>
						.
					</Text>
					<Text size="boldXl" w="750px">
						Parmi ces informations, vous pourrez retrouver, tous vos rendez-vous passés et futurs, ainsi que
						les différents documents fournis par votre médecin.
					</Text>
				</VStack>
				<VStack>
					<Text size="2xl" w="750px">
						Votre médecin vous remerciera d'utiliser{' '}
						<Box
							as="span"
							bg={`linear-gradient(90deg, ${colors.blue[500]} 0%, ${colors.pink[500]} 100%)`}
							bgClip="text"
							fontWeight="800"
						>
							edgar.care
						</Box>
					</Text>
					<Text size="boldXl" w="750px">
						Avec nous il pourra avoir accès à tous vos documents et vos antécédents médicaux, beaucoup plus{' '}
						<Box
							as="span"
							bg={`linear-gradient(90deg, ${colors.blue[500]} 0%, ${colors.pink[500]} 100%)`}
							bgClip="text"
							fontWeight="800"
						>
							facilement
						</Box>{' '}
						et pourra ainsi vous suivre plus{' '}
						<Box
							as="span"
							bg={`linear-gradient(90deg, ${colors.blue[500]} 0%, ${colors.pink[500]} 100%)`}
							bgClip="text"
							fontWeight="800"
						>
							efficacement
						</Box>{' '}
						et plus{' '}
						<Box
							as="span"
							bg={`linear-gradient(90deg, ${colors.blue[500]} 0%, ${colors.pink[500]} 100%)`}
							bgClip="text"
							fontWeight="800"
						>
							rapidement
						</Box>
						.
					</Text>
				</VStack>
			</VStack>
		</VStack>
	</BasicPage>
);

export default Solutions;
