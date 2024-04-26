import { VStack, HStack, useBreakpointValue } from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';

const SimulationLayout = ({ children }: { children: JSX.Element }): JSX.Element => {
	const isMobile = useBreakpointValue({ base: true, md3: false });

	return (
		<VStack
			p={{ base: '32px', sm: '32px 48px', md: '32px 64px' }}
			bg="blue.700"
			w="100%"
			borderRadius={{ base: '0px', sm: '48px' }}
			h="100%"
			justify="space-between"
			spacing="16px"
		>
			<VStack w="100%" h="108px" />
			<HStack spacing={{ base: '64px', xl: '128px' }} h="100%">
				<VStack spacing="64px" h="100%" justify="center">
					{children}
				</VStack>
				{!isMobile && (
					<Image
						src="/assets/Edgars/edgar-high-five.svg"
						alt="Edgar high five"
						width={326}
						height={350}
						w={{ base: '200px', md2: '250px', xl: '326px' }}
						h="auto"
						id="edgar-simulationPage-layoutEdgar-img"
					/>
				)}
			</HStack>
			<VStack>
				<Image
					src="/assets/logo/white-edgar-logo.svg"
					alt="White edgar logo"
					width={150}
					height={40}
					w="150px"
					h="auto"
					id="edgar-simulationPage-layoutEdgarLogo-img"
				/>
			</VStack>
		</VStack>
	);
};

export default SimulationLayout;
