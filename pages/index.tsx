import { Button, Stack, useBreakpointValue, VStack } from '@chakra-ui/react';
import HeadingSection from 'components/landingPage/HeadingSection';
import InfosSection from 'components/landingPage/InfosSection';
import Link from 'next/link';
import NavBar from '../src/components/landingPage/NavBar';
import BasicPage from '../src/components/pages/BasicPage';

const Home = (): JSX.Element => {
	const isMobile = useBreakpointValue({ base: true, sm: false });

	return (
		<BasicPage>
			<VStack w="100%">
				<NavBar />
				<VStack spacing="128px" py="128px">
					<HeadingSection />
					<InfosSection />
					<Stack direction={{ base: 'column', md: 'row' }} spacing="32px">
						<Link href="/simulation">
							<Button size={isMobile ? 'md' : 'lg'} w="100%">
								Lancer une simulation
							</Button>
						</Link>
						<Link href="/solutions">
							<Button variant="secondary" size={isMobile ? 'md' : 'lg'} w="100%">
								Vous voulez en apprendre plus ?
							</Button>
						</Link>
					</Stack>
				</VStack>
			</VStack>
		</BasicPage>
	);
};

export default Home;
