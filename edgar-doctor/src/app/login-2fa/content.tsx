'use client';

import { useEffect, useState } from 'react';
import { Box, HStack, Icon, Image, Text, useDisclosure, VStack } from '@chakra-ui/react';
import { useRouter, useSearchParams } from 'next/navigation';

import Login2faCard, { type Login2FACardProps } from 'components/app/connectionPage/login-2fa/Login2faCard';
import Login2faModals from 'components/app/connectionPage/login-2fa/Login2faModals';

import { useAuthContext } from 'contexts/auth';

import { decrypt } from 'utils/crypt';

import type { AvailableMethod } from 'types/app/login-2fa/Login2FAResponse';
import type { Login2faModalPageType } from 'types/app/login-2fa/Login2faModalPageType';

import CrossIcon from 'assets/icons/CrossIcon';
import ShieldIllustration from 'assets/illustrations/ShieldIllustration';
import MailIcon from 'assets/icons/MailIcon';
import EdgarIcon from 'assets/icons/EdgarIcon';
import ShieldKeyIcon from 'assets/icons/ShieldKeyIcon';
import DiagonalKeyIcon from 'assets/icons/DiagonalKeyIcon';

const Login2FAPageContent = (): JSX.Element => {
	const [selectedMethod, setSelectedMethod] = useState<Login2faModalPageType | undefined>(undefined);

	const { auth, availableMethods, setAvailableMethods, setEmail, setPassword, setDeviceInfos } = useAuthContext();
	const searchParams = useSearchParams();
	const router = useRouter();

	const { isOpen, onOpen, onClose } = useDisclosure();

	useEffect(() => {
		if (auth.checkToken().status === 'success')
			router.push(
				searchParams.get('redirect') ? searchParams.get('redirect')! : `/dashboard?${searchParams.toString()}`,
			);
		if (availableMethods.length === 0) {
			const credentials = localStorage.getItem('2fa');
			if (credentials) {
				const { email, password, methods, deviceInfo } = JSON.parse(credentials);

				if (email && password && methods && deviceInfo && methods.length > 0) {
					setEmail(decrypt(email));
					setPassword(decrypt(password));
					setAvailableMethods(methods);
					setDeviceInfos(deviceInfo);
					localStorage.removeItem('2fa');
					return;
				}
			}
			router.push('/login');
		}
	}, []);

	const openedSelectedMethodPage = (selectedMethodPage: Login2faModalPageType) => {
		setSelectedMethod(selectedMethodPage);
		onOpen();
	};

	const availableMethodsContent: Record<AvailableMethod, Login2FACardProps> = {
		EMAIL: {
			icon: MailIcon,
			title: 'Recevoir un code par email',
			onClick: () => openedSelectedMethodPage('email'),
		},
		MOBILE: {
			icon: EdgarIcon,
			title: 'Utiliser l’application edgar de votre téléphone ',
			onClick: () => openedSelectedMethodPage('mobileStart'),
		},
		AUTHENTIFICATOR: {
			icon: ShieldKeyIcon,
			title: 'Utiliser votre application d’authentification',
			onClick: () => openedSelectedMethodPage('authenticator'),
		},
	};

	return (
		<VStack
			p={{ base: '0px', sm: '16px', lg: '64px', xl: '128px', '4xl': '128px 256px' }}
			w="100%"
			maxW="1750px"
			h={{ base: '100%', lg: 'auto' }}
			justify={{ base: 'start', sm: 'center' }}
			minH={{ base: 'auto', sm: '100vh' }}
		>
			<HStack
				w="100%"
				align="stretch"
				spacing="32px"
				bg="white"
				p="32px"
				borderRadius={{ base: '0px', sm: '48px' }}
				border={{ base: '0px', sm: '2px solid' }}
				borderColor={{ sm: 'blue.200' }}
				h="100%"
			>
				<VStack w="64px" spacing="16px" align="start">
					<Box
						w="100%"
						h="100%"
						bg="radial-gradient(circle at center, #A0C9F0 0, #335FC2 100%);"
						borderRadius="12px"
					/>
				</VStack>
				<VStack w="100%" h="100%" justify="space-between" spacing="32px">
					<VStack w="100%" spacing="32px">
						<VStack w="100%" spacing="16px" align="start">
							<HStack w="100%" justify="space-between" align="center" pr="12px">
								<Icon as={ShieldIllustration} w="64px" h="64px" />
								<Icon as={CrossIcon} w="16px" h="16px" cursor="pointer" />
							</HStack>
							<VStack w="100%" spacing="0px">
								<Text size="bold2xl" w="100%">
									Vérifier votre identité
								</Text>
								<Text color="grey.600" w="100%" size="lg">
									Sélectionner une des méthodes d’authentification ci-dessous, afin de vérifier votre
									identité.
								</Text>
							</VStack>
						</VStack>
						<VStack w="100%" spacing="32px">
							<VStack w="100%" spacing="4px">
								{availableMethods.map((method, index) => (
									<VStack spacing="4px" w="100%" key={method}>
										{index !== 0 && <Box as="span" h="1px" w="100%" bg="blue.100" />}
										<Login2faCard {...availableMethodsContent[method]} />
									</VStack>
								))}
							</VStack>
							<VStack w="100%" align="start">
								<Text size="lg">Vous ne pouvez pas utiliser l’une des méthodes ci-dessus ?</Text>
								<Login2faCard
									icon={DiagonalKeyIcon}
									title="Utiliser vos codes de sauvegarde"
									onClick={() => openedSelectedMethodPage('backupCode')}
								/>
							</VStack>
						</VStack>
					</VStack>
					<Image src="/assets/logo/colored-edgar-logo.svg" alt="colored-edgar-logo" w="200px" />
				</VStack>
			</HStack>
			{selectedMethod && (
				<Login2faModals
					isOpen={isOpen}
					onClose={() => {
						setSelectedMethod(undefined);
						onClose();
					}}
					openedPage={selectedMethod}
				/>
			)}
		</VStack>
	);
};

export default Login2FAPageContent;
