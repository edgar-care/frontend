import { Button, HStack, Img } from '@chakra-ui/react';
import Link from 'next/link';
import colors from 'theme/foundations/colors';
import TabCard from './TabCard';

const NavBar = (): JSX.Element => {
	const tabs = [
		{
			name: 'Notre solution',
			path: '/solutions',
		},
	];

	return (
		<HStack
			w="100%"
			p="16px 256px"
			justify="space-between"
			bg="white"
			borderBottom={`2px solid ${colors.blue[100]}`}
			position="fixed"
			zIndex={10}
		>
			<Link href="/">
				<Img src="/assets/edgar.care-logo.svg" w="200px" h="auto" />
			</Link>
			<HStack spacing="32px">
				<HStack spacing="16px">
					{tabs.map((tab) => (
						<TabCard name={tab.name} path={tab.path} key={tab.path} />
					))}
				</HStack>
				<Link href="/simulation">
					<Button variant="secondary" size="boldMd">
						Simulation
					</Button>
				</Link>
				<Link href="/connection/login">
					<Button size="boldMd">Espace client</Button>
				</Link>
			</HStack>
		</HStack>
	);
};

export default NavBar;
