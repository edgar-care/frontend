'use client';

import { useState } from 'react';
import { VStack, useBreakpointValue, HStack, useTimeout } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';

import ResetPasswordFields from 'components/connectionPage/reset-password/ResetPasswordFields';
import ResetPasswordBanner from 'components/connectionPage/reset-password/ResetPasswordBanner';
import LoadingScreen from 'components/loader/LoadingScreen';

const ResetPasswordContent = (): JSX.Element => {
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const isTablet = useBreakpointValue({ base: true, lg: false });

	const searchParams = useSearchParams();
	const uuid = searchParams.get('uuid');

	useTimeout(() => {
		setIsLoading(false);
	}, 1000);

	return (
		<>
			{isLoading ? (
				<LoadingScreen />
			) : (
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
			)}
		</>
	);
};

export default ResetPasswordContent;
