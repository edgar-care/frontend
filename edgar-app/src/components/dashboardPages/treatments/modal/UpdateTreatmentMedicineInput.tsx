import { VStack, Wrap, WrapItem } from '@chakra-ui/react';
import type { Control } from 'react-hook-form';

import TreatmentUpdateCard from 'components/dashboardPages/treatments/TreatmentUpdateCard';

import type { PatientMedicalAntecedentType } from 'types/dashboard/medical/PatientMedicalAntecedentType';
import type { PatientMedicineType } from 'types/dashboard/medical/PatientMedicineType';

const UpdateTreatmentMedicineInput = ({
	medicines,
	control,
}: {
	medicines: PatientMedicineType[];
	control: Control<PatientMedicalAntecedentType>;
}): JSX.Element => (
	<VStack spacing="12px" align="start" w="100%">
		<Wrap w="100%">
			{medicines.map((medicine) => (
				<WrapItem key={medicine.medicineId}>
					<TreatmentUpdateCard medicine={medicine} control={control} />
				</WrapItem>
			))}
		</Wrap>
	</VStack>
);

export default UpdateTreatmentMedicineInput;
