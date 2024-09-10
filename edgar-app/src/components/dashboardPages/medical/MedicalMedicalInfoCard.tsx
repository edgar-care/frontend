import { Box, HStack, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react';

import HealthIssueCard from 'components/dashboardPages/medical/modal/forms/medical/healthIssues/HealthIssueCard';

import { useGetDoctorByIdQuery } from 'services/request/doctor';

import type { PatientHealthType, PatientMedicalType } from 'types/dashboard/medical/PatientMedicalType';
import type { PatientMedicalAntecedentType } from 'types/dashboard/medical/PatientMedicalAntecedentType';

const MedicalMedicalInfoCard = ({ medicalInfos }: { medicalInfos: PatientMedicalType }): JSX.Element => {
	const { data: doctorInfo } = useGetDoctorByIdQuery(medicalInfos.primaryDoctorId);

	const medicalInfosLabels = {
		primaryDoctorId: 'Médecin traitant',
		medicalAntecedents: 'Antécédents médicaux',
	};

	return (
		<HStack
			p="16px"
			w="100%"
			bg="white"
			border="2px solid"
			borderColor="blue.200"
			spacing="4px"
			borderRadius="8px"
			maxW={{ base: '100%', '2xl': '500px' }}
			minW={{ base: '100%', sm: '300px' }}
		>
			<Box as="span" w="4px" alignSelf="stretch" bg="green.500" borderRadius="4px" />
			<VStack pl="8px" w="100%" align="start" spacing={{ base: '8px', lg: '12px' }}>
				{Object.keys({
					primaryDoctorId: medicalInfos.primaryDoctorId,
					medicalAntecedents: medicalInfos.medicalAntecedents,
				}).map((key, index) => {
					const info = medicalInfos[key as keyof PatientHealthType];
					return (
						<Box as="div" key={index}>
							{(key as keyof PatientHealthType) === 'primaryDoctorId' && doctorInfo && (
								<Text
									size={{ base: 'md', lg: 'lg' }}
									id={`edgar-dashboardMedicalPage-healthInfoCard-${key as keyof PatientHealthType}-text`}
								>
									{medicalInfosLabels[key as keyof PatientHealthType]}: Dr.{' '}
									{doctorInfo.name.toUpperCase()} {doctorInfo.firstname}
								</Text>
							)}
							{(key as keyof PatientHealthType) === 'medicalAntecedents' && (
								<VStack w="100%" align="start">
									<Text
										size={{ base: 'md', lg: 'lg' }}
										id={`edgar-dashboardMedicalPage-healthInfoCard-${
											key as keyof PatientHealthType
										}-text`}
									>
										{medicalInfosLabels[key as keyof PatientHealthType]}:
									</Text>
									<Wrap w="100%" gap="8px">
										{(info as PatientMedicalAntecedentType[]).map((value) => (
											<WrapItem key={value.id}>
												<HealthIssueCard healthIssue={value} isDeletable={false} />
											</WrapItem>
										))}
									</Wrap>
								</VStack>
							)}
						</Box>
					);
				})}
			</VStack>
		</HStack>
	);
};

export default MedicalMedicalInfoCard;
