import { useState } from 'react';
import { Button, Icon, Input, InputGroup, InputLeftElement, InputRightElement, VStack } from '@chakra-ui/react';
import { IoSendSharp } from 'react-icons/io5';
import { BsFillMicFill } from 'react-icons/bs';
import Link from 'next/link';

import { useChatContext } from 'contexts/chat';

import { ChatMessageType } from 'types/simulationPage/ChatMessageType';
import { SymptomsType } from 'types/SymptomsType';
import { SymptomsContextType } from 'types/SymptomsContextType';

import colors from 'theme/foundations/colors';

import ChatMessageCard from './ChatMessageCard';

const ChatBox = () => {
	const chat = useChatContext();

	const [messages, setMessages] = useState<ChatMessageType[]>([
		{
			message: 'Bonjour, pouvez-vous me dire où vous avez mal ?',
			createdAt: new Date(),
			isUserSender: false,
		},
	]);
	const [pendingMessage, setPendingMessage] = useState('');
	const [symptoms, setSymptoms] = useState<SymptomsType[]>([]);
	const [context, setContext] = useState<SymptomsContextType[]>([]);
	const [isDone, setIsDone] = useState(false);

	const sendMessage = async (): Promise<void> => {
		if (pendingMessage) {
			const message = await chat.sendMessage(pendingMessage, symptoms, context);
			setIsDone(message.isDone);
			setSymptoms(message.symptoms);
			setContext(message.context);
			setMessages([
				...messages,
				{
					message: pendingMessage,
					createdAt: new Date(),
					isUserSender: true,
				},
				{
					message: message.question,
					createdAt: new Date(),
					isUserSender: false,
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
				{messages.map((message, index) => (
					<ChatMessageCard message={message} key={index} />
				))}
				{isDone && (
					<Link href="/simulation/doctor">
						<Button size="lg">Continuer ma simulation</Button>
					</Link>
				)}
			</VStack>
			<InputGroup h="48px">
				<InputLeftElement
					children={
						<VStack borderRadius="16px" bg="blue.800" p="8px" cursor={isDone ? 'not-allowed' : 'pointer'}>
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
					isDisabled={isDone}
					onKeyUp={(e) => {
						if (e.key === 'Enter') sendMessage();
					}}
					onChange={(e) => setPendingMessage(e.target.value)}
				/>
				<InputRightElement
					children={
						<VStack
							borderRadius="16px"
							bg="blue.800"
							p="8px"
							cursor={isDone ? 'not-allowed' : 'pointer'}
							onClick={!isDone ? sendMessage : undefined}
						>
							<Icon as={IoSendSharp} color="white" w="16px" />
						</VStack>
					}
				/>
			</InputGroup>
		</VStack>
	);
};

export default ChatBox;
