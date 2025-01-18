'use client';

import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { useRouter, useSearchParams } from 'next/navigation';

import LoadingScreen from 'components/loader/LoadingScreen';

import { useAuthContext } from 'contexts/auth';

const StartPageContent = () => {
	const { auth } = useAuthContext();
	const searchParams = useSearchParams();
	const router = useRouter();

	const toast = useToast({ duration: 3000, isClosable: true });

	useEffect(() => {
		if (auth.checkToken().status === 'success') router.push(searchParams.get('redirect') ?? '/dashboard');
		else {
			const array = new Uint32Array(1);
			window.crypto.getRandomValues(array);
			const random = array[0].toString(36).substring(0, 7);

			auth.signup(`${random}@experience.edgar-sante.fr`, random).then((res) => {
				toast({
					title: res.title,
					status: res.status,
				});
				if (auth.checkToken().status === 'success') router.push(searchParams.get('redirect') ?? '/dashboard');
			});
		}
	}, []);

	return <LoadingScreen />;
};

export default StartPageContent;
