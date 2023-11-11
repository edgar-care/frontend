import { HStack, Text, VStack } from '@chakra-ui/react';
import Avatar from 'boring-avatars';

const SimpleProfileCard = (): JSX.Element => (
	<VStack
		w="100%"
		bg="white"
		border="2px solid"
		borderColor="blue.200"
		borderRadius="16px"
		transition="all .3s ease-out"
	>
		<HStack justify="space-between" w="100%" p="8px 16px">
			<HStack spacing="16px" w="100%">
				<Avatar
					size={30}
					name="Lucas LOUIS"
					variant="beam"
					colors={['#335FC2', '#C3EAAC', '#C6DEF7', '#5AAF33']}
				/>
				<Text size="boldMd">Nom Prénom</Text>
			</HStack>
		</HStack>
	</VStack>
);

export default SimpleProfileCard;
