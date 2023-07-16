'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Center, Img, useDisclosure, VStack } from '@chakra-ui/react';
import { MrMiyagi } from '@uiball/loaders';

import { useAuthContext } from 'contexts/auth';

import colors from 'theme/foundations/colors';

const ConnectionLayout = ({ children }: { children: JSX.Element }): JSX.Element => {
	const auth = useAuthContext();
	const router = useRouter();
	const searchParams = useSearchParams();

	const { isOpen: isNotAuthenticated, onToggle: authenticateHandler } = useDisclosure();

	useEffect(() => {
		auth.checkToken().then((res) => {
			if (res.status === 'success') {
				if (searchParams.get('redirect')) void router.push(searchParams.get('redirect') as string);
				else void router.push('/dashboard');
			} else authenticateHandler();
		});
	}, []);

	return (
		<>
			{isNotAuthenticated ? (
				<VStack p={{ base: '32px', md: '64px' }} minH="100vh">
					{children}
				</VStack>
			) : (
				<Center h="100vh" w="100%">
					<VStack spacing="128px">
						<Img src="/assets/edgar.care-logo.svg" w="350px" />
						<MrMiyagi size={64} color={colors.blue[900]} />
					</VStack>
				</Center>
			)}
		</>
	);
};

export default ConnectionLayout;
