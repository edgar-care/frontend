import { type Dispatch, type SetStateAction, useState } from 'react';
import { VStack } from '@chakra-ui/react';

import ChatCard from 'components/app/dashboardPages/chat/ChatCard';
import Pagination from 'components/navigation/Pagination';

import countMaxNumberPage from 'utils/navigation/countMaxNumberPage';
import paginationHandler from 'utils/navigation/paginationHandler';

import { type ChatType } from 'types/app/dashboard/chat/ChatType';

const ChatRecipientsList = ({
	chats,
	setSelectedChatId,
}: {
	chats: ChatType[];
	setSelectedChatId: Dispatch<SetStateAction<string>>;
}): JSX.Element => {
	const [pageIndex, setPageIndex] = useState(1);

	return (
		<VStack w="100%" maxW={{ base: '100%', '2xl': '448px' }} align="start" spacing="16px" h="100%">
			<VStack w="100%" h="100%" justify="space-between">
				<VStack w="100%">
					{paginationHandler(chats, pageIndex, 8).map((chat) => (
						<ChatCard chat={chat} key={chat.id} onClick={() => setSelectedChatId(chat.id)} />
					))}
				</VStack>
				{chats.length > 8 && (
					<Pagination
						variant="secondary"
						size="small"
						pageIndex={pageIndex}
						maxPageNumbers={countMaxNumberPage(chats, 8)}
						setPageIndex={setPageIndex}
					/>
				)}
			</VStack>
		</VStack>
	);
};

export default ChatRecipientsList;
