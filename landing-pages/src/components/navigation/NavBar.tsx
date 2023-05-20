import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
	HStack,
	Icon,
	Img,
	Link,
	useBreakpointValue,
	useDisclosure,
	VStack,
} from '@chakra-ui/react';
import { BsList } from 'react-icons/bs';

import { APP_URL } from 'config/constants';

import TabCard, { DrawerTabCard } from './TabCard';

const NavBar = ({ variant }: { variant: 'blue' | 'white' }): JSX.Element => {
	const isDrawer = useBreakpointValue({ base: true, xl: false });
	const { isOpen, onOpen, onClose } = useDisclosure();

	const tabs = [
		{
			name: 'Ce que nous offrons',
			path: '/product',
			id: 'product',
		},
		{
			name: 'Notre application',
			path: '/application',
			id: 'application',
		},
		{
			name: 'Nous rejoindre',
			path: '/contact',
			id: 'contact',
		},
	];

	return (
		<>
			<HStack w="100%" p={{ base: '16px 32px', md: '16px 64px' }} justify="space-between">
				{isDrawer && (
					<VStack w={{ base: 'auto', xl: '175px' }} align="start">
						<Icon
							as={BsList}
							w={{ base: '40px', md: '48px' }}
							h={{ base: '40px', md: '48px' }}
							onClick={onOpen}
							color={variant === 'blue' ? 'white' : 'black'}
							id="edgar-navbar-drawer-button"
						/>
					</VStack>
				)}
				<Link href="/" w={{ base: 'auto', xl: '200px' }}>
					<Img
						src={
							variant === 'blue'
								? '/assets/logo/white-edgar-logo.svg'
								: '/assets/logo/colored-edgar-logo.svg'
						}
						w={{ base: '100px', md: '150px' }}
						h="auto"
						id="edgar-navbar-edgarLogo-img"
						alt="edgar-logo"
						aria-label="redirection-to-home-page"
					/>
				</Link>
				{!isDrawer && (
					<>
						<HStack spacing="64px">
							{tabs.map((tab) => (
								<TabCard
									name={tab.name}
									path={tab.path}
									id={tab.id}
									key={tab.path}
									navbarVariant={variant}
								/>
							))}
						</HStack>
						<VStack align="end" w={{ base: '175px', xl: '200px' }}>
							<Link href={`${APP_URL}`}>
								<Button
									size="md"
									variant={variant === 'blue' ? 'primaryBordered' : 'primary'}
									id="edgar-navbar-patientArea-button"
								>
									Espace patient
								</Button>
							</Link>
						</VStack>
					</>
				)}
			</HStack>
			<Drawer isOpen={isOpen} onClose={onClose} placement="left">
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton color="white" id="edgar-navbar-drawerClose-button" />
					<DrawerBody bg="blue.700">
						<VStack spacing="0px" p="64px 8px" align="start">
							{[...tabs, { name: 'Espace patient', path: `${APP_URL}`, id: 'patient' }].map((tab) => (
								<DrawerTabCard name={tab.name} path={tab.path} id={tab.id} key={tab.path} />
							))}
						</VStack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default NavBar;
