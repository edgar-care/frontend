'use client';

import { Link } from '@chakra-ui/next-js';
import { Text, VStack } from '@chakra-ui/react';

const TabCard = ({ name, path }: { name: string; path: string }): JSX.Element => (
	<Link href={path}>
		<Text size="lg" color="white">
			{name}
		</Text>
	</Link>
);

export const DrawerTabCard = ({ name, path }: { name: string; path: string }): JSX.Element => (
	<Link href={path} w="100%">
		<VStack align="start" borderBottom="1px solid" borderColor="gray.400" py="8px" w="100%">
			<Text size="lg" fontWeight="600" color="white" textTransform="uppercase">
				{name}
			</Text>
		</VStack>
	</Link>
);
export default TabCard;
