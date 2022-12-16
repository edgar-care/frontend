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
import { HamburgerIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import NavBar from '../NavBar';

const ResponsiveNavBar = (): JSX.Element => {
	const isDrawer = useBreakpointValue({ base: true, lg: false }) || false;
	const { isOpen, onOpen, onClose } = useDisclosure();

	if (isDrawer)
		return (
			<Box>
				<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
					<DrawerOverlay />
					<DrawerContent>
						<NavBar />
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
	return <NavBar />;
};

export default ResponsiveNavBar;
