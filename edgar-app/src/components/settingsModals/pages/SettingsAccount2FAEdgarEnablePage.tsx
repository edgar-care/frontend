import { Button } from '@chakra-ui/react';

import type { SettingsPageType } from 'types/navigation/SettingsPageType';

import ShieldIllustration from 'assets/illustrations/ShieldIllustration';

const SettingsAccount2FAEdgarEnablePage = (onPrevious: () => void, onNext: () => void): SettingsPageType => {
	const onSubmit = () => {
		onNext();
	};

	return {
		headerTitle: 'Activer la double authentification avec edgar ?',
		headerSubtitle: 'Sélectionner un appareil ci-dessous, afin d’activer la double authentification sur celui-ci.',
		headerIcon: ShieldIllustration,
		hasProfileBanner: false,
		hasReturnButton: true,
		sections: [],

		footerPrimaryButton: (
			<Button w="100%" onClick={onSubmit}>
				Activer l’authentification
			</Button>
		),
		footerSecondaryButton: (
			<Button w="100%" variant="secondary" onClick={onPrevious}>
				Annuler
			</Button>
		),
	};
};

export default SettingsAccount2FAEdgarEnablePage;
