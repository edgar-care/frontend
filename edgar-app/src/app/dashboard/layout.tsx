'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Stack, useBreakpointValue, VStack } from '@chakra-ui/react';

import ResponsiveNavBar from 'components/navigation/ResponsiveNavBar';

import { useAuthContext } from 'contexts/auth';

import { VAPIDPUBLICKEY } from 'config/constants';

const DashboardLayout = ({ children }: { children: JSX.Element }): JSX.Element => {
	const auth = useAuthContext();
	const router = useRouter();
	const isDrawer = useBreakpointValue({ base: true, lg: false }) || false;

	useEffect(() => {
		if (auth.checkToken().status === 'error') router.push('/login');
	}, []);

	useEffect(() => {
		window.Notification.requestPermission().then(async (permission) => {
			if (permission === 'granted') {
				const sw = await window.navigator.serviceWorker.register('/push-notifications-sw.js', {
					scope: '/dashboard',
				});
				const subscription = await sw.pushManager.getSubscription().then(async (sub) => {
					if (sub) return sub;
					return sw.pushManager.subscribe({
						userVisibleOnly: true,
						applicationServerKey: VAPIDPUBLICKEY,
					});
				});

				// TODO: connect to backend and save subscription
				console.log(subscription.toJSON());
			}
		});
	}, []);

	return (
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
					p="32px"
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
	);
};

export default DashboardLayout;
