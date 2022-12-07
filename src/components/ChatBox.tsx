import { Box, Icon, IconButton, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineAudio, AiOutlineSend } from 'react-icons/ai';

// type IsType = {
// 	image: string;
// 	value: boolean;
// 	changeSex: () => void;
// };

const ChatBox = () => (
	<Box borderRadius="16px" w="500px" h="600px" bgColor="#DADEF2">
		<InputGroup w="471px" h="50px" mt="535px" ml="14px">
			<InputLeftElement mt="5px" pointerEvents="none" children={<Icon as={AiOutlineAudio} />} />
			<Input
				placeholder="Ecrivez votre message ici"
				focusBorderColor="white"
				bgColor="white"
				borderColor="white"
				alignSelf="center"
				variant="outline"
				color="black"
			/>
			<InputRightElement
				onClick={() => console.log('COUCOU TOI')}
				mt="5px"
				pointerEvents="none"
				children={
					<IconButton
						onClick={() => console.log('coucu')}
						aria-label="Search database"
						icon={<Icon as={AiOutlineSend} />}
					/>
				}
			/>
		</InputGroup>
	</Box>
);

export default ChatBox;
