import { Button, HStack, Icon, Text } from '@chakra-ui/react';
import type { IconProps } from '@chakra-ui/icons';
import type { ComponentWithAs } from '@chakra-ui/system';

const PatientAddPrescriptionButton = ({
	icon,
	variant,
	children,
	onClick,
}: {
	icon: ComponentWithAs<'svg', IconProps>;
	variant: 'BLUE' | 'RED';
	children: string;
	onClick: () => void;
}): JSX.Element => (
	<Button
		variant="fullGhost"
		p="4px 8px"
		_hover={{ bg: variant === 'BLUE' ? 'blue.100' : 'red.100' }}
		borderRadius="8px"
		role="group"
		onClick={onClick}
	>
		<HStack w="100%">
			<Icon
				as={icon}
				w="16px"
				h="auto"
				color="gray.500"
				_groupHover={{ color: variant === 'BLUE' ? 'blue.700' : 'red.700' }}
			/>
			<Text size="sm" color="gray.500" _groupHover={{ color: variant === 'BLUE' ? 'blue.700' : 'red.700' }}>
				{children}
			</Text>
		</HStack>
	</Button>
);

export default PatientAddPrescriptionButton;
