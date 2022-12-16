import { Button, Stack, Text, VStack } from '@chakra-ui/react';

import NavBar from 'components/landingPage/NavBar';
import BasicPage from 'components/pages/BasicPage';
import Link from 'next/link';

import GradientText from 'components/GradientText';

const Apk = (): JSX.Element => (
	<BasicPage>
		<VStack w="100%">
			<NavBar />
			<VStack py="192px" textAlign="center" spacing="64px">
				<VStack>
					<Text size="3xl">
						<GradientText textValue="edgar.care" /> sur Android et iOS
					</Text>
					<Text size="boldXl" maxW="500px">
						La plateforme s'occupant de <GradientText textValue="votre santé" /> et de celle de{' '}
						<GradientText textValue="vos proches" />
					</Text>
				</VStack>
				<Stack direction={{ base: 'column', md: 'row' }} spacing="32px">
					<VStack spacing="16px">
						<Button disabled={true} variant="primary" size="md">
							Télécharger pour IOS
						</Button>
						<Text size="lg">Arrive bientôt...</Text>
					</VStack>
					<VStack spacing="16px">
						<Link href="https://edgar-care-apk.s3.eu-west-3.amazonaws.com/edgar.care.apk">
							<Button variant="primary" size="md">
								Télécharger pour Android
							</Button>
						</Link>
						<Link href="https://edgar-care-apk.s3.eu-west-3.amazonaws.com/dev-edgar.care.apk">
							<Text size="lg" as="u">
								Version bêta
							</Text>
						</Link>
					</VStack>
				</Stack>
			</VStack>
		</VStack>
	</BasicPage>
);

export default Apk;
