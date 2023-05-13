'use client';

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
	useBreakpointValue,
	useDisclosure,
	VStack,
} from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import { BsList } from 'react-icons/bs';

import { APP_URL } from 'config/constants';

import TabCard, { DrawerTabCard } from './TabCard';

const NavBar = (): JSX.Element => {
	const isDrawer = useBreakpointValue({ base: true, xl: false });
	const { isOpen, onOpen, onClose } = useDisclosure();

	const tabs = [
		{
			name: 'Ce que nous offrons',
			path: '/product',
		},
		{
			name: 'Notre application',
			path: '/application',
		},
		{
			name: 'Nous rejoindre',
			path: '/contact',
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
							color="white"
						/>
					</VStack>
				)}
				<Link href="/" w={{ base: 'auto', xl: '200px' }}>
					<Img src="/assets/logo/white-edgar-logo.svg" w={{ base: '100px', md: '150px' }} h="auto" />
				</Link>
				{!isDrawer && (
					<>
						<HStack spacing="64px">
							{tabs.map((tab) => (
								<TabCard name={tab.name} path={tab.path} key={tab.path} />
							))}
						</HStack>
						<VStack align="end" w={{ base: '175px', xl: '200px' }}>
							<Link href={`${APP_URL}/connection/login`}>
								<Button size="md" variant="primaryBordered">
									Espace patient
								</Button>
							</Link>
						</VStack>
					</>
				)}
			</HStack>
			<Drawer isOpen={isOpen} onClose={onClose} placement="left" initialFocusRef={undefined}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton color="white" />
					<DrawerBody bg="blue.700">
						<VStack spacing="0px" p="64px 8px" align="start">
							{[...tabs, { name: 'Espace patient', path: `${APP_URL}/connection/login` }].map((tab) => (
								<DrawerTabCard name={tab.name} path={tab.path} key={tab.path} />
							))}
						</VStack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default NavBar;
