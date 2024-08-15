import { HStack, Icon, Text, VStack } from '@chakra-ui/react';
import type { ComponentWithAs } from '@chakra-ui/system';
import type { IconProps } from '@chakra-ui/icons';

import type { DeviceType } from 'types/dashboard/devices/DeviceType';
import type { DeviceTypeType } from 'types/dashboard/devices/DeviceTypeType';

import DeviceComputerIcon from 'assets/icons/Devices/DeviceComputerIcon';
import DevicePhoneIcon from 'assets/icons/Devices/DevicePhoneIcon';
import RightChevronIcon from 'assets/icons/Chevron/RightChevronIcon';
import CrossIcon from 'assets/icons/CrossIcon';

import deviceFormatTime from 'utils/app/dashboard/devices/deviceFormatTime';

const DeviceCard = ({
	device,
	hasChevronIcon,
	hasCrossIcon,
	isClicked,
	onClick,
}: {
	device: DeviceType;
	hasChevronIcon?: boolean;
	hasCrossIcon?: boolean;
	isClicked?: boolean;
	onClick: () => void;
}): JSX.Element => {
	const deviceIcon: Record<DeviceTypeType, ComponentWithAs<'svg', IconProps>> = {
		MOBILE: DevicePhoneIcon,
		DESKTOP: DeviceComputerIcon,
	};

	return (
		<HStack
			w="100%"
			justify="space-between"
			borderRadius="8px"
			p="8px"
			pr={hasChevronIcon && !isClicked ? '16px' : '8px'}
			cursor={hasChevronIcon ? 'pointer' : 'default'}
			bg={isClicked ? 'blue.100' : 'transparent'}
			transition="all .3s ease-in-out"
			_hover={{
				bg: 'blue.50',
				pr: '8px',
			}}
			onClick={onClick}
		>
			<HStack spacing="16px">
				<Icon as={deviceIcon[device.type]} w="20px" h="auto" />
				<VStack spacing="0px" align="start">
					<Text size="boldMd">{device.name}</Text>
					<Text size="sm">{device.location}</Text>
					<Text size="sm">{deviceFormatTime(device.lastConnectedTime)}</Text>
				</VStack>
			</HStack>
			{hasChevronIcon && <Icon as={RightChevronIcon} w="auto" h="12px" />}
			{hasCrossIcon && <Icon as={CrossIcon} w="auto" h="12px" cursor="pointer" onClick={onClick} />}
		</HStack>
	);
};

export default DeviceCard;
