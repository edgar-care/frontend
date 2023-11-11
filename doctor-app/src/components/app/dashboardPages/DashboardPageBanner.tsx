'use client';

import { HStack, Text, useBreakpointValue, VStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';

const DashboardPageBanner = ({ title, subTitle }: { title: string; subTitle: string }): JSX.Element => {
	const isMobile = useBreakpointValue({ base: true, sm: false }) || false;

	return (
		<HStack w="100%" p="16px 32px" borderRadius="32px" spacing="24px" bg="blue.700">
			{!isMobile && (
				<Image src="/assets/Edgars/edgar-high-five.svg" alt="edgar-high-five" width={70} height={75} />
			)}
			<VStack w="100%" spacing="0px" align="start">
				<Text size={{ base: 'bold2xl', lg: '3xl' }} color="white">
					{title}
				</Text>
				<Text size={{ base: 'lg', lg: 'boldLg' }} color="white">
					{subTitle}
				</Text>
			</VStack>
		</HStack>
	);
};

export default DashboardPageBanner;
