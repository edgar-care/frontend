import { type IconType } from 'react-icons';
import { type ComponentWithAs } from '@chakra-ui/system';
import { type IconProps } from '@chakra-ui/icons';

export type ProfileTabType = {
	name: string;
	icon: ComponentWithAs<'svg', IconProps> | IconType;
	action: () => void;
};
