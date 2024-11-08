import { type Dispatch, type SetStateAction, useEffect, useRef, useState } from 'react';
import {
	Box,
	HStack,
	Icon,
	Input,
	InputGroup,
	InputRightElement,
	Stack,
	Text,
	useBreakpointValue,
	useTimeout,
	VStack,
} from '@chakra-ui/react';
import Avatar from 'boring-avatars';

import ChatMessageGroup from 'components/dashboardPages/chat/ChatMessageGroup';

import { useAuthContext } from 'contexts/auth';
import { useChatContext } from 'contexts/chat';

import { useGetDoctorByIdQuery } from 'services/request/doctor';

import groupMessagesPerDay from 'utils/app/dashboard/chat/groupMessagesPerDay';
import getLastUnseenMessage from 'utils/app/dashboard/chat/getLastUnseenMessage';

import { type ChatType } from 'types/dashboard/chat/ChatType';

import SmallLeftArrowIcon from 'assets/icons/Arrow/Small/SmallLeftArrowIcon';
import PaperPlaneIcon from 'assets/icons/PaperPlaneIcon';

import colors from 'theme/foundations/colors';

const ChatMessages = ({
	chat,
	setSelectedChatId,
}: {
	chat: ChatType;
	setSelectedChatId: Dispatch<SetStateAction<string>>;
}): JSX.Element => {
	const { auth } = useAuthContext();
	const { actions } = useChatContext();

	const recipient = chat?.participants.filter((participant) => participant.participantId !== auth.getId())[0];
	const { data: doctorInfo } = useGetDoctorByIdQuery(recipient?.participantId);

	const [inputChatMessage, setInputChatMessage] = useState('');
	const inputChatRef = useRef<HTMLDivElement | null>(null);

	const isRecipientListDisplayed = useBreakpointValue({ base: false, '2xl': true });

	const groupedMessages = groupMessagesPerDay(chat.messages);
	const userLastSeen =
		chat?.participants.find((participant) => participant.participantId === auth.getId())?.lastSeen ||
		new Date('2024-01-01').getTime();
	const lastUnseenMessage = getLastUnseenMessage(chat.messages, userLastSeen);

	const submitMessage = () => {
		if (inputChatMessage) {
			actions.sendMessage(inputChatMessage, chat.id);
			setInputChatMessage('');
		}
	};

	useEffect(() => {
		inputChatRef.current?.scrollIntoView({
			behavior: 'instant',
			block: 'end',
		});
	}, [chat]);

	useTimeout(() => {
		actions.readChat(chat.id);
	}, 3000);

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
				<Stack
					direction={{ base: 'column', lg: 'row' }}
					spacing={{ base: '16px', lg: '8px' }}
					w="100%"
					justify={isRecipientListDisplayed ? 'center' : 'space-between'}
				>
					{!isRecipientListDisplayed && (
						<HStack onClick={() => setSelectedChatId('')} cursor="pointer">
							<Icon as={SmallLeftArrowIcon} w="12px" h="12px" />
							<Text size={{ base: 'boldSm', md: 'boldMd' }}>Revenir à la messagerie</Text>
						</HStack>
					)}
					<HStack spacing="16px">
						<Avatar
							size={28}
							name={`${doctorInfo?.firstname} ${doctorInfo?.name.toUpperCase()}`}
							variant="beam"
							colors={[colors.green[600], colors.green[200], colors.green[500]]}
						/>
						<Text size={{ base: 'boldMd', sm: 'boldLg', md: 'boldXl' }}>
							Docteur {doctorInfo?.name.toUpperCase()}
						</Text>
					</HStack>
					{!isRecipientListDisplayed && <Box as="span" w="180px" />}
				</Stack>
				<Box as="span" w="100%" h="2px" bg="blue.100" />
				<VStack
					w="100%"
					spacing="32px"
					justify="space-between"
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
					<VStack w="100%" spacing="16px">
						{Object.entries(groupedMessages).map(([day, messages], index) => (
							<VStack w="100%" spacing="16px" key={day}>
								{index !== 0 && <Box as="span" w="100%" h="2px" bg="blue.100" />}
								<ChatMessageGroup day={day} messages={messages} lastUnseenMessage={lastUnseenMessage} />
							</VStack>
						))}
					</VStack>
					<InputGroup w="100%" ref={inputChatRef}>
						<Input
							maxLength={500}
							placeholder="Ecrivez votre message ici..."
							value={inputChatMessage}
							onChange={(e) => setInputChatMessage(e.target.value)}
							onKeyDown={(e) => {
								if (!e.shiftKey && e.key === 'Enter') submitMessage();
							}}
						/>
						<InputRightElement>
							<Icon
								as={PaperPlaneIcon}
								w="16px"
								h="16px"
								color="blue.950"
								cursor={inputChatMessage ? 'pointer' : 'not-allowed'}
								onClick={submitMessage}
							/>
						</InputRightElement>
					</InputGroup>
				</VStack>
			</VStack>
		</VStack>
	);
};

export default ChatMessages;
