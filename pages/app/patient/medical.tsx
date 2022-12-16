import { Box, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react';

import BannerCard from 'components/pages/patient/BannerCard';
import NamesCard from 'components/pages/patient/medical/NamesCard';
import DatesCard from 'components/pages/patient/medical/DatesCard';
import BodyCard from 'components/pages/patient/medical/BodyCard';
import DoctorCard from 'components/pages/patient/medical/DoctorCard';
import AllergiesCard from 'components/pages/patient/medical/AllergiesCard';
import DiseasesCard from 'components/pages/patient/medical/DiseasesCard';
import TreatmentCard from 'components/pages/patient/medical/TreatmentCard';
import UpdateMedicalModal from 'components/pages/patient/medical/modal/UpdateMedicalModal';
import ResponsiveNavBar from 'components/pages/patient/medical/ResponsiveNavBar';

import { usePatientContext } from 'contexts/user';

import colors from 'theme/foundations/colors';

const Medical = (): JSX.Element => {
	const { infos } = usePatientContext();
	const { isOpen, onOpen, onClose } = useDisclosure();

	// TODO: update display content with real data
	return (
		<VStack
			ml={{ base: '0px', lg: '250px' }}
			my={{ base: '128px', lg: '0px' }}
			spacing="64px"
			px={{ base: '32px', md: '64px', lg: '96px', xl: '128px', '2xl': '288px' }}
		>
			<ResponsiveNavBar />
			<VStack>
				<Text size={{ base: '2xl', lg: '3xl' }} textAlign="center">
					Mon dossier médical
				</Text>
				<Box
					w={{ base: '200px', sm: '300px', md: '375px' }}
					h="3px"
					bg={`linear-gradient(90deg, ${colors.blue[600]} 0%, ${colors.pink[600]} 100%)`}
				/>
			</VStack>
			<BannerCard
				text="Votre dossier médical n'est pas complet ?"
				buttonText="Modifier mon dossier"
				buttonRedirect={onOpen}
			/>
			<Stack
				bg="blue.100"
				border={`2px solid ${colors.blue[300]}`}
				p={{ base: '16px', md: '48px' }}
				borderRadius="16px"
				w="100%"
				spacing="16px"
			>
				<NamesCard infos={infos} />
				<DatesCard infos={infos} />
				<BodyCard infos={infos} />
				<DoctorCard infos={infos} />
				<AllergiesCard infos={infos} />
				<DiseasesCard infos={infos} />
				<TreatmentCard infos={infos} />
			</Stack>
			<UpdateMedicalModal isOpen={isOpen} onClose={onClose} />
		</VStack>
	);
};

export default Medical;
