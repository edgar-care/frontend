import { Button, Stack, Text } from '@chakra-ui/react';

const QuestionCard = ({ para, button }: { para: string; button: string }): JSX.Element => (
	<Stack
		direction={{ base: 'column', md: 'row' }}
		justify="space-between"
		border="2px"
		borderRadius="8px"
		p="12px 16px"
		borderColor="blue.200"
		bg="white"
		w="100%"
	>
		<Text size="md">{para}</Text>
		<Button variant="primary" size="customSm">
			{button}
		</Button>
	</Stack>
);

export default QuestionCard;
