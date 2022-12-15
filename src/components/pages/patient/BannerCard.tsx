import { Button, HStack, Text } from '@chakra-ui/react';

import colors from 'theme/foundations/colors';

const BannerCard = ({
	text,
	buttonText,
	buttonRedirect,
}: {
	text: string;
	buttonText: string;
	buttonRedirect: () => void;
}): JSX.Element => (
	<HStack
		bg="purple.100"
		border={`2px solid ${colors.purple[200]}`}
		p="12px 24px"
		borderRadius="16px"
		w="100%"
		justify="space-between"
	>
		<Text size="boldLg">{text}</Text>
		<Button onClick={buttonRedirect}>{buttonText}</Button>
	</HStack>
);

export default BannerCard;
