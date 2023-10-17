'use client';

import { Stack, VStack } from '@chakra-ui/react';

import DashboardPageBanner from 'components/dashboardPages/DashboardPageBanner';
import MedicalUpdateCard from 'components/dashboardPages/medical/MedicalUpdateCard';
import MedicalPersonalInfoCard from 'components/dashboardPages/medical/MedicalPersonalInfoCard';
import MedicalMedicalInfoCard from 'components/dashboardPages/medical/MedicalMedicalInfoCard';

import { type MedicalInfos, type PersonalInfos } from 'types/onboarding/OnboardingInfos';

const MedicalPageContent = (): JSX.Element => {
	const personalInfos: PersonalInfos = {
		firstname: 'Jean',
		name: 'Dupont',
		birthDate: new Date('2023-10-16'),
		sex: 'MALE',
		size: 180,
		weight: 80,
	};
	const medicalInfos: MedicalInfos = {
		primaryDoctorName: 'Dr. Dupont',
		allergies: ['ts'],
		diseases: ['fgfdgdfgdf'],
		treatmentsInProgress: ['dgdfgdf', 'dgdfgdf', 'dgdfgdf', 'dgdfgdf', 'dgdfgdf', 'dgdfgdf', 'dgdfgdf'],
	};

	return (
		<VStack w="100%" spacing="32px">
			<DashboardPageBanner
				title="Mon dossier médical"
				subTitle="Retrouvez toutes vos informations personnelles et médicales."
			/>
			<Stack direction={{ base: 'column', xl: 'row' }} w="100%" align="start" spacing="32px">
				<MedicalUpdateCard personalInfos={personalInfos} medicalInfos={medicalInfos} />
				<Stack
					direction={{ base: 'column', '2xl': 'row' }}
					w="100%"
					align="start"
					spacing={{ base: '16px', '2xl': '32px' }}
				>
					<MedicalPersonalInfoCard personalInfos={personalInfos} />
					<MedicalMedicalInfoCard medicalInfos={medicalInfos} />
				</Stack>
			</Stack>
		</VStack>
	);
};

export default MedicalPageContent;
