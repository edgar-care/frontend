import { VStack, HStack, Icon, Text, Image, Button, useToast } from '@chakra-ui/react';

import { useRouter } from 'next/navigation';

import DisableAccountIllustration from 'assets/illustrations/DisableAccountIllustration';

import { useEnableAccountMutation } from 'services/request/auth';

const DisablePageFields = (): JSX.Element => {
	const [triggerEnableAccountMutation] = useEnableAccountMutation();

	const toast = useToast({ duration: 3000, isClosable: true });

	const router = useRouter();

	return (
		<VStack w="100%" justify="space-between" align="center">
			<VStack w="100%" spacing="128px">
				<VStack w="100%" spacing="16px">
					<HStack w="100%" justify="space-between">
						<Icon as={DisableAccountIllustration} w="64px" h="64px" />
					</HStack>
					<VStack w="100%" spacing="0px" align="start">
						<Text size="bold2xl">Votre compte est désactivé</Text>
						<Text size="lg" color="grey.600">
							Afin de continuer, vous devez réactiver votre compte.
						</Text>
					</VStack>
				</VStack>
				<VStack w="100%" spacing="16px">
					<Button
						w="100%"
						size="customLg"
						variant="primary"
						onClick={() => {
							triggerEnableAccountMutation()
								.unwrap()
								.then(() => {
									toast({
										title: 'Le compte à été réactivé',
										status: 'success',
									});
									router.push('/dashboard');
								})
								.catch(() => {
									toast({ title: 'Une erreur est survenue', status: 'error' });
								});
						}}
					>
						Activer mon compte
					</Button>
				</VStack>
			</VStack>
			<Image src="/assets/logo/colored-edgar-logo.svg" alt="colored-edgar-logo" w="200px" />
		</VStack>
	);
};

export default DisablePageFields;
