import { type ComponentWithAs } from '@chakra-ui/system';
import { type IconProps } from '@chakra-ui/icons';
import { type IconType } from 'react-icons';

export type PatientsSubViewNavigationTabType = {
	name: string;
	icon: ComponentWithAs<'svg', IconProps> | IconType;
	id: string;
};
