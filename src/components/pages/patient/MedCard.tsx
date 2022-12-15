import { HStack, Text, useDisclosure, VStack } from '@chakra-ui/react';
import { BsCalendarPlus } from 'react-icons/bs';
import ButtonIcon from './ButtonIcon';
import ModalChangeInfos from './ModalChangeInfos';

const MedCard = ({ name, date, hours }: { name: string; date: string; hours: string }): JSX.Element => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<HStack
			border="2px solid"
			borderColor="blue.200"
			justify="space-between"
			w="100%"
			borderRadius="16px"
			p="12px 24px"
			bg="white"
		>
			<ModalChangeInfos isOpen={isOpen} onClose={onClose} />
			<HStack>
				<Text size="boldLg">Dr.</Text>
				<Text size="lg">{name}</Text>
			</HStack>
			<HStack spacing="16px">
				<VStack borderRadius="8px" p="8px 16px" backgroundColor="purple.100">
					<Text size="boldLg">
						{date} à {hours}
					</Text>
				</VStack>
				<ButtonIcon icon={BsCalendarPlus} action={() => onOpen()} />
			</HStack>
		</HStack>
	);
};

export default MedCard;
