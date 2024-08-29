import type { ComponentWithAs } from '@chakra-ui/system';
import type { IconProps } from '@chakra-ui/icons';

import type { DeviceTypeType } from 'types/dashboard/devices/DeviceTypeType';

import DevicePhoneIcon from 'assets/icons/Devices/DevicePhoneIcon';
import DeviceComputerIcon from 'assets/icons/Devices/DeviceComputerIcon';

const deviceIcon: Record<DeviceTypeType, ComponentWithAs<'svg', IconProps>> = {
	MOBILE: DevicePhoneIcon,
	DESKTOP: DeviceComputerIcon,
};

export default deviceIcon;
