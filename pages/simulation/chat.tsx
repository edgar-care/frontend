import { Text, VStack, Image, HStack } from '@chakra-ui/react';
import ChatBox from 'components/ChatBox';
import ColorText from 'components/ColorText';
import { useState } from 'react';

const Chat = (): JSX.Element => {
	const [ageValue, setAgeValue] = useState(20);
	console.log(ageValue, setAgeValue);

	return (
		<VStack pt="90px" spacing="60px">
			<HStack spacing="128px">
				<ChatBox />
				<VStack spacing="45px">
					<Text size="2xl">
						{' '}
						Selectionnez la zone de votre <ColorText children="maux" />
					</Text>
					<Image src="/assets/manequin-3d1.svg" alt="test" w={393} h="auto" />
				</VStack>
			</HStack>
			<Image src="/assets/edgar.care-logo.svg" alt="test" w={200} h="auto" />
		</VStack>
	);
};

export default Chat;
