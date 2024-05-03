'use client';

import { useRouter } from 'next/navigation';
import { useTimeout } from '@chakra-ui/react';

import LoadingScreen from 'components/loader/LoadingScreen';

const RootContent = (): JSX.Element => {
	const router = useRouter();

	useTimeout(() => {
		router.push('/dashboard');
	}, 500);

	return <LoadingScreen />;
};

export default RootContent;
