import { Box, useBreakpointValue, VStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';

import NavbarTab from 'components/navigation/NavbarTab';
import ProfileCard from 'components/navigation/ProfileCard';

import CalendarIcon from 'assets/icons/CalendarIcon';
import CalendarCheckIcon from 'assets/icons/CalendarCheckIcon';
import ChatIconDot from 'assets/icons/ChatIconDot';
import PeopleCardIcon from 'assets/icons/PeopleCardIcon';
import HeartPulseIcon from 'assets/icons/HeartPulseIcon';
import HelpIcon from 'assets/icons/HelpIcon';

import colors from 'theme/foundations/colors';

import { type NavbarTabType } from 'types/navigation/NavbarType';

const Navbar = (): JSX.Element => {
	const isDrawer = useBreakpointValue({ base: true, lg: false }) || false;

	const primaryTabs: NavbarTabType[] = [
		{
			name: 'Agenda',
			path: '/dashboard/agenda',
			icon: CalendarIcon,
			id: 'agenda',
		},
		{
			name: 'Rendez-vous',
			path: '/dashboard/appointments',
			icon: CalendarCheckIcon,
			id: 'appointments',
		},
		{
			name: 'Patients',
			path: '/dashboard/patients',
			icon: PeopleCardIcon,
			id: 'patients',
		},
		{
			name: 'Diagnostics',
			path: '/dashboard/diagnostics',
			icon: HeartPulseIcon,
			id: 'diagnostics',
		},
	];

	const secondaryTabs: NavbarTabType[] = [
		{
			name: 'Messagerie',
			path: '/dashboard/chat',
			icon: ChatIconDot,
			id: 'chat',
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
					{primaryTabs.length > 0 && (
						<>
							<VStack w="100%">
								{primaryTabs
									.filter((tab) => tab.path)
									.map((tab) => (
										<NavbarTab tab={tab} key={tab.name} />
									))}
							</VStack>
						</>
					)}
					{secondaryTabs.length > 0 && (
						<>
							<Box as="div" bg="blue.200" w="100%" h="2px" />
							<VStack w="100%">
								{secondaryTabs
									.filter((tab) => tab.path)
									.map((tab) => (
										<NavbarTab tab={tab} key={tab.name} />
									))}
							</VStack>
						</>
					)}
					{tertiaryTabs.length > 0 && (
						<>
							<Box as="div" bg="blue.200" w="100%" h="2px" />
							<VStack w="100%">
								{tertiaryTabs
									.filter((tab) => tab.path)
									.map((tab) => (
										<NavbarTab tab={tab} key={tab.name} />
									))}
							</VStack>
						</>
					)}
				</VStack>
			</VStack>
			<ProfileCard />
		</VStack>
	);
};

export default Navbar;
