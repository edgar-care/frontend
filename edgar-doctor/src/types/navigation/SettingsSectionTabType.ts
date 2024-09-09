import { type IconType } from 'react-icons';
import { type ComponentWithAs } from '@chakra-ui/system';
import { type IconProps } from '@chakra-ui/icons';

export type SettingsSectionTabType = {
	name: string;
	icon?: ComponentWithAs<'svg', IconProps> | IconType;
	placeholder?: string;
	badge?: string;
	badgeStyle?: 'green' | 'red';
	hasChevron: boolean;
	danger?: boolean;
	pageIndex?: string;
};
