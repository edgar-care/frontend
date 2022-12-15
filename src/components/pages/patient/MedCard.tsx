import { HStack, Icon, Text, useDisclosure, VStack } from '@chakra-ui/react';
import { BsCalendarPlus } from 'react-icons/bs';
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
				<VStack
					borderRadius="8px"
					role="group"
					border="2px"
					borderColor="grey.200"
					bg="grey.100"
					p="8px"
					cursor="pointer"
					onClick={() => onOpen()}
					_hover={{
						bg: 'grey.500',
						borderColor: 'grey.600',
					}}
				>
					<Icon
						as={BsCalendarPlus}
						color="black"
						_groupHover={{
							color: 'white',
						}}
						w="16px"
					/>
				</VStack>
			</HStack>
		</HStack>
	);
};

export default MedCard;
