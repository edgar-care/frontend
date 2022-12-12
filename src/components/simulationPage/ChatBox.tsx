import { useState } from 'react';
import { Icon, Input, InputGroup, InputLeftElement, InputRightElement, VStack } from '@chakra-ui/react';
import { IoSendSharp } from 'react-icons/io5';
import { BsFillMicFill } from 'react-icons/bs';

import { ChatMessageType } from 'types/simulationPage/ChatMessageType';
import ChatMessageCard from './ChatMessageCard';
import colors from '../../theme/foundations/colors';

const ChatBox = () => {
	const [messages, setMessage] = useState<ChatMessageType[]>([
		{
			message: 'Bonjour, pouvez-vous me dire où vous avez mal ?',
			createdAt: new Date(),
			isUserSender: false,
		},
		{
			message: "Bonjour, j'ai mal à la tête",
			createdAt: new Date(),
			isUserSender: true,
		},
		{
			message: 'Pouvez-vous me dire si vous avez des nausées ?',
			createdAt: new Date(),
			isUserSender: false,
		},
		{
			message: 'Oui, j’ai des nausées',
			createdAt: new Date(),
			isUserSender: true,
		},
		{
			message: 'Pouvez-vous me dire si vous avez des vomissements ?',
			createdAt: new Date(),
			isUserSender: false,
		},
	]);
	const [pendingMessage, setPendingMessage] = useState('');

	const sendMessage = (): void => {
		if (pendingMessage) {
			setMessage([
				...messages,
				{
					message: pendingMessage,
					createdAt: new Date(),
					isUserSender: true,
				},
			]);
			setPendingMessage('');
		}
	};

	return (
		<VStack
			borderRadius="16px"
			w="500px"
			h="600px"
			bg="blue.100"
			border={`1px solid ${colors.blue[200]}`}
			p="32px"
			pb="16px"
		>
			<VStack
				h="100%"
				w="100%"
				spacing="24px"
				overflowY="scroll"
				px="8px"
				mb="16px"
				sx={{
					'::-webkit-scrollbar': {
						width: '4px',
					},
					'::-webkit-scrollbar-track': {
						background: '#F1F1F1',
					},
					'::-webkit-scrollbar-thumb': {
						background: '#CCC',
					},
					'::-webkit-scrollbar-thumb:hover': {
						background: '#888',
					},
					scrollbarWidth: 'thin',
					scrollbarColor: '#CCC #F1F1F1',
				}}
			>
				{messages.map((message) => (
					<ChatMessageCard message={message} />
				))}
			</VStack>
			<InputGroup h="48px">
				<InputLeftElement
					children={
						<VStack borderRadius="16px" bg="blue.800" p="8px" cursor="pointer">
							<Icon as={BsFillMicFill} color="white" w="16px" />
						</VStack>
					}
				/>
				<Input
					borderRadius="16px"
					placeholder="Écrivez votre message ici"
					focusBorderColor="white"
					bg="white"
					borderColor="white"
					variant="outline"
					color="black"
					value={pendingMessage}
					onKeyUp={(e) => {
						if (e.key === 'Enter') sendMessage();
					}}
					onChange={(e) => setPendingMessage(e.target.value)}
				/>
				<InputRightElement
					children={
						<VStack borderRadius="16px" bg="blue.800" p="8px" cursor="pointer" onClick={sendMessage}>
							<Icon as={IoSendSharp} color="white" w="16px" />
						</VStack>
					}
				/>
			</InputGroup>
		</VStack>
	);
};

export default ChatBox;
