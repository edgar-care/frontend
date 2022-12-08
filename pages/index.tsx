import { Button, VStack } from '@chakra-ui/react';
import HeadingSection from 'components/landingPage/HeadingSection';
import InfosSection from 'components/landingPage/InfosSection';
import Link from 'next/link';
import NavBar from '../src/components/landingPage/NavBar';
import BasicPage from '../src/components/pages/BasicPage';

const Home = (): JSX.Element => (
	<BasicPage>
		<VStack w="100%">
			<NavBar />
			<VStack spacing="128px" pt="128px">
				<HeadingSection />
				<InfosSection />
				<Link href="/solutions">
					<Button size="lg">Vous voulez en apprendre plus ?</Button>
				</Link>
			</VStack>
		</VStack>
	</BasicPage>
);

export default Home;
