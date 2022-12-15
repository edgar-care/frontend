import { Button, HStack, Text } from '@chakra-ui/react';

const QuestionCard = ({ para, button }: { para: string; button: string }): JSX.Element => (
	<HStack
		justify="space-between"
		border="2px"
		borderRadius="8px"
		p="12px 16px"
		borderColor="blue.200"
		bg="white"
		w="100%"
	>
		<Text size="md">{para}</Text>
		<Button variant="primary" size="sm">
			{button}
		</Button>
	</HStack>
);

export default QuestionCard;
