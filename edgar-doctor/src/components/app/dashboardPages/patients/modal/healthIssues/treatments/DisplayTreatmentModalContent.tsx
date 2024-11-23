import { HStack, Icon, Text, VStack } from '@chakra-ui/react';

import TreatmentInfoCard from 'components/app/dashboardPages/patients/modal/healthIssues/treatments/TreatmentInfoCard';

import type { TreatmentType } from 'types/app/dashboard/patients/medicalInfos/HealthIssueType';

import CalendarIcon from 'assets/icons/CalendarIcon';

const DisplayTreatmentModalContent = ({ treatment }: { treatment: TreatmentType }): JSX.Element => (
	<VStack w="100%" spacing="12px" align="start">
		<HStack>
			<Icon as={CalendarIcon} />
			<Text>
				Du {new Date(treatment.startDate).toLocaleDateString('fr-FR')}{' '}
				{treatment.endDate && `au ${new Date(treatment.endDate).toLocaleDateString('fr-FR')}`}
			</Text>
		</HStack>
		{treatment.medicines.map((medicine) => (
			<TreatmentInfoCard medicine={medicine} />
		))}
	</VStack>
);

export default DisplayTreatmentModalContent;
