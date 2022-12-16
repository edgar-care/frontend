import { Text, VStack, Image, HStack, useBreakpointValue } from '@chakra-ui/react';

import ChatBox from 'components/simulationPage/ChatBox';
import ColorText from 'components/GradientText';
import SimulationPage from 'components/pages/simulation/SimulationPage';

const Chat = (): JSX.Element => {
	const isMobile = useBreakpointValue({ base: true, lg: false });

	return (
		<SimulationPage>
			<VStack spacing="64px">
				<HStack spacing="128px">
					<ChatBox />
					{!isMobile && (
						<VStack spacing="48px">
							<Text size="2xl">
								Sélectionnez la zone de votre <ColorText textValue="maux" />
							</Text>
							<Image src="/assets/manequin-3d1.svg" alt="test" w={393} h="auto" />
						</VStack>
					)}
				</HStack>
			</VStack>
		</SimulationPage>
	);
};

export default Chat;
