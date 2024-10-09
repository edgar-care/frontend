import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';
import { Button, Icon, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

import BetaWarningBanner from 'components/BetaWarningBanner';
import MirageLoader from 'components/simulationPages/chat/loader/MirageLoader';
import SimulationChatMessageGroup from 'components/simulationPages/chat/SimulationChatMessageGroup';

import { useDiagnoseDiagnosticMutation } from 'services/request/simulation';

import { type SimulationChatMessageType } from 'types/simulation/chat/SimulationChatMessageType';
import { type SimulationChatEdgarCardType } from 'types/simulation/chat/SimulationChatEdgarCardType';

import colors from 'theme/foundations/colors';

import SendIcon from 'assets/icons/SendIcon';

const SimulationChat = ({
	edgarState,
	setEdgarState,
}: {
	edgarState: SimulationChatEdgarCardType;
	setEdgarState: Dispatch<SetStateAction<SimulationChatEdgarCardType>>;
}): JSX.Element => {
	const [triggerDiagnoseDiagnostic] = useDiagnoseDiagnosticMutation();
	const [messages, setMessages] = useState<SimulationChatMessageType[]>([
		{
			message:
				'Bonjour, je m’appel Edgar et je serai votre assistant tout au long de cette simulation.\nPour commencer, pouvez-vous me dire où vous avez mal ?',
			createdAt: new Date(),
			isUserSender: false,
			isLastMessage: false,
		},
	]);
	const [displayedMessageIndex, setDisplayedMessageIndex] = useState(0);
	const [messageInput, setMessageInput] = useState('');
	const [sessionId, setSessionId] = useState('');

	const searchParams = useSearchParams();
	const router = useRouter();

	const submitMessage = () => {
		if (messageInput === '') return;
		const messageLength = messages.length;
		setMessages((prevMessages) => [
			...prevMessages,
			{ message: messageInput, createdAt: new Date(), isUserSender: true, isLastMessage: false },
		]);
		triggerDiagnoseDiagnostic({ id: sessionId, sentence: messageInput })
			.unwrap()
			.then((response) => {
				setMessages((prevMessages) => [
					...prevMessages,
					{
						message: response.question,
						createdAt: new Date(),
						isUserSender: false,
						isLastMessage: response.done,
					},
				]);
				setEdgarState('SMILE');
				if (messageLength + 2 > 4)
					setDisplayedMessageIndex((prevDisplayedMessageIndex) => prevDisplayedMessageIndex + 1);
			});
		setMessageInput('');
		setEdgarState('THINKING');
	};

	useEffect(() => {
		if (searchParams.get('sessionId')) setSessionId(searchParams.get('sessionId') || '');
		else router.push('/simulation/start');
	}, []);

	return (
		<VStack
			w="100%"
			h="100%"
			p="64px"
			justify="space-between"
			align="start"
			onWheel={(e) => {
				if (e.deltaY > 0 && messages.length > 4 && displayedMessageIndex < Math.ceil(messages.length / 2) - 2)
					setDisplayedMessageIndex((prevDisplayedMessageIndex) => prevDisplayedMessageIndex + 1);
				else if (e.deltaY < 0 && displayedMessageIndex > 0)
					setDisplayedMessageIndex((prevDisplayedMessageIndex) => prevDisplayedMessageIndex - 1);
			}}
		>
			<BetaWarningBanner />
			<VStack w="100%" spacing="32px" align="start" h="100%">
				{Array.from({ length: messages.length > 4 ? 2 : Math.ceil(messages.length / 2) }, (_, i) => i).map(
					(_, index) => {
						const groupMessages = messages.slice(
							(displayedMessageIndex + index) * 2,
							(displayedMessageIndex + index) * 2 + 2,
						);
						return (
							<SimulationChatMessageGroup
								messages={groupMessages}
								key={index}
								lastGroupMessage={displayedMessageIndex + index === Math.ceil(messages.length / 2) - 1}
							/>
						);
					},
				)}
				{edgarState === 'THINKING' && <MirageLoader size="64" speed="2.5" color={colors.blue[900]} />}
				<VStack w="100%">
					{displayedMessageIndex < Math.ceil(messages.length / 2) - 2 && (
						<Button
							size="customMd"
							variant="secondary"
							onClick={() => setDisplayedMessageIndex(Math.ceil(messages.length / 2) - 2)}
						>
							Revenir au message le plus récent
						</Button>
					)}
					{messages[messages.length - 1].isLastMessage && (
						<Link href={`/simulation/appointments?sessionId=${sessionId}`}>
							<Button size="customMd" variant="primary">
								Continuer ma simulation
							</Button>
						</Link>
					)}
				</VStack>
			</VStack>
			<InputGroup w="100%">
				<Input
					w="100%"
					maxLength={300}
					value={messageInput}
					placeholder={
						messages[messages.length - 1].isLastMessage
							? 'Votre échange avec Edgar est fini'
							: 'Ecriver votre message ici...'
					}
					disabled={messages[messages.length - 1].isLastMessage}
					onChange={(e) => {
						setMessageInput(e.target.value);
					}}
					onKeyDown={(e) => {
						if (e.key === 'Enter') submitMessage();
					}}
				/>
				<InputRightElement>
					<Icon as={SendIcon} w="16px" h="16px" color="blue.950" cursor="pointer" onClick={submitMessage} />
				</InputRightElement>
			</InputGroup>
		</VStack>
	);
};

export default SimulationChat;
