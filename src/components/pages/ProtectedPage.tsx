import { Center, Img, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { MrMiyagi } from '@uiball/loaders';

import useToggle from 'hooks/useToggle';

import { useAuthContext } from 'contexts/auth';

import colors from 'theme/foundations/colors';

const ProtectedPage = ({ children }: { children: JSX.Element }): JSX.Element => {
	const auth = useAuthContext();
	const router = useRouter();

	const { toggle: isAuthenticated, toggleHandler: authenticateHandler } = useToggle();

	useEffect(() => {
		// auth.checkToken().then((res) => {
		// 	if (res.status !== 'success') void router.push('/login');
		// 	else authenticateHandler();
		// });
		authenticateHandler();
	}, []);

	return (
		<>
			{isAuthenticated ? (
				<VStack p="64px" minH="100vh">
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

export default ProtectedPage;
