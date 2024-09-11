import { Button } from '@chakra-ui/react';
import DeleteAccountIllustration from 'assets/illustrations/DeleteAccountIllustration';
import type { SettingsPageType } from 'types/navigation/SettingsPageType';

const SettingsAccountDeletePage = (onCancel: () => void): SettingsPageType => ({
	headerTitle: 'Supprimer votre compte',
	headerSubtitle:
		'Vos données seront supprimées dans 30 jours. Jusqu’à ces 30 jours, vous recevrez régulièrement des mails pour vous indiquer du temps restant avant la suppression de vos données.',
	headerIcon: DeleteAccountIllustration,
	hasProfileBanner: false,
	hasReturnButton: true,
	sections: [],
	footerPrimaryButton: (
		<Button w="100%" variant="delete" isDisabled>
			Supprimer le compte
		</Button>
	),
	footerSecondaryButton: (
		<Button variant="secondary" w="100%" onClick={() => onCancel()}>
			Annuler
		</Button>
	),
});

export default SettingsAccountDeletePage;
