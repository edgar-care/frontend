import { Button } from '@chakra-ui/react';

import type { SettingsPageType } from 'types/navigation/SettingsPageType';

import ShieldIllustration from 'assets/illustrations/ShieldIllustration';

const SettingsAccountBackupCodesInfoPage = (onNext: () => void): SettingsPageType => ({
	headerTitle: 'Vos codes de sauvegarde',
	headerSubtitle: `Vous avez déjà consulté vos codes de sauvegarde. Par sourcis de sécurité vous ne pouvez consulter vos code de sauvegarde qu’une seule fois, lors de la génération de ceux-ci.`,
	headerIcon: ShieldIllustration,
	hasProfileBanner: false,
	hasReturnButton: true,
	sections: [],
	footerPrimaryButton: (
		<Button w="100%" onClick={onNext}>
			Générer de nouveaux codes
		</Button>
	),
});

export default SettingsAccountBackupCodesInfoPage;
