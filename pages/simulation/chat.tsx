import { Text, VStack, Image, HStack, Box } from '@chakra-ui/react';

const Chat = (): JSX.Element => {
	const [ageValue, setAgeValue] = useState(20);

	return (
		<VStack>
			<HStack>
				<Text size="2xl">
					{' '}
					Selectionnez la zone de votre{' '}
					<Box
						as="span"
						backgroundImage={`linear-gradient(90deg, ${colors.blue[500]} 0%, ${colors.pink[500]} 100%)`}
						bgClip="text"
					></Box>
				</Text>
			</HStack>
			<Image src="/assets/edgar.care-logo.svg" alt="test" w={200} h="auto" />
		</VStack>
	);
};

export default Chat;
