'use client';

import { VStack, useBreakpointValue, HStack } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';

import ResetPasswordFields from 'components/app/connectionPage/reset-password/ResetPasswordFields';
import ResetPasswordBanner from 'components/app/connectionPage/reset-password/ResetPasswordBanner';

const ResetPasswordContent = (): JSX.Element => {
	const isTablet = useBreakpointValue({ base: true, lg: false });

	const searchParams = useSearchParams();
	const uuid = searchParams.get('uuid');

	return (
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
				{!isTablet && <ResetPasswordBanner />}
				<ResetPasswordFields uuid={uuid} />
			</HStack>
		</VStack>
	);
};

export default ResetPasswordContent;
