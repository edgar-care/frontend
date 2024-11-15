'use client';

import { VStack, useBreakpointValue, HStack } from '@chakra-ui/react';

import DisablePageFields from 'components/connectionPage/disable/DisablePageFields';
import DisablePageBanner from 'components/connectionPage/disable/DisablePageBanner';

const DisablePageContent = (): JSX.Element => {
	const isTablet = useBreakpointValue({ base: true, lg: false });

	return (
		<>
			<VStack
				p={{ base: '0px', sm: '16px 128px', lg: '64px 256px', xl: '128px 512px' }}
				w="100%"
				h={{ base: '100%', lg: 'auto' }}
				justify={{ base: 'start', sm: 'center' }}
				minH={{ base: 'auto', sm: '100vh' }}
			>
				<HStack
					bg="white"
					borderRadius="48px"
					w="100%"
					border="2px solid"
					borderColor="blue.200"
					align="stretch"
					spacing="32px"
					p="32px"
					h="100%"
					maxW="896px"
				>
					{!isTablet && <DisablePageBanner />}
					<DisablePageFields />
				</HStack>
			</VStack>
		</>
	);
};

export default DisablePageContent;
