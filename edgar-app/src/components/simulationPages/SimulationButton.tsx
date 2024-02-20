import { Button, useDisclosure, Text, Icon, HStack } from '@chakra-ui/react';

import RightCircleArrowIcon from 'assets/icons/Arrow/Circle/RightCircleArrowIcon';
import RightCircleArrowFillIcon from 'assets/icons/Arrow/Circle/RightCircleArrowFillIcon';

const SimulationButton = ({ children }: { children: string }): JSX.Element => {
	const { isOpen: isHover, onOpen: onHoverOpen, onClose: onHoverClose } = useDisclosure();

	return (
		<Button
			p="8px 16px"
			borderRadius="32px"
			onMouseEnter={onHoverOpen}
			onMouseLeave={onHoverClose}
			cursor="pointer"
			_hover={{ bg: 'white' }}
			role="group"
		>
			<HStack w="100%" spacing="16px">
				<Text size="boldXl" color="white" _groupHover={{ color: 'blue.700' }}>
					{children}
				</Text>
				{isHover ? (
					<Icon as={RightCircleArrowFillIcon} w="24px" h="24px" color="blue.700" />
				) : (
					<Icon as={RightCircleArrowIcon} w="24px" h="24px" color="white" />
				)}
			</HStack>
		</Button>
	);
};

export default SimulationButton;
