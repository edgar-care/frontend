import { VStack, Text, Box } from '@chakra-ui/react';

import DocumentCard from 'components/pages/patient/DocumentCard';
import NavBar from 'components/pages/patient/NavBar';
import BannerCard from 'components/pages/patient/BannerCard';

import colors from 'theme/foundations/colors';

const Documents = (): JSX.Element => {
	const appointmentList = [
		{
			docuName: 'BahAlors.docx',
			name: 'Roger Palot',
		},
		{
			docuName: 'OnSaitPas.docx',
			name: 'benoit Baillard',
		},
		{
			docuName: 'CestPasVrai.docx',
			name: 'Amoz Pay',
		},
	];

	return (
		<VStack ml="250px" spacing="64px" px="288px">
			<NavBar />
			<VStack>
				<Text size="3xl">Mes documents</Text>
				<Box
					w="375px"
					h="3px"
					bg={`linear-gradient(90deg, ${colors.blue[600]} 0%, ${colors.pink[600]} 100%)`}
				/>
			</VStack>
			<BannerCard
				text="Vous ne trouvez pas un documents ?"
				buttonText="Contacter votre médecin"
				buttonRedirect={() => {}}
			/>
			<VStack w="100%" spacing="16px">
				{appointmentList.map((appointment) => (
					<DocumentCard docuName={appointment.docuName} name={appointment.name} />
				))}
			</VStack>
		</VStack>
	);
};

export default Documents;
