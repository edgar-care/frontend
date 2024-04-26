import { useState } from 'react';
import { Checkbox, HStack, Text, useToast } from '@chakra-ui/react';

import { useCheckFollowUpTreatmentMutation, useUncheckFollowUpTreatmentMutation } from 'services/request/treatments';

import { type PatientMedicineType } from 'types/dashboard/medical/PatientMedicineType';
import { MedicineType } from 'types/dashboard/medical/MedicineType';
import { TreatmentPeriodType } from 'types/dashboard/medical/TreatmentPeriodType';

const TreatmentsCheckboxTreatment = ({
	treatment,
	medicinesInfo,
	checkedTreatmentId,
	isToday,
	period,
	day,
}: {
	treatment: PatientMedicineType;
	medicinesInfo: MedicineType[];
	checkedTreatmentId: string;
	isToday: boolean;
	period: TreatmentPeriodType;
	day: Date;
}): JSX.Element => {
	const [triggerCheckFollowUpTreatment] = useCheckFollowUpTreatmentMutation();
	const [triggerUncheckFollowUpTreatment] = useUncheckFollowUpTreatmentMutation();

	const [isChecked, setIsChecked] = useState(!!checkedTreatmentId);

	const toast = useToast({ duration: 3000, isClosable: true });

	return (
		<HStack w="100%" key={treatment.id}>
			<Checkbox
				defaultChecked={isChecked}
				onChange={() => {
					if (checkedTreatmentId)
						triggerUncheckFollowUpTreatment(checkedTreatmentId)
							.unwrap()
							.then(() => {
								toast({
									title: 'Votre traitement a bien été décoché',
									status: 'success',
								});
								setIsChecked(false);
							})
							.catch(() => {
								toast({ title: 'Une erreur est survenue', status: 'error' });
							});
					else
						triggerCheckFollowUpTreatment({
							treatmentId: treatment.id,
							date: day.getTime(),
							periods: [period],
						})
							.unwrap()
							.then(() => {
								toast({
									title: 'Votre traitement a bien été coché',
									status: 'success',
								});
								setIsChecked(true);
							})
							.catch(() => {
								toast({ title: 'Une erreur est survenue', status: 'error' });
							});
				}}
				borderColor={isToday ? 'blue.300' : 'blue.200'}
			>
				<Text key={treatment.id} size="boldSm" textDecoration={isChecked ? 'line-through' : 'none'}>
					{treatment.quantity} x {medicinesInfo.find((m) => m.id === treatment.medicineId)?.name}
				</Text>
			</Checkbox>
		</HStack>
	);
};

export default TreatmentsCheckboxTreatment;
