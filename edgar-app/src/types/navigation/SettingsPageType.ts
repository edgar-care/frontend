import type { ComponentWithAs } from '@chakra-ui/system';
import type { IconProps } from '@chakra-ui/icons';

import type { SettingsSectionType } from 'types/navigation/SettingsSectionType';

export type SettingsPageType = {
	headerTitle: string;
	headerSubtitle?: string;
	headerIcon: ComponentWithAs<'svg', IconProps>;
	bodyContent?: JSX.Element;
	hasProfileBanner: boolean;
	hasReturnButton?: boolean;
	sections: SettingsSectionType[];
	footerPrimaryButton?: JSX.Element;
	footerSecondaryButton?: JSX.Element;
};
