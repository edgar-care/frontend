'use client';

import { HStack, VStack } from '@chakra-ui/react';

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
			<HStack w="100%" align="start" spacing="32px">
				<MedicalUpdateCard personalInfos={personalInfos} medicalInfos={medicalInfos} />
				<MedicalPersonalInfoCard personalInfos={personalInfos} />
				<MedicalMedicalInfoCard medicalInfos={medicalInfos} />
			</HStack>
		</VStack>
	);
};

export default MedicalPageContent;
