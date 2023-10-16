'use client';

import { HStack, Text, VStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';

const DashboardPageBanner = ({ title, subTitle }: { title: string; subTitle: string }): JSX.Element => (
	<HStack w="100%" p="16px 32px" borderRadius="32px" spacing="24px" bg="blue.700">
		<Image src="/assets/Edgars/edgar-high-five.svg" alt="edgar-high-five" width={70} height={75} />
		<VStack w="100%" spacing="0px" align="start">
			<Text size="3xl" color="white">
				{title}
			</Text>
			<Text size="boldLg" color="white">
				{subTitle}
			</Text>
		</VStack>
	</HStack>
);

export default DashboardPageBanner;
