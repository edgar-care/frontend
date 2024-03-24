import { Box, HStack, Icon, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';

import CircleRightArrowIcon from 'assets/icons/Arrow/Circle/CircleRightArrowIcon';

interface Message {
	id: number;
	sender: string;
	notifications: number;
	date: Date;
	lastMessage: string;
}

const formatMessageDate = (dateString: Date) => {
	const date = new Date(dateString);

	const day = date.getDate();
	const month = ['janv', 'févr', 'mars', 'avr', 'mai', 'juin', 'juil', 'août', 'sept', 'oct', 'nov', 'déc'][
		date.getMonth()
	];

	return `${day} ${month}`;
};

const ChatCard = ({ message }: { message: Message }): JSX.Element => {
	const formattedDate = formatMessageDate(message.date);
	const [showHStack, setShowHStack] = useState(false);
	return (
		<HStack
			bg="blue.100"
			w="100%"
			borderRadius="16px"
			border="2px"
			borderColor="blue.200"
			spacing="8px"
			onMouseEnter={() => setShowHStack(true)}
			onMouseLeave={() => setShowHStack(false)}
		>
			<HStack w="100%" bg="white" borderRadius="16px" p="8px 16px" justify="space-between">
				<HStack spacing="8px">
					<Box borderRadius="50%" bg="green.300" w="28px" h="28px" />
					<VStack align="start" spacing="0px">
						<HStack>
							<Text size="boldMd">{message.sender}</Text>
							<Text fontStyle="italic" fontSize="md" color="grey.500">
								{/* Insérer - Médecin généraliste */}
							</Text>
						</HStack>
						<Text fontStyle="italic" fontSize="md" color="grey.500">
							{message.lastMessage}
						</Text>
					</VStack>
				</HStack>
				<VStack spacing="4px" align="end">
					<Text fontStyle="italic" fontSize="md" color="grey.500">
						{formattedDate}
					</Text>
					<Box
						borderRadius="50%"
						w="16px"
						h="16px"
						bg="blue.700"
						display="flex"
						justifyContent="center"
						alignItems="center"
					>
						{message.notifications > 9 ? (
							<Text fontSize="12" color="white">
								+
							</Text>
						) : (
							<Text fontSize="12" color="white">
								{message.notifications}
							</Text>
						)}
					</Box>
				</VStack>
			</HStack>
			{showHStack && (
				<HStack justifyContent="flex-start">
					<Icon as={CircleRightArrowIcon} w="20px" h="20px" color="blue.700" m="0px 10px 0px 0px" />
				</HStack>
			)}
		</HStack>
	);
};

export default ChatCard;
