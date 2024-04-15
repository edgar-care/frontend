import { Text, HStack, Icon, Button, useDisclosure } from '@chakra-ui/react';

import RightCircleArrowFillIcon from 'assets/icons/Arrow/Circle/RightCircleArrowFillIcon';
import RightCircleArrowIcon from 'assets/icons/Arrow/Circle/RightCircleArrowIcon';

const SimulationButton = ({
	children,
	variant = 'WHITE',
}: {
	children: string;
	variant?: 'BLUE' | 'WHITE';
}): JSX.Element => {
	const { isOpen: isHover, onOpen: onHoverOpen, onClose: onHoverClose } = useDisclosure();

	return (
		<Button
			variant="fullGhost"
			borderRadius="32px"
			p="8px 16px"
			_hover={{ bg: variant === 'WHITE' ? 'white' : 'blue.700' }}
			onMouseEnter={onHoverOpen}
			onMouseLeave={onHoverClose}
			role="group"
		>
			<HStack w="100%" spacing="16px">
				<Text
					size={{ base: 'boldLg', sm: 'boldXl' }}
					color={variant === 'WHITE' ? 'white' : 'black'}
					_groupHover={{ color: variant === 'WHITE' ? 'blue.700' : 'white' }}
				>
					{children}
				</Text>
				<Icon
					as={isHover ? RightCircleArrowFillIcon : RightCircleArrowIcon}
					w="24px"
					h="24px"
					color={variant === 'WHITE' ? 'white' : 'black'}
					_groupHover={{ color: variant === 'WHITE' ? 'blue.700' : 'white' }}
				/>
			</HStack>
		</Button>
	);
};

export default SimulationButton;
