import { Button, useToast } from '@chakra-ui/react';
import DisableAccountIllustration from 'assets/illustrations/DisableAccountIllustration';
import { useDisableAccountMutation } from 'services/request/auth';
import type { SettingsPageType } from 'types/navigation/SettingsPageType';

const SettingsAccountDisablePage = (onCancel: () => void): SettingsPageType => {
	const [triggerDisableAccountMutation] = useDisableAccountMutation();

	const toast = useToast({ duration: 3000, isClosable: true });

	return {
		headerTitle: 'Désactiver votre compte',
		headerSubtitle:
			'Vous ne pourrez plus vous connecter à votre compte. Cependant vous pourrez le réactiver par la suite, si vous le souhaitez.',
		headerIcon: DisableAccountIllustration,
		hasProfileBanner: false,
		hasReturnButton: true,
		sections: [],
		footerPrimaryButton: (
			<Button
				w="100%"
				variant="delete"
				onClick={() => {
					triggerDisableAccountMutation()
						.unwrap()
						.then(() => {
							toast({
								title: 'Le compte à été désactivé',
								status: 'success',
							});
						})
						.catch(() => {
							toast({ title: 'Une erreur est survenue', status: 'error' });
						});
				}}
			>
				Désactiver le compte
			</Button>
		),
		footerSecondaryButton: (
			<Button variant="secondary" w="100%" onClick={() => onCancel()}>
				Annuler
			</Button>
		),
	};
};

export default SettingsAccountDisablePage;
