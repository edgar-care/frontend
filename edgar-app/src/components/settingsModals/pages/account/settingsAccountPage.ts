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
					pageIndex: 'settingsAccountResetPassword',
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
					pageIndex: 'settingsAccount2fa',
				},
				{
					name: 'Codes de sauvegarde',
					badge: backupCodeGenerated ? 'Consultés' : 'Non consultés',
					badgeStyle: backupCodeGenerated ? 'green' : 'red',
					hasChevron: true,
					pageIndex: backupCodeGenerated
						? 'settingsAccountBackupCodesInfo'
						: 'settingsAccountBackupCodesActivation',
				},
			],
		},
		{
			name: 'Gestion du compte',
			tabs: [
				{
					name: 'Désactiver le compte',
					hasChevron: false,
					pageIndex: 'settingsAccountDisable',
				},
				{
					name: 'Supprimer le compte',
					hasChevron: false,
					danger: true,
					pageIndex: 'settingsAccountDelete',
				},
			],
		},
	],
});

export default settingsAccountPage;
