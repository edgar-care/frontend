import type { SettingsPageType } from 'types/navigation/SettingsPageType';

import SettingsIllustration from 'assets/illustrations/SettingsIllustration';

const settingsAccountPage = (
	emailAddress: string,
	authenticationEnabled: boolean,
	backupCodeGenerated: boolean,
): SettingsPageType => ({
	headerTitle: 'Personnalisation de votre compte',
	headerSubtitle: 'Modifier, configurer et personnaliser toutes les options liées à votre compte.',
	headerIcon: SettingsIllustration,
	hasProfileBanner: true,
	hasReturnButton: true,
	sections: [
		{
			name: 'Paramètre du compte',
			tabs: [
				{
					name: 'Email',
					placeholder: emailAddress,
					hasChevron: false,
				},
				{
					name: 'Mot de passe',
					hasChevron: true,
					pageIndex: 'settings-account-resetPassword',
				},
			],
		},
		{
			name: 'Sécurité du compte',
			tabs: [
				{
					name: 'Double authentification',
					badge: authenticationEnabled ? 'Activée' : 'Désactivée',
					badgeStyle: authenticationEnabled ? 'green' : 'red',
					hasChevron: true,
					pageIndex: 'settings-account-2fa',
				},
				{
					name: 'Codes de sauvegarde',
					badge: backupCodeGenerated ? 'Consultés' : 'Non consultés',
					badgeStyle: backupCodeGenerated ? 'green' : 'red',
					hasChevron: true,
					pageIndex: 'settings-account-backupCodes',
				},
			],
		},
		{
			name: 'Gestion du compte',
			tabs: [
				{
					name: 'Désactiver le compte',
					hasChevron: false,
					pageIndex: 'settings-account-disable',
				},
				{
					name: 'Supprimer le compte',
					hasChevron: false,
					danger: true,
					pageIndex: 'settings-account-delete',
				},
			],
		},
	],
});

export default settingsAccountPage;
