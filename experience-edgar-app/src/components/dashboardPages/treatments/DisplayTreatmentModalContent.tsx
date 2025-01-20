import { HStack, Icon, Text, VStack } from '@chakra-ui/react';

import TreatmentInfoCard from 'components/dashboardPages/treatments/TreatmentInfoCard';

import type { TreatmentType } from 'types/dashboard/treatments/TreatmentType';

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
