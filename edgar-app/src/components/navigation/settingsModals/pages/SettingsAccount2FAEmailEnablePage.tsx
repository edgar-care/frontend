import { Button, useToast } from '@chakra-ui/react';

import { useEnable2faWithEmailMutation } from 'services/request/2fa';

import type { SettingsPageType } from 'types/navigation/SettingsPageType';

import ShieldIllustration from 'assets/illustrations/ShieldIllustration';

const SettingsAccount2FAEmailEnablePage = (emailAddress: string, onCancel: () => void): SettingsPageType => {
	const [triggerEnable2faWithEmailMutation] = useEnable2faWithEmailMutation();

	const toast = useToast({ duration: 3000, isClosable: true });

	return {
		headerTitle: 'Activer la double authentification par email ?',
		headerSubtitle: `L’adresse mail: ${emailAddress} sera utilisée comme méthode de double authentification.`,
		headerIcon: ShieldIllustration,
		hasProfileBanner: false,
		hasReturnButton: true,
		sections: [],
		footerPrimaryButton: (
			<Button
				w="100%"
				onClick={() => {
					triggerEnable2faWithEmailMutation()
						.unwrap()
						.then(() => {
							toast({
								title: 'La double authentification a bien été activée',
								status: 'success',
							});
							onCancel();
						})
						.catch(() => {
							toast({ title: 'Une erreur est survenue', status: 'error' });
						});
				}}
			>
				Activer l’authentification
			</Button>
		),
		footerSecondaryButton: (
			<Button variant="secondary" w="100%" onClick={() => onCancel()}>
				Annuler
			</Button>
		),
	};
};

export default SettingsAccount2FAEmailEnablePage;
