import { Button, HStack, Text, VStack } from '@chakra-ui/react';

import NavBar from 'components/landingPage/NavBar';
import BasicPage from 'components/pages/BasicPage';
import Link from 'next/link';

import GradientText from 'components/GradientText';

const Apk = (): JSX.Element => (
	<BasicPage>
		<VStack w="100%">
			<NavBar />
			<VStack py="192px" w="50%" textAlign="center" spacing="64px">
				<VStack>
					<Text size="3xl">Notre application:</Text>
					<Text size="boldXl" w="750px">
						Ici vous pouvez télécharger notre <GradientText textValue="application mobile" /> pour IOS ou
						Android
					</Text>
				</VStack>
				<HStack spacing="32px">
					<Button disabled={true} variant="primary" size="md">
						Télécharger pour IOS
					</Button>
					<Link href={'https://edgar-care-apk.s3.eu-west-3.amazonaws.com/dev-edgar.care.apk'}>
						<Button variant="primary" size="md">
							Télécharger pour Android
						</Button>
					</Link>
				</HStack>
			</VStack>
		</VStack>
	</BasicPage>
);

export default Apk;
