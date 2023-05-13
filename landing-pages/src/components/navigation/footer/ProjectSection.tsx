import { Text, VStack } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';

const ProjectSection = (): JSX.Element => (
	<VStack align="start" spacing="16px">
		<Text size={{ base: 'boldLg', xl: 'boldXl' }} color="white">
			LE PROJET
		</Text>
		<VStack w="100%" align="start" spacing="12px">
			<Link href="">
				<Text size={{ base: 'md', xl: 'lg' }} color="white">
					Ce que nous offrons
				</Text>
			</Link>
			<Link href="">
				<Text size={{ base: 'md', xl: 'lg' }} color="white">
					Notre application
				</Text>
			</Link>
			<Link href="">
				<Text size={{ base: 'md', xl: 'lg' }} color="white">
					Nous rejoindre
				</Text>
			</Link>
		</VStack>
	</VStack>
);

export default ProjectSection;
