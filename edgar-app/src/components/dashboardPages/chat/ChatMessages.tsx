import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import Avatar from 'boring-avatars';

import ChatMessageGroup from 'components/dashboardPages/chat/ChatMessageGroup';

import { useAuthContext } from 'contexts/auth';

import { useGetDoctorByIdQuery } from 'services/request/doctor';

import groupMessagesPerDay from 'utils/app/dashboard/chat/groupMessagesPerDay';
import getLastUnseenMessage from 'utils/app/dashboard/chat/getLastUnseenMessage';

import { type ChatType } from 'types/dashboard/chat/ChatType';

import colors from 'theme/foundations/colors';

const ChatMessages = ({ chat }: { chat: ChatType }): JSX.Element => {
	const auth = useAuthContext();
	const recipient = chat?.participants.filter((participant) => participant.participantId !== auth.getId())[0];

	const { data: doctorInfo } = useGetDoctorByIdQuery(recipient?.participantId);

	const groupedMessages = groupMessagesPerDay(chat.messages);

	const userLastSeen =
		chat?.participants.find((participant) => participant.participantId === auth.getId())?.lastSeen ||
		new Date('2024-01-01').getTime();
	const lastUnseenMessage = getLastUnseenMessage(chat.messages, userLastSeen);

	return (
		<VStack
			w="100%"
			h="100%"
			p="16px"
			bg="white"
			justify="space-between"
			borderRadius="16px"
			border="2px solid"
			borderColor="blue.200"
		>
			<VStack w="100%" h="100%">
				<HStack spacing="16px">
					<Avatar
						size={28}
						name={`${doctorInfo?.firstname} ${doctorInfo?.name.toUpperCase()}`}
						variant="beam"
						colors={[colors.green[600], colors.green[200], colors.green[500]]}
					/>
					<Text size="boldXl">Docteur {doctorInfo?.name.toUpperCase()}</Text>
				</HStack>
				<Box as="span" w="100%" h="2px" bg="blue.100" />
				<VStack
					w="100%"
					spacing="16px"
					h="100%"
					overflowY="auto"
					pr="8px"
					sx={{
						'::-webkit-scrollbar': {
							width: '6px',
						},
						'::-webkit-scrollbar-track': {
							background: '#F1F1F1',
							marginTop: '32px',
							marginBottom: '32px',
						},
						'::-webkit-scrollbar-thumb': {
							background: 'grey.200',
							borderRadius: '8px',
						},
						'::-webkit-scrollbar-thumb:hover': {
							background: 'grey.300',
						},
						scrollbarWidth: 'thin',
						scrollbarColor: '#CCC #F1F1F1',
					}}
				>
					{Object.entries(groupedMessages).map(([day, messages], index) => (
						<VStack w="100%" spacing="16px">
							{index !== 0 && <Box as="span" w="100%" h="2px" bg="blue.100" />}
							<ChatMessageGroup
								key={day}
								day={day}
								messages={messages}
								lastUnseenMessage={lastUnseenMessage}
							/>
						</VStack>
					))}
				</VStack>
			</VStack>
		</VStack>
	);
};

export default ChatMessages;
