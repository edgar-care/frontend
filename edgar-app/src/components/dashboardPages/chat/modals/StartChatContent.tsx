import { useState } from 'react';
import { Box, HStack, Icon, InputGroup, InputRightElement, Text, Textarea, VStack } from '@chakra-ui/react';
import Avatar from 'boring-avatars';

import { useChatContext } from 'contexts/chat';

import { type DoctorType } from 'types/dashboard/DoctorType';

import colors from 'theme/foundations/colors';

import PaperPlaneIcon from 'assets/icons/PaperPlaneIcon';

const StartChatContent = ({
	selectedDoctor,
	onClose,
}: {
	selectedDoctor: DoctorType;
	onClose: () => void;
}): JSX.Element => {
	const { actions } = useChatContext();

	const [inputChatMessage, setInputChatMessage] = useState('');

	const submitMessage = () => {
		if (inputChatMessage) {
			actions.createChat(inputChatMessage, [selectedDoctor.id]);
			setInputChatMessage('');
			onClose();
		}
	};

	return (
		<VStack
			w="100%"
			h="100%"
			p="16px"
			bg="white"
			spacing="32px"
			borderRadius="16px"
			border="2px solid"
			borderColor="blue.200"
		>
			<VStack w="100%">
				<HStack spacing={{ base: '16px', lg: '8px' }} w="100%" justify="center">
					<Avatar
						size={28}
						name={`${selectedDoctor.firstname} ${selectedDoctor.name.toUpperCase()}`}
						variant="beam"
						colors={[colors.green[600], colors.green[200], colors.green[500]]}
					/>
					<Text size={{ base: 'boldMd', sm: 'boldLg', md: 'boldXl' }}>
						Docteur {selectedDoctor.name.toUpperCase()}
					</Text>
				</HStack>
				<Box as="span" w="100%" h="2px" bg="blue.100" />
			</VStack>
			<InputGroup w="100%">
				<Textarea
					maxLength={500}
					placeholder="Ecriver votre message ici pour commencer la conversation"
					rows={5}
					resize="none"
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
						cursor="pointer"
						onClick={submitMessage}
					/>
				</InputRightElement>
			</InputGroup>
		</VStack>
	);
};

export default StartChatContent;
