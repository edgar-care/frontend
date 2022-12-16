import { HamburgerIcon } from '@chakra-ui/icons';
import {
	Box,
	Button,
	Divider,
	Drawer,
	DrawerContent,
	DrawerOverlay,
	HStack,
	Icon,
	Img,
	useBreakpointValue,
	useDisclosure,
	VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import colors from 'theme/foundations/colors';
import { useRouter } from 'next/router';
import TabCard from './TabCard';

const NavBar = (): JSX.Element => {
	const router = useRouter();

	const isDrawer = useBreakpointValue({ base: true, md: false }) || false;
	const { isOpen, onOpen, onClose } = useDisclosure();

	const tabs = [
		{
			name: 'Notre application',
			path: '/apk',
		},
		{
			name: 'Notre solution',
			path: '/solutions',
		},
	];

	if (isDrawer)
		return (
			<Box>
				<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
					<DrawerOverlay />
					<DrawerContent w="75%" p="64px 64px">
						<VStack spacing="64px" w="100%">
							<VStack spacing="16px" w="100%">
								<Link href="/">
									<Img
										src="/assets/edgar.care-logo.svg"
										w={{ base: '150px', sm: '200px' }}
										h="auto"
									/>
								</Link>
								<Divider />
							</VStack>
							<VStack spacing="32px" w="100%">
								{tabs.map((tab) => (
									<TabCard name={tab.name} path={tab.path} key={tab.path} />
								))}
							</VStack>
							<VStack spacing="16px" w="100%">
								<Button w="100%" onClick={() => router.push('/connection/login')}>
									Espace client
								</Button>
								<Button variant="secondary" w="100%" onClick={() => router.push('/simulation')}>
									Simulation
								</Button>
							</VStack>
						</VStack>
					</DrawerContent>
				</Drawer>
				<Box as="nav" w="100vw" position="fixed" left="0" top="0" zIndex={100} bg="white">
					<HStack w="100%" h="100%" px="24px" py="24px">
						<Button onClick={onOpen} _focus={{}} p="16px" bg="transparent" color="black">
							<Icon fontSize="24px" as={HamburgerIcon} />
						</Button>
						<VStack textAlign="center" w="100%">
							<Link href="/">
								<Img src="/assets/edgar.care-logo.svg" w={{ base: '150px', sm: '200px' }} h="auto" />
							</Link>
						</VStack>
					</HStack>
					<Divider />
				</Box>
			</Box>
		);

	return (
		<HStack
			w="100%"
			p={{ base: '16px 48px', lg: '16px 128px', '2xl': '16px 256px' }}
			justify="space-between"
			bg="white"
			borderBottom={`2px solid ${colors.blue[100]}`}
			position="fixed"
			zIndex={10}
		>
			<Link href="/">
				<Img src="/assets/edgar.care-logo.svg" w="200px" h="auto" />
			</Link>
			<HStack spacing={{ base: '16px', lg: '32px' }}>
				<HStack spacing={{ base: '8px', lg: '16px' }}>
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
