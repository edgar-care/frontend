'use client';

import { Stack, VStack } from '@chakra-ui/react';

import DashboardPageBanner from 'components/dashboardPages/DashboardPageBanner';
import MedicalUpdateCard from 'components/dashboardPages/medical/MedicalUpdateCard';
import MedicalPersonalInfoCard from 'components/dashboardPages/medical/MedicalPersonalInfoCard';
import MedicalMedicalInfoCard from 'components/dashboardPages/medical/MedicalMedicalInfoCard';

import { useGetPatientMedicalFolderQuery } from 'services/request/medical';

const MedicalPageContent = (): JSX.Element => {
	const { data: medicalInfos } = useGetPatientMedicalFolderQuery();

	return (
		<VStack w="100%" spacing="32px">
			<DashboardPageBanner
				title="Mon dossier médical"
				subTitle="Retrouvez toutes vos informations personnelles et médicales."
			/>
			{medicalInfos && (
				<Stack direction={{ base: 'column', xl: 'row' }} w="100%" align="start" spacing="32px">
					<MedicalUpdateCard medicalInfos={medicalInfos} />
					<Stack
						direction={{ base: 'column', '2xl': 'row' }}
						w="100%"
						align="start"
						spacing={{ base: '16px', '2xl': '32px' }}
					>
						<MedicalPersonalInfoCard medicalInfos={medicalInfos} />
						<MedicalMedicalInfoCard medicalInfos={medicalInfos} />
					</Stack>
				</Stack>
			)}
		</VStack>
	);
};

export default MedicalPageContent;
