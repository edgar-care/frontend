import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';
import { Button, VStack } from '@chakra-ui/react';

import ChatCard from 'components/dashboardPages/chat/ChatCard';
import Pagination from 'components/navigation/Pagination';

import { useGetPatientMedicalFolderQuery } from 'services/request/medical';

import countMaxNumberPage from 'utils/navigation/countMaxNumberPage';
import paginationHandler from 'utils/navigation/paginationHandler';

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

	const nonPrimaryDoctorChats = chats.filter((chat) => chat !== primaryDoctorChat);

	useEffect(() => {
		setPrimaryDoctorChat(
			chats.find((chat) =>
				chat.participants.some((participant) => participant.participantId === medicalFolder?.primaryDoctorId),
			),
		);
	}, [medicalFolder, chats]);

	return (
		<VStack w="100%" maxW={{ base: '100%', '2xl': '448px' }} align="start" spacing="16px" h="100%">
			<Button w="100%">Démarrer une nouvelle conversation</Button>
			{primaryDoctorChat && (
				<ChatCard chat={primaryDoctorChat} onClick={() => setSelectedChatId(primaryDoctorChat.id)} />
			)}
			<VStack w="100%" h="100%" justify="space-between">
				<VStack w="100%">
					{paginationHandler(nonPrimaryDoctorChats, pageIndex, 5).map((chat) => (
						<ChatCard chat={chat} key={chat.id} onClick={() => setSelectedChatId(chat.id)} />
					))}
				</VStack>
				{nonPrimaryDoctorChats.length > 5 && (
					<Pagination
						variant="secondary"
						size="small"
						pageIndex={pageIndex}
						maxPageNumbers={countMaxNumberPage(nonPrimaryDoctorChats, 5)}
						setPageIndex={setPageIndex}
					/>
				)}
			</VStack>
		</VStack>
	);
};

export default ChatRecipientsList;
