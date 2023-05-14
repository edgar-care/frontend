import { VStack, Text, Box } from '@chakra-ui/react';

import DocumentCard from 'components/pages/patient/DocumentCard';
import ResponsiveNavBar from 'components/pages/patient/medical/ResponsiveNavBar';
import BannerCard from 'components/pages/patient/BannerCard';

import colors from 'theme/foundations/colors';
import ProtectedPage from '../src/components/pages/ProtectedPage';

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
		<ProtectedPage>
			<VStack
				ml={{ base: '0px', lg: '250px' }}
				my={{ base: '128px', lg: '0px' }}
				spacing="64px"
				px={{ base: '32px', md: '64px', lg: '96px', xl: '128px', '2xl': '288px' }}
			>
				<ResponsiveNavBar />
				<VStack>
					<Text size={{ base: '2xl', lg: '3xl' }} textAlign="center">
						Mes documents
					</Text>
					<Box
						w={{ base: '200px', sm: '300px', md: '375px' }}
						h="3px"
						bg={`linear-gradient(90deg, ${colors.blue[600]} 0%, ${colors.pink[600]} 100%)`}
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
		</ProtectedPage>
	);
};

export default Documents;
