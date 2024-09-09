import { HStack, Input, Select, Text } from '@chakra-ui/react';
import { type Control, Controller } from 'react-hook-form';

import type { PatientPrescriptionMedicineType } from 'types/app/dashboard/patients/prescriptions/PatientPrescriptionMedicineType';

import type { UploadPatientPrescriptionDTO } from 'store/types/prescriptions.type';

const PatientAddPrescriptionQSPInputs = ({
	prescriptionMedicine,
	control,
}: {
	prescriptionMedicine: PatientPrescriptionMedicineType;
	control: Control<UploadPatientPrescriptionDTO>;
}): JSX.Element => (
	<Controller
		control={control}
		rules={{ required: true }}
		render={({ field: { value, onChange } }) => (
			<HStack>
				<Text>QSP</Text>
				<Input
					type="number"
					placeholder="1"
					w="30px"
					variant="noStyle"
					borderBottom="2px solid"
					borderColor="blue.500"
					value={value.find((v) => v.medicineId === prescriptionMedicine.medicineId)?.qsp}
					onChange={(e) =>
						onChange(
							value.map((v) =>
								v.medicineId !== prescriptionMedicine.medicineId ? v : { ...v, qsp: e.target.value },
							),
						)
					}
				/>
				<Select
					w="125px"
					variant="noStyle"
					borderBottom="2px solid"
					borderColor="blue.500"
					defaultValue={value.find((v) => v.medicineId === prescriptionMedicine.medicineId)?.qspUnit}
					onChange={(e) =>
						onChange(
							value.map((v) =>
								v.medicineId !== prescriptionMedicine.medicineId
									? v
									: { ...v, qspUnit: e.target.value },
							),
						)
					}
				>
					<option value="JOUR">Jour(s)</option>
					<option value="SEMAINE">Semaine(s)</option>
					<option value="MOIS">Mois</option>
				</Select>
			</HStack>
		)}
		name="medicines"
	/>
);

export default PatientAddPrescriptionQSPInputs;
