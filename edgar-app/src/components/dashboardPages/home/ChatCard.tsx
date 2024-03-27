import { Box, HStack, Icon, Text, VStack, useDisclosure } from '@chakra-ui/react';

import CircleRightArrowIcon from 'assets/icons/Arrow/Circle/CircleRightArrowIcon';

import CircleZeroIcon from 'assets/icons/CircleNumber/CircleZeroIcon';
import CircleOneIcon from 'assets/icons/CircleNumber/CircleOneIcon';
import CircleTwoIcon from 'assets/icons/CircleNumber/CircleTwoIcon';
import CircleThreeIcon from 'assets/icons/CircleNumber/CircleThreeIcon';
import CircleFourIcon from 'assets/icons/CircleNumber/CircleFourIcon';
import CircleFiveIcon from 'assets/icons/CircleNumber/CircleFiveIcon';
import CircleSixIcon from 'assets/icons/CircleNumber/CircleSixIcon';
import CircleSevenIcon from 'assets/icons/CircleNumber/CircleSevenIcon';
import CircleEightIcon from 'assets/icons/CircleNumber/CircleEightIcon';
import CircleNineIcon from 'assets/icons/CircleNumber/CircleNineIcon';
import CirclePlusIcon from 'assets/icons/CircleNumber/CirclePlusIcon';

import { useGetPatientMedicalFolderQuery } from 'services/request/medical';

import { MessageType } from 'types/dashboard/home/MessageType';

const ChatCard = ({ message }: { message: MessageType }): JSX.Element => {
	const { isOpen: isHover, onOpen: onHoverOpen, onClose: onHoverClose } = useDisclosure();
	const { data: medicalFolder } = useGetPatientMedicalFolderQuery();
	const icons = [
		CircleZeroIcon,
		CircleOneIcon,
		CircleTwoIcon,
		CircleThreeIcon,
		CircleFourIcon,
		CircleFiveIcon,
		CircleSixIcon,
		CircleSevenIcon,
		CircleEightIcon,
		CircleNineIcon,
	];

	return (
		<HStack
			bg="blue.100"
			w="100%"
			borderRadius="16px"
			border="2px"
			borderColor="blue.200"
			spacing="8px"
			onMouseEnter={onHoverOpen}
			onMouseLeave={onHoverClose}
		>
			<HStack w="100%" bg="white" borderRadius="16px" p="8px 16px" justify="space-between">
				<HStack spacing="8px">
					<Box borderRadius="50%" bg="green.300" w="28px" h="28px" />
					<VStack align="start" spacing="0px">
						<HStack spacing="4px">
							<Text size="boldMd">{message.sender}</Text>
							{message.sender === medicalFolder?.primaryDoctorId && (
								<Text
									fontStyle="italic"
									fontSize="12"
									color="grey.500"
									fontWeight="500"
									lineHeight="18px"
								>
									- Médecin généraliste
								</Text>
							)}
						</HStack>
						<Text fontStyle="italic" fontSize="12" color="grey.500" fontWeight="500" lineHeight="18px">
							{message.lastMessage}
						</Text>
					</VStack>
				</HStack>
				<VStack spacing="4px" align="end">
					<Text fontStyle="italic" fontSize="12" color="grey.500" fontWeight="500" lineHeight="18px">
						{new Date(message.date).toLocaleDateString('fr-FR', {
							month: 'short',
							day: 'numeric',
						})}
					</Text>
					<Box
						borderRadius="50%"
						w="16px"
						h="16px"
						bg="white"
						display="flex"
						justifyContent="center"
						alignItems="center"
					>
						{message.notifications > 9 ? (
							<Icon as={CirclePlusIcon} w="16px" h="16px" color="blue.700" />
						) : (
							<Icon as={icons[message.notifications]} w="16px" h="16px" color="blue.700" />
						)}
					</Box>
				</VStack>
			</HStack>
			{isHover && (
				<HStack justify="start">
					<Icon as={CircleRightArrowIcon} w="20px" h="20px" color="blue.700" m="0px 10px 0px 0px" />
				</HStack>
			)}
		</HStack>
	);
};

export default ChatCard;
