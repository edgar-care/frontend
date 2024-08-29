import { Button, useToast } from '@chakra-ui/react';

import { useDisable2faMethodMutation } from 'services/request/2fa';

import type { SettingsPageType } from 'types/navigation/SettingsPageType';

import ShieldCrossedIllustration from 'assets/illustrations/ShieldCrossedIllustration';

const SettingsAccount2FA3rdPartyDisablePage = (onCancel: () => void): SettingsPageType => {
	const [triggerDisable2faMethodMutation] = useDisable2faMethodMutation();

	const toast = useToast({ duration: 3000, isClosable: true });

	return {
		headerTitle: 'Désactiver la double authentification avec une application tierce ?',
		headerSubtitle: `Vous ne pourrez plus vous connecter en utilisant votre application de double authentification.`,
		headerIcon: ShieldCrossedIllustration,
		hasProfileBanner: false,
		hasReturnButton: true,
		sections: [],
		footerPrimaryButton: (
			<Button
				w="100%"
				variant="delete"
				onClick={() => {
					triggerDisable2faMethodMutation('AUTHENTIFICATOR')
						.unwrap()
						.then(() => {
							toast({
								title: 'La double authentification a bien été désactivée',
								status: 'success',
							});
							onCancel();
						})
						.catch(() => {
							toast({ title: 'Une erreur est survenue', status: 'error' });
						});
				}}
			>
				Désactiver l’authentification
			</Button>
		),
		footerSecondaryButton: (
			<Button variant="secondary" w="100%" onClick={() => onCancel()}>
				Annuler
			</Button>
		),
	};
};

export default SettingsAccount2FA3rdPartyDisablePage;
