import { Button, Link, Stack, Text, VStack } from '@chakra-ui/react';

const DashboardCard = ({
	title,
	para,
	button,
	path,
}: {
	title: string;
	para: string;
	button: string;
	path: string;
}): JSX.Element => (
	<VStack
		justify="space-between"
		p="24px"
		align="left"
		border="2px"
		borderRadius="16px"
		borderColor="blue.200"
		bg="transparent"
		w="400px"
		h="250px"
	>
		<Stack spacing="16px">
			<Text size="2xl">{title}</Text>
			<Text size="lg">{para}</Text>
		</Stack>
		<Link href={path}>
			<Button w="100%" variant="primary" size="lg">
				{button}
			</Button>
		</Link>
	</VStack>
);

export default DashboardCard;
