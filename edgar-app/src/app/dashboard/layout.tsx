'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Center, Img, Stack, useBreakpointValue, useTimeout, VStack } from '@chakra-ui/react';
import { MrMiyagi } from '@uiball/loaders';

import ResponsiveNavBar from 'components/navigation/ResponsiveNavBar';

import { useAuthContext } from 'contexts/auth';

import colors from 'theme/foundations/colors';

const DashboardLayout = ({ children }: { children: JSX.Element }): JSX.Element => {
	const auth = useAuthContext();
	const router = useRouter();
	const isDrawer = useBreakpointValue({ base: true, lg: false }) || false;

	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	useTimeout(() => {
		if (auth.checkToken().status === 'error') router.push('/login');
		else setIsAuthenticated(true);
	}, 750);

	return (
		<>
			{!isAuthenticated ? (
				<VStack p={{ base: '0px', sm: '16px' }} w="100%" bg="blue.100">
					<Center h="100vh" w="100%">
						<VStack spacing="128px">
							<Img src="/assets/edgar.care-logo.svg" w="350px" />
							<MrMiyagi size={64} color={colors.blue[900]} />
						</VStack>
					</Center>
				</VStack>
			) : (
				<VStack p={{ base: '0px', sm: '16px' }} w="100%" h="100%" bg="blue.100">
					<Stack
						direction={isDrawer ? 'column' : 'row'}
						h="100%"
						bg="blue.50"
						borderRadius="32px"
						border={{ base: '0px solid', sm: '2px solid' }}
						borderColor={{ base: 'blue.200', sm: 'blue.200' }}
						w="100%"
					>
						<ResponsiveNavBar />
						<VStack
							w="100%"
							h={isDrawer ? '100%' : 'calc(100vh - 36px)'}
							overflowY="scroll"
							px="32px"
							sx={{
								'::-webkit-scrollbar': {
									width: '6px',
								},
								'::-webkit-scrollbar-track': {
									background: '#F1F1F1',
									marginTop: '32px',
									marginBottom: '32px',
								},
								'::-webkit-scrollbar-thumb': {
									background: 'grey.200',
									borderRadius: '8px',
								},
								'::-webkit-scrollbar-thumb:hover': {
									background: 'grey.300',
								},
								scrollbarWidth: 'thin',
								scrollbarColor: '#CCC #F1F1F1',
							}}
						>
							{children}
						</VStack>
					</Stack>
				</VStack>
			)}
		</>
	);
};

export default DashboardLayout;
