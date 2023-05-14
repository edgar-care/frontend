'use client';

import { Link } from '@chakra-ui/next-js';
import { Text, VStack } from '@chakra-ui/react';

const TabCard = ({ name, path, id }: { name: string; path: string; id: string }): JSX.Element => (
	<Link href={path}>
		<Text size="lg" color="white" id={`edgar-navbar-tab-${id}-text`}>
			{name}
		</Text>
	</Link>
);

export const DrawerTabCard = ({ name, path, id }: { name: string; path: string; id: string }): JSX.Element => (
	<Link href={path} w="100%">
		<VStack align="start" borderBottom="1px solid" borderColor="gray.400" py="8px" w="100%">
			<Text size="lg" fontWeight="600" color="white" textTransform="uppercase" id={`edgar-navbar-tab-${id}-text`}>
				{name}
			</Text>
		</VStack>
	</Link>
);
export default TabCard;
