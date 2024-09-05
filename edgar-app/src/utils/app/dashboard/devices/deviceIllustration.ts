import type { ComponentWithAs } from '@chakra-ui/system';
import type { IconProps } from '@chakra-ui/icons';

import type { DeviceTypeType } from 'types/dashboard/devices/DeviceTypeType';

import DevicePhoneIllustration from 'assets/illustrations/devices/DevicePhoneIllustration';
import DeviceComputerIllustration from 'assets/illustrations/devices/DeviceComputerIllustration';

const deviceIllustration: Record<DeviceTypeType, ComponentWithAs<'svg', IconProps>> = {
	Windows: DeviceComputerIllustration,
	MacOs: DeviceComputerIllustration,
	Linux: DeviceComputerIllustration,
	iPhone: DevicePhoneIllustration,
	Android: DevicePhoneIllustration,
	Other: DevicePhoneIllustration,
};

export default deviceIllustration;
