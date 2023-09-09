'use client';

import { VStack, Text, Box } from '@chakra-ui/react';

import DocumentCard from 'components/pages/patient/DocumentCard';
import BannerCard from 'components/pages/patient/BannerCard';

import colors from 'theme/foundations/colors';

const Documents = (): JSX.Element => {
	const appointmentList = [
		{
			docuName: 'Document 1.docx',
			name: 'Roger Palot',
		},
		{
			docuName: 'Document 2.docx',
			name: 'Benoit Baillard',
		},
		{
			docuName: 'Document 3.docx',
			name: 'Amoz Pay',
		},
	];

	return (
		<VStack my={{ base: '128px', lg: '0px' }} spacing="64px">
			<VStack>
				<Text size={{ base: '2xl', lg: '3xl' }} textAlign="center">
					Mes documents
				</Text>
				<Box
					w={{ base: '200px', sm: '300px', md: '375px' }}
					h="3px"
					bg={`linear-gradient(90deg, ${colors.blue[600]} 0%, ${colors.green[600]} 100%)`}
				/>
			</VStack>
			<BannerCard
				text="Vous ne trouvez pas un document ?"
				buttonText="Contacter votre médecin"
				buttonRedirect={() => {}}
			/>
			<VStack w="100%" spacing="16px">
				{appointmentList.map((appointment, index) => (
					<DocumentCard docuName={appointment.docuName} name={appointment.name} key={index} />
				))}
			</VStack>
		</VStack>
	);
};

export default Documents;
