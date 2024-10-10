import { type Dispatch, type SetStateAction, useState } from 'react';
import { Box, HStack, Icon, InputGroup, InputRightElement, Text, Textarea, useToast, VStack } from '@chakra-ui/react';
import Avatar from 'boring-avatars';

import { useChatContext } from 'contexts/chat';
import { useAuthContext } from 'contexts/auth';

import { type DoctorType } from 'types/dashboard/DoctorType';

import colors from 'theme/foundations/colors';

import PaperPlaneIcon from 'assets/icons/PaperPlaneIcon';
import SmallLeftArrowIcon from 'assets/icons/Arrow/Small/SmallLeftArrowIcon';

const StartChatContent = ({
	selectedDoctor,
	setSelectedDoctor,
	onClose,
}: {
	selectedDoctor: DoctorType;
	setSelectedDoctor: Dispatch<SetStateAction<DoctorType | undefined>>;
	onClose: () => void;
}): JSX.Element => {
	const auth = useAuthContext();
	const { actions } = useChatContext();

	const [inputChatMessage, setInputChatMessage] = useState('');

	const toast = useToast({ duration: 3000, isClosable: true });

	const submitMessage = () => {
		if (inputChatMessage) {
			actions.createChat(inputChatMessage, [auth.getId(), selectedDoctor.id]);
			setInputChatMessage('');
			onClose();
			setSelectedDoctor(undefined);
		} else toast({ title: 'Veillez écrire un message', status: 'error' });
	};

	return (
		<VStack w="100%" h="100%" spacing="32px">
			<VStack w="100%">
				<HStack spacing={{ base: '16px', lg: '8px' }} w="100%" justify="space-between">
					<Icon
						as={SmallLeftArrowIcon}
						w="16px"
						h="auto"
						cursor="pointer"
						onClick={() => setSelectedDoctor(undefined)}
					/>
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
					<Box as="span" w="16px" />
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
