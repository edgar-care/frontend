'use client';

import { VStack, Text } from '@chakra-ui/react';
import NavBar from 'components/pages/patient/NavBar';
import ProtectedPage from 'components/pages/ProtectedPage';

const Chat = (): JSX.Element => (
	<ProtectedPage>
		<VStack>
			<NavBar />
			<Text>Chat</Text>
		</VStack>
	</ProtectedPage>
);

export default Chat;
