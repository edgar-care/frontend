import type { ComponentWithAs } from '@chakra-ui/system';
import type { IconProps } from '@chakra-ui/icons';

import type { DeviceTypeType } from 'types/dashboard/devices/DeviceTypeType';

import DevicePhoneIcon from 'assets/icons/Devices/DevicePhoneIcon';
import DeviceComputerIcon from 'assets/icons/Devices/DeviceComputerIcon';

const deviceIcon: Record<DeviceTypeType, ComponentWithAs<'svg', IconProps>> = {
	Windows: DeviceComputerIcon,
	MacOs: DeviceComputerIcon,
	Linux: DeviceComputerIcon,
	iPhone: DevicePhoneIcon,
	Android: DevicePhoneIcon,
	Other: DevicePhoneIcon,
};

export default deviceIcon;
