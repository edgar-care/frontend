import { Button, useToast } from '@chakra-ui/react';

import { useDisable2faMethodMutation } from 'services/request/2fa';

import type { SettingsPageType } from 'types/navigation/SettingsPageType';

import ShieldCrossedIllustration from 'assets/illustrations/ShieldCrossedIllustration';

const SettingsAccount2FAEdgarDisablePage = (onCancel: () => void): SettingsPageType => {
	const [triggerDisable2faMethodMutation] = useDisable2faMethodMutation();

	const toast = useToast({ duration: 3000, isClosable: true });

	return {
		headerTitle: 'Désactiver la double authentification avec edgar ?',
		headerSubtitle: `Vous ne pourrez plus vous connecter en utilisant votre application edgar sur mobile.`,
		headerIcon: ShieldCrossedIllustration,
		hasProfileBanner: false,
		hasReturnButton: true,
		sections: [],
		footerPrimaryButton: (
			<Button
				w="100%"
				variant="delete"
				onClick={() => {
					triggerDisable2faMethodMutation('MOBILE')
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

export default SettingsAccount2FAEdgarDisablePage;
