import { Button, Link, Stack, Text, useBreakpointValue, VStack } from '@chakra-ui/react';

const DashboardCard = ({
	title,
	para,
	button,
	path,
	isDisabled,
}: {
	title: string;
	para: string;
	button: string;
	path: string;
	isDisabled?: boolean;
}): JSX.Element => {
	const isMobile = useBreakpointValue({ base: true, md: false });

	return (
		<VStack
			justify="space-between"
			p="24px"
			align="left"
			border="2px"
			borderRadius="16px"
			borderColor="blue.200"
			bg="transparent"
			maxW="400px"
			minH="250px"
		>
			<Stack spacing="16px">
				<Text size={{ base: 'boldXl', md: '2xl' }}>{title}</Text>
				<Text size="lg">{para}</Text>
			</Stack>
			<Link href={path}>
				<Button isDisabled={isDisabled} w="100%" variant="primary" size={isMobile ? 'md' : 'lg'}>
					{button}
				</Button>
			</Link>
		</VStack>
	);
};

export default DashboardCard;
