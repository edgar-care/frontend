import type { SettingsPageType } from 'types/navigation/SettingsPageType';

import ShieldIllustration from 'assets/illustrations/ShieldIllustration';

const settingsAccount2FAPage = (
	emailMethod: boolean,
	edgarMethod: boolean,
	rdPartyMethod: boolean,
): SettingsPageType => ({
	headerTitle: 'Méthode de double authentification',
	headerSubtitle: 'Paramétrer vos méthodes de double authentification.',
	headerIcon: ShieldIllustration,
	hasProfileBanner: false,
	hasReturnButton: true,
	sections: [
		{
			name: 'Paramètre du compte',
			tabs: [
				{
					name: 'Double authentification via email',
					badge: emailMethod ? 'Activée' : 'Désactivée',
					badgeStyle: emailMethod ? 'green' : 'red',
					hasChevron: true,
					pageIndex: emailMethod ? 'settingsAccount2faEmailDisable' : 'settingsAccount2faEmailEnable',
				},
				{
					name: 'Double authentification via application tierces',
					badge: rdPartyMethod ? 'Activée' : 'Désactivée',
					badgeStyle: rdPartyMethod ? 'green' : 'red',
					hasChevron: true,
					pageIndex: rdPartyMethod
						? 'settingsAccount2fa3rdPartyDisable'
						: 'settingsAccount2fa3rdPartyEnableQRCode',
				},
				{
					name: 'Double authentification via application edgar',
					badge: edgarMethod ? 'Activée' : 'Désactivée',
					badgeStyle: edgarMethod ? 'green' : 'red',
					hasChevron: true,
					pageIndex: edgarMethod ? 'settingsAccount2faEdgar' : 'settingsAccount2faEdgarEnable',
				},
			],
		},
	],
});

export default settingsAccount2FAPage;
