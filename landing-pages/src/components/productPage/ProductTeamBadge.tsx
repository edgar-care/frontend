import { Text, VStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';

const ProductTeamBadge = ({ name, post, post2 }: { name: string; post: string; post2?: string }): JSX.Element => (
	<VStack w="100%">
		<Image src="/assets/Edgars/edgar-badge.svg" alt="edgar badge" height={96} width={96} w="96px" h="96px" />
		<VStack spacing="0px">
			<Text size="bold2xl">{name}</Text>
			<Text size="xl" textAlign="center">
				{post}
			</Text>
			<Text size="xl" textAlign="center">
				{post2}
			</Text>
		</VStack>
	</VStack>
);

export default ProductTeamBadge;
