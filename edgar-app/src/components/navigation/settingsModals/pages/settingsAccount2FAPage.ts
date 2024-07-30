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
					pageIndex: emailMethod ? 'settings-account-2fa-emailDisable' : 'settings-account-2fa-emailEnable',
				},
				{
					name: 'Double authentification via application tierces',
					badge: rdPartyMethod ? 'Activée' : 'Désactivée',
					badgeStyle: rdPartyMethod ? 'green' : 'red',
					hasChevron: true,
					pageIndex: rdPartyMethod
						? 'settings-account-2fa-rdPartyDisable'
						: 'settings-account-2fa-rdPartyEnable',
				},
				{
					name: 'Double authentification via application edgar',
					badge: edgarMethod ? 'Activée' : 'Désactivée',
					badgeStyle: edgarMethod ? 'green' : 'red',
					hasChevron: true,
					pageIndex: edgarMethod ? 'settings-account-2fa-edgar' : 'settings-account-2fa-edgarEnable',
				},
			],
		},
	],
});

export default settingsAccount2FAPage;
