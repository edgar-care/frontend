import {
	Box,
	Button,
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
import { HamburgerIcon } from '@chakra-ui/icons';
import Link from 'next/link';

import Navbar from 'components/navigation/Navbar';
import SimpleProfileCard from 'components/navigation/SimpleProfileCard';

const ResponsiveNavBar = (): JSX.Element => {
	const isDrawer = useBreakpointValue({ base: true, lg: false }) || false;
	const isProfileDisplayed = useBreakpointValue({ base: false, sm: true }) || false;
	const { isOpen, onOpen, onClose } = useDisclosure();

	if (isDrawer)
		return (
			<Box>
				<Drawer isOpen={isOpen} placement="left" onClose={onClose} size="navbar">
					<DrawerOverlay />
					<DrawerContent h="100%" m="16px 0px 0px 16px">
						<Navbar />
					</DrawerContent>
				</Drawer>
				<Box as="nav" w="100%" bg="blue.700" borderRadius={{ base: '0px', sm: '32px 32px 0px 0px' }}>
					<HStack w="100%" h="100%" p="16px" justify="space-between">
						<HStack spacing="16px" w={{ base: '100%', sm: 'auto' }}>
							<Button onClick={onOpen} _focus={{}} p="16px" bg="transparent" color="black">
								<Icon fontSize="24px" as={HamburgerIcon} color="white" />
							</Button>
							<VStack w="100%" ml={{ base: '-55px', sm: '0px' }}>
								<Link href="/dashboard">
									<Img src="/assets/logo/white-edgar-logo.svg" w="100px" h="auto" />
								</Link>
							</VStack>
						</HStack>
						{isProfileDisplayed && (
							<VStack w="200px">
								<SimpleProfileCard />
							</VStack>
						)}
					</HStack>
				</Box>
			</Box>
		);
	return <Navbar />;
};

export default ResponsiveNavBar;
