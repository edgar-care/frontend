'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Stack, useBreakpointValue, VStack } from '@chakra-ui/react';

import ResponsiveNavBar from 'components/navigation/ResponsiveNavBar';
import LoadingScreen from 'components/loader/LoadingScreen';

import { useAuthContext } from 'contexts/auth';

import { useLazyGetPatientMedicalFolderQuery } from 'services/request/medical';
import { eventEmitter } from 'services/apiService';

const DashboardLayout = ({ children }: { children: JSX.Element }): JSX.Element => {
	const [triggerGetPatientMedicalFolder, medicalInfo] = useLazyGetPatientMedicalFolderQuery();

	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	const { auth } = useAuthContext();
	const router = useRouter();
	const isDrawer = useBreakpointValue({ base: true, lg: false }) || false;

	useEffect(() => {
		triggerGetPatientMedicalFolder();

		eventEmitter.on('logout', () => {
			router.push('/login');
		});

		eventEmitter.on('disabled', () => {
			router.push('/disable');
		});
	}, []);

	useEffect(() => {
		if (auth.checkToken().status === 'error') router.push('/login');

		if (
			medicalInfo.isError &&
			medicalInfo.error &&
			(('originalStatus' in medicalInfo.error && medicalInfo.error.originalStatus !== 409) ||
				(medicalInfo.error && 'status' in medicalInfo.error && medicalInfo.error.status !== 409))
		)
			router.push('/onboarding/personal');
		if (medicalInfo.status === 'fulfilled') setIsAuthenticated(true);
	}, [medicalInfo]);

	return (
		<>
			{!isAuthenticated ? (
				<LoadingScreen />
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
							overflowY="auto"
							p={{ base: '16px', sm: '32px' }}
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
