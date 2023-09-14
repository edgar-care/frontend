import { Box, HStack, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { type NavbarTabType } from 'types/navigation/NavbarType';

const NavbarTabContent = ({ tab }: { tab: NavbarTabType }): JSX.Element => {
	const pathname = usePathname();

	return (
		<HStack
			backgroundColor={pathname === tab.path ? `blue.900` : 'transparent'}
			p="8px 16px"
			spacing="16px"
			w="100%"
			borderRadius="12px"
			transition="all .3s ease-out"
			_hover={{
				background: 'blue.700',
			}}
			role="group"
			id={`edgar-dashboardNavbar-navbarTab-${tab.id}`}
		>
			<Icon
				as={tab.icon}
				color={pathname === tab.path ? `white` : 'blue.900'}
				w="16px"
				_groupHover={{
					color: 'white',
				}}
				id={`edgar-dashboardNavbar-navbarTab-${tab.id}-icon`}
			/>
			<Text
				color={pathname === tab.path ? 'white' : 'blue.900'}
				size="lg"
				_groupHover={{
					color: 'white',
				}}
				id={`edgar-dashboardNavbar-navbarTab-${tab.id}-text`}
			>
				{tab.name}
			</Text>
		</HStack>
	);
};

const NavbarTab = ({ tab }: { tab: NavbarTabType }): JSX.Element => (
	<Box as="div" w="100%">
		{tab.path ? (
			<Link href={tab.path} target={tab.newPage ? '_blank' : ''}>
				<NavbarTabContent tab={tab} />
			</Link>
		) : (
			<NavbarTabContent tab={tab} />
		)}
	</Box>
);

export default NavbarTab;
