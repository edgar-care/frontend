import { Link, Text, VStack } from '@chakra-ui/react';

const ProjectSection = (): JSX.Element => (
	<VStack align="start" spacing="16px">
		<Text size={{ base: 'boldLg', xl: 'boldXl' }} color="white" id="edgar-footer-projectTitle-text">
			LE PROJET
		</Text>
		<VStack w="100%" align="start" spacing="12px">
			<Link href="product">
				<Text size={{ base: 'md', xl: 'lg' }} color="white" id="edgar-footer-projectOffer-text">
					Ce que nous offrons
				</Text>
			</Link>
			<Link href="application">
				<Text size={{ base: 'md', xl: 'lg' }} color="white" id="edgar-footer-projectApplication-text">
					Notre application
				</Text>
			</Link>
			<Link href="contact">
				<Text size={{ base: 'md', xl: 'lg' }} color="white" id="edgar-footer-projectJoinUs-text">
					Nous rejoindre
				</Text>
			</Link>
		</VStack>
	</VStack>
);

export default ProjectSection;
