import { Box, HStack, Icon, Text, VStack, useDisclosure, Skeleton, useBreakpointValue } from '@chakra-ui/react';
import Avatar from 'boring-avatars';

import { useAuthContext } from 'contexts/auth';

import getNumberOfUnreadMessage from 'utils/app/dashboard/chat/getNumberOfUnreadMessage';

import { useGetPatientByIdQuery } from 'services/request/patients';

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

import { type ChatType } from 'types/app/dashboard/chat/ChatType';

import colors from 'theme/foundations/colors';

const ChatCard = ({ chat, onClick }: { chat: ChatType; onClick: () => void }): JSX.Element => {
	const { auth } = useAuthContext();
	const recipient = chat.participants.filter((participant) => participant.participantId !== auth.getId())[0];

	const { data: patientInfo } = useGetPatientByIdQuery(recipient.participantId);

	const { isOpen: isHover, onOpen: onHoverOpen, onClose: onHoverClose } = useDisclosure();

	const isSmallScreen = useBreakpointValue({ base: true, ssm2: false });

	const numberOfUnreadMessages = getNumberOfUnreadMessage(chat, auth.getId());

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
		<Skeleton isLoaded={patientInfo !== undefined} w="100%" borderRadius="8px">
			<HStack
				bg="blue.100"
				w="100%"
				borderRadius="16px"
				border="2px solid"
				borderColor="blue.200"
				spacing="8px"
				cursor="pointer"
				onMouseEnter={onHoverOpen}
				onMouseLeave={onHoverClose}
				onClick={onClick}
			>
				<HStack
					w="100%"
					bg="white"
					borderRadius="16px"
					p="8px 16px"
					boxShadow={`0px 0px 0px 2px ${colors.blue[200]}`}
					justify="space-between"
					spacing="16px"
					align="start"
				>
					<HStack spacing="8px">
						<Avatar
							size={28}
							name={`${patientInfo?.medicalInfos.firstname} ${patientInfo?.medicalInfos.name.toUpperCase()}`}
							variant="beam"
							colors={[colors.blue[700], colors.blue[200], colors.blue[500]]}
						/>
						<VStack align="start" spacing={{ base: '4px', sm2: '0px' }}>
							<Text size="boldMd">
								{patientInfo?.medicalInfos.firstname} {patientInfo?.medicalInfos.name.toUpperCase()}
							</Text>
							{!isSmallScreen && (
								<Text fontSize="12" color="grey.500" fontWeight="500" lineHeight="18px">
									{chat.messages.slice(-1)[0].message.slice(0, 40)}...
								</Text>
							)}
						</VStack>
					</HStack>
					<VStack spacing="4px" align="end">
						<Text fontSize="12" color="grey.500" fontWeight="500" lineHeight="18px" whiteSpace="nowrap">
							{new Date(chat.messages.slice(-1)[0].sentTime).toLocaleDateString('fr-FR', {
								month: 'short',
								day: 'numeric',
							})}
						</Text>
						{numberOfUnreadMessages > 0 && (
							<Box
								borderRadius="50%"
								w="16px"
								h="16px"
								bg="white"
								display="flex"
								justifyContent="center"
								alignItems="center"
							>
								{numberOfUnreadMessages > 9 ? (
									<Icon as={CirclePlusIcon} w="16px" h="16px" color="blue.700" />
								) : (
									<Icon as={icons[numberOfUnreadMessages]} w="16px" h="16px" color="blue.700" />
								)}
							</Box>
						)}
					</VStack>
				</HStack>
				{isHover && (
					<HStack justify="start">
						<Icon as={CircleRightArrowIcon} w="20px" h="20px" color="blue.700" m="0px 10px 0px 0px" />
					</HStack>
				)}
			</HStack>
		</Skeleton>
	);
};

export default ChatCard;
