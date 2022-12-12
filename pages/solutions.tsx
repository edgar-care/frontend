import { Button, Text, VStack } from '@chakra-ui/react';

import NavBar from 'components/landingPage/NavBar';
import BasicPage from 'components/pages/BasicPage';
import Link from 'next/link';

import GradientText from 'components/GradientText';

const Solutions = (): JSX.Element => (
	<BasicPage>
		<VStack w="100%">
			<NavBar />
			<VStack py="192px" w="50%" textAlign="center" spacing="128px">
				<VStack>
					<Text size="3xl">Notre solution:</Text>
					<Text size="boldXl" w="750px">
						Une plateforme permettant d'échanger avec notre{' '}
						<GradientText textValue="assistant numérique Edgar" /> avant votre prise de rendez-vous.
					</Text>
				</VStack>
				<VStack>
					<Text size="3xl">Dans quel but ?</Text>
					<Text size="boldXl" w="700px">
						Afin d'éviter d'aller chez le médecin pour une <GradientText textValue="consultation inutile" />
						, l'assistant fournira à celui-ci un <GradientText textValue="compte-rendu" /> de l'échange afin
						de déterminer si la prise de votre rendez-vous est <GradientText textValue="nécessaire" />.
					</Text>
					<Text size="boldXl" fontWeight="900">
						<GradientText textValue="Seul le médecin" /> pourra déterminer si la prise de rendez-vous est
						nécessaire.
					</Text>
				</VStack>
				<VStack>
					<Text size="boldXl" w="750px">
						En plus de cet échange avec Edgar, vous pourrez retrouver{' '}
						<GradientText textValue="l'entièreté" /> de vos informations médicales,{' '}
						<GradientText textValue="facilement" /> et au <GradientText textValue="même endroit" />.
					</Text>
					<Text size="boldXl" w="750px">
						Parmi ces informations, vous pourrez retrouver, tous vos rendez-vous passés et futurs, ainsi que
						les différents documents fournis par votre médecin.
					</Text>
				</VStack>
				<VStack>
					<Text size="2xl" w="750px">
						Votre médecin vous remerciera d'utiliser <GradientText textValue="edgar.care" />
					</Text>
					<Text size="boldXl" w="750px">
						Avec nous il pourra avoir accès à tous vos documents et vos antécédents médicaux, beaucoup plus{' '}
						<GradientText textValue="facilement" /> et pourra ainsi vous suivre plus{' '}
						<GradientText textValue="efficacement" /> et plus <GradientText textValue="rapidement" />.
					</Text>
				</VStack>
				<Link href="https://www.linkedin.com/company/edgar-care/" target="_blank">
					<Button size="lg">Nous suivre ?</Button>
				</Link>
			</VStack>
		</VStack>
	</BasicPage>
);

export default Solutions;
