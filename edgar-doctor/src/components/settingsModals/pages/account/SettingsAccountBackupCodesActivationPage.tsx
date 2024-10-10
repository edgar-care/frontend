import { Button } from '@chakra-ui/react';

import type { SettingsPageType } from 'types/navigation/SettingsPageType';

import ShieldIllustration from 'assets/illustrations/ShieldIllustration';

const SettingsAccountBackupCodesActivationPage = (onNext: () => void): SettingsPageType => ({
	headerTitle: 'Vos codes de sauvegarde',
	headerSubtitle: `Ajouter une méthode de double authentification pour générer vos codes de sauvegarde. Les codes de sauvegarde sont utilisés lorsque vous n'avez plus accès à votre appareil de double authentification.`,
	headerIcon: ShieldIllustration,
	hasProfileBanner: false,
	hasReturnButton: true,
	sections: [],
	footerPrimaryButton: (
		<Button w="100%" onClick={onNext}>
			Activer l'authentification
		</Button>
	),
});

export default SettingsAccountBackupCodesActivationPage;
