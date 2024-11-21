import { Button, useToast } from '@chakra-ui/react';

import { useRouter } from 'next/navigation';

import DeleteAccountIllustration from 'assets/illustrations/DeleteAccountIllustration';

import { useDeleteAccountMutation } from 'services/request/auth';

import type { SettingsPageType } from 'types/navigation/SettingsPageType';

const SettingsAccountDeletePage = (onCancel: () => void): SettingsPageType => {
	const [triggerDeleteAccountMutation] = useDeleteAccountMutation();

	const toast = useToast({ duration: 3000, isClosable: true });

	const router = useRouter();

	return {
		headerTitle: 'Supprimer votre compte',
		headerSubtitle:
			'Vos données seront supprimées dans 30 jours. Jusqu’à ces 30 jours, vous recevrez régulièrement des mails pour vous indiquer du temps restant avant la suppression de vos données.',
		headerIcon: DeleteAccountIllustration,
		hasProfileBanner: false,
		hasReturnButton: true,
		sections: [],
		footerPrimaryButton: (
			<Button
				w="100%"
				variant="delete"
				onClick={() => {
					triggerDeleteAccountMutation()
						.unwrap()
						.then(() => {
							localStorage.removeItem('token');
							router.push('/login');
							toast({
								title: 'Un mail de confirmation vous a été envoyé.',
								status: 'success',
							});
						})
						.catch(() => {
							toast({ title: 'Une erreur est survenue.', status: 'error' });
						});
				}}
			>
				Supprimer le compte
			</Button>
		),
		footerSecondaryButton: (
			<Button variant="secondary" w="100%" onClick={() => onCancel()}>
				Annuler
			</Button>
		),
	};
};

export default SettingsAccountDeletePage;
