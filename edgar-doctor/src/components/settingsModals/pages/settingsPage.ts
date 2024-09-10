import type { SettingsPageType } from 'types/navigation/SettingsPageType';

import PersonFillIcon from 'assets/icons/PersonFillIcon';
import ComputerIcon from 'assets/icons/ComputerIcon';
import SettingsIllustration from 'assets/illustrations/SettingsIllustration';

const settingsPage: SettingsPageType = {
	headerTitle: 'Personnalisation de votre expérience avec edgar',
	headerSubtitle: 'Modifier, configurer et personnaliser toutes les options liées à votre compte.',
	headerIcon: SettingsIllustration,
	hasProfileBanner: true,
	sections: [
		{
			name: 'Paramètre du compte',
			tabs: [
				{
					name: 'Compte',
					icon: PersonFillIcon,
					hasChevron: true,
					pageIndex: 'settingsAccount',
				},
				{
					name: 'Appareils',
					icon: ComputerIcon,
					hasChevron: true,
					pageIndex: 'settingsDevices',
				},
			],
		},
	],
};

export default settingsPage;
