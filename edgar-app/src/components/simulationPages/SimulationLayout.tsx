import { VStack, HStack, useBreakpointValue } from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';

const SimulationLayout = ({ children }: { children: JSX.Element }): JSX.Element => {
	const isMobile = useBreakpointValue({ base: true, md: false });
	return (
		<VStack py="32px" px="64px" bg="blue.700" w="100%" borderRadius="48px" h="100%" justify="space-between">
			<VStack w="100%" h="108px"></VStack>
			<HStack spacing="128px">
				<VStack spacing="64px">{children}</VStack>
				{!isMobile && (
					<Image src="/assets/Edgars/edgar-high-five.svg" alt="Edgar high five" width={326} height={350} />
				)}
			</HStack>
			<VStack>
				<Image src="/assets/logo/white-edgar-logo.svg" alt="White edgar logo" width={250} height={73} />
			</VStack>
		</VStack>
	);
};

export default SimulationLayout;
