import { VStack, Wrap, WrapItem } from '@chakra-ui/react';
import { Control } from 'react-hook-form';

import TreatmentUpdateCard from 'components/dashboardPages/treatments/TreatmentUpdateCard';

import { PatientMedicalAntecedentType } from 'types/dashboard/medical/PatientMedicalAntecedentType';

const UpdateTreatmentMedicineInput = ({
	antecedent,
	control,
}: {
	antecedent: PatientMedicalAntecedentType | undefined;
	control: Control<PatientMedicalAntecedentType>;
}): JSX.Element => (
	<VStack spacing="12px" align="start" w="100%">
		<Wrap w="100%">
			{antecedent?.medicines.map((medicine) => (
				<WrapItem key={medicine.medicineId}>
					<TreatmentUpdateCard medicine={medicine} control={control} />
				</WrapItem>
			))}
		</Wrap>
	</VStack>
);

export default UpdateTreatmentMedicineInput;
