import { Box, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react';

import ProductTeamBadge from 'components/productPage/ProductTeamBadge';

const ProductTeam = (): JSX.Element => {
	const teams = [
		{
			name: 'Thomas DARRIEUMERLOU',
			post: 'Responsable Backend',
		},
		{
			name: 'Loic MARLARD',
			post: 'Développeur Algorithmique',
		},
		{
			name: 'Lucas LOUIS',
			post: 'Product Owner',
			post2: 'Responsable Frontend',
		},
		{
			name: 'Jules MAGYARI',
			post: 'Développeur Frontend',
		},
		{
			name: 'Marvin FLAMAND',
			post: 'Responsable Mobile',
		},
		{
			name: 'Nicolas JACQUEMIN',
			post: 'Développeur Mobile',
		},
	];

	return (
		<VStack spacing="32px" w="100%">
			<Text size={{ base: '3xl', xl: '6xl' }}>Notre équipe</Text>
			<Box as="span" w="auto">
				<ProductTeamBadge name="Emilien BUGUET" post="Chef de projet - Responsable IA/ Algorithmique" />
			</Box>
			<Wrap spacing="32px" maxW="800px" justify="center">
				{teams.map((team) => (
					<WrapItem key={team.name} maxW="350px" w="100%">
						<ProductTeamBadge name={team.name} post={team.post} post2={team.post2} />
					</WrapItem>
				))}
			</Wrap>
		</VStack>
	);
};

export default ProductTeam;
