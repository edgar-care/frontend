import { Box, useBreakpointValue, VStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';

import NavbarTab from 'components/navigation/NavbarTab';
import ProfileCard from 'components/navigation/ProfileCard';

import HomeIcon from 'assets/icons/HomeIcon';
import CalendarIcon from 'assets/icons/CalendarIcon';
import MedicineIcon from 'assets/icons/MedicineIcon';
import DocumentIcon from 'assets/icons/DocumentIcon';
import MedicalIcon from 'assets/icons/MedicalIcon';
import HelpIcon from 'assets/icons/HelpIcon';

import colors from 'theme/foundations/colors';

import { type NavbarTabType } from 'types/navigation/NavbarType';

const Navbar = (): JSX.Element => {
	const isDrawer = useBreakpointValue({ base: true, lg: false }) || false;

	const primaryTabs: NavbarTabType[] = [
		{
			name: 'Accueil',
			path: '/dashboard',
			icon: HomeIcon,
			id: 'home',
		},
		{
			name: 'Rendez-vous',
			path: '/dashboard/appointments',
			icon: CalendarIcon,
			id: 'appointments',
		},
		{
			name: 'Traitements',
			path: '/dashboard/treatments',
			icon: MedicineIcon,
			id: 'treatments',
		},
		{
			name: 'Documents',
			path: '/dashboard/documents',
			icon: DocumentIcon,
			id: 'documents',
		},
	];

	const secondaryTabs: NavbarTabType[] = [
		{
			name: 'Dossier médical',
			path: '/dashboard/medical',
			icon: MedicalIcon,
			id: 'medical',
		},
	];

	const tertiaryTabs: NavbarTabType[] = [
		{
			name: 'Aide',
			path: 'https://edgar-sante.fr/contact#form',
			icon: HelpIcon,
			newPage: true,
			id: 'help',
		},
	];

	return (
		<VStack
			p="24px"
			justify="space-between"
			borderRadius="32px"
			bg="white"
			boxShadow={`0px 0px 0px 2px ${colors.blue[200]} ${isDrawer ? 'inset' : ''}`}
			maxW="275px"
			w="100%"
			h="calc(100vh - 36px)"
		>
			<VStack spacing="48px" w="100%">
				<Image src="/assets/logo/colored-edgar-logo.svg" alt="edgar-logo" width={200} height={58} />
				<VStack w="100%" px="8px" spacing="16px">
					<VStack w="100%">
						{primaryTabs
							.filter((tab) => tab.path)
							.map((tab) => (
								<NavbarTab tab={tab} key={tab.name} />
							))}
					</VStack>
					<Box as="div" bg="blue.200" w="100%" h="2px" />
					<VStack w="100%">
						{secondaryTabs
							.filter((tab) => tab.path)
							.map((tab) => (
								<NavbarTab tab={tab} key={tab.name} />
							))}
					</VStack>
					<Box as="div" bg="blue.200" w="100%" h="2px" />
					<VStack w="100%">
						{tertiaryTabs
							.filter((tab) => tab.path)
							.map((tab) => (
								<NavbarTab tab={tab} key={tab.name} />
							))}
					</VStack>
				</VStack>
			</VStack>
			<ProfileCard />
		</VStack>
	);
};

export default Navbar;
