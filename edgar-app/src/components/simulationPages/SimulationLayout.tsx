import { VStack, HStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';

const SimulationLayout = ({ children }: { children: JSX.Element }): JSX.Element => (
	<VStack py="32px" px="64px" bgColor="blue.700" w="100%" borderRadius="48px" h="100%" justifyContent="space-between">
		<VStack w="100%" h="108px"></VStack>
		<HStack spacing="128px">
			<VStack spacing="64px">{children}</VStack>
			<Image src="/assets/Edgars/edgar-high-five.svg" alt="Edgar high five" width={326} height={350} />
		</HStack>
		<VStack>
			<Image src="/assets/logo/white-edgar-logo.svg" alt="White edgar logo" width={250} height={73} />
		</VStack>
	</VStack>
);

export default SimulationLayout;
