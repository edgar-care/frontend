import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';
import { Button, useDisclosure, VStack } from '@chakra-ui/react';

import ChatCard from 'components/dashboardPages/chat/ChatCard';
import Pagination from 'components/navigation/Pagination';
import SelectDoctorHandler from 'components/dashboardPages/chat/modals/SelectDoctorHandler';

import { useGetPatientMedicalFolderQuery } from 'services/request/medical';

import countMaxNumberPage from 'utils/navigation/countMaxNumberPage';
import paginationHandler from 'utils/navigation/paginationHandler';
import getLastMessage from 'utils/app/dashboard/chat/getLastMessage';

import { type ChatType } from 'types/dashboard/chat/ChatType';

const ChatRecipientsList = ({
	chats,
	setSelectedChatId,
}: {
	chats: ChatType[];
	setSelectedChatId: Dispatch<SetStateAction<string>>;
}): JSX.Element => {
	const { data: medicalFolder } = useGetPatientMedicalFolderQuery();

	const [primaryDoctorChat, setPrimaryDoctorChat] = useState<ChatType | undefined>(undefined);
	const [pageIndex, setPageIndex] = useState(1);

	const { isOpen, onOpen, onClose } = useDisclosure();

	const nonPrimaryDoctorChats = chats
		.filter((chat) => chat !== primaryDoctorChat)
		.sort((a, b) => getLastMessage(b.messages).sentTime - getLastMessage(a.messages).sentTime);

	useEffect(() => {
		setPrimaryDoctorChat(
			chats.find((chat) =>
				chat.participants.some((participant) => participant.participantId === medicalFolder?.primaryDoctorId),
			),
		);
	}, [medicalFolder, chats]);

	return (
		<VStack w="100%" maxW={{ base: '100%', '2xl': '448px' }} align="start" spacing="16px" h="100%">
			<Button w="100%" onClick={onOpen}>
				Démarrer une nouvelle conversation
			</Button>
			{primaryDoctorChat && (
				<ChatCard chat={primaryDoctorChat} onClick={() => setSelectedChatId(primaryDoctorChat.id)} />
			)}
			<VStack w="100%" h="100%" justify="space-between">
				<VStack w="100%">
					{paginationHandler(nonPrimaryDoctorChats, pageIndex, 8).map((chat) => (
						<ChatCard chat={chat} key={chat.id} onClick={() => setSelectedChatId(chat.id)} />
					))}
				</VStack>
				{nonPrimaryDoctorChats.length > 8 && (
					<Pagination
						variant="secondary"
						size="small"
						pageIndex={pageIndex}
						maxPageNumbers={countMaxNumberPage(nonPrimaryDoctorChats, 8)}
						setPageIndex={setPageIndex}
					/>
				)}
			</VStack>
			<SelectDoctorHandler isOpen={isOpen} onClose={onClose} />
		</VStack>
	);
};

export default ChatRecipientsList;
