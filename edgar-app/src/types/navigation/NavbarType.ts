import { type IconType } from 'react-icons';
import { type ComponentWithAs } from '@chakra-ui/system';
import { type IconProps } from '@chakra-ui/icons';

export type NavbarTabType = {
	name: string;
	path: string;
	icon: ComponentWithAs<'svg', IconProps> | IconType;
	newPage?: boolean;
};
