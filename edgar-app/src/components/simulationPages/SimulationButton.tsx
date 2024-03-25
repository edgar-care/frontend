import { Text, HStack, Icon, Button, useDisclosure } from '@chakra-ui/react';

import RightCircleArrowIcon from 'assets/icons/Arrow/RightCircleArrowIcon';
import RightCircleArrowFillIcon from 'assets/icons/Arrow/RightCircleArrowFillIcon';

const SimulationButton = ({ text }: { text: string }): JSX.Element => {
	const { isOpen: isHover, onOpen: onHoverOpen, onClose: onHoverClose } = useDisclosure();

	return (
		<Button
			variant="fullGhost"
			borderRadius="32px"
			p="8px 16px"
			_hover={{ bg: 'white' }}
			onMouseEnter={onHoverOpen}
			onMouseLeave={onHoverClose}
			role="group"
		>
			<HStack w="100%" spacing="16px">
				<Text size="boldXl" color="white" _groupHover={{ color: 'blue.700' }}>
					{text}
				</Text>
				<Icon
					as={isHover ? RightCircleArrowFillIcon : RightCircleArrowIcon}
					w="24px"
					h="24px"
					color="white"
					_groupHover={{ color: 'blue.700' }}
				/>
			</HStack>
		</Button>
	);
};

export default SimulationButton;
