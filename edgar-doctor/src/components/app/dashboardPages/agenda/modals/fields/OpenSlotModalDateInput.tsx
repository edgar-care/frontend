import { FormLabel, Input, VStack } from '@chakra-ui/react';
import { type UseFormRegister, type FieldErrors } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';

import { type OpenSlotType } from 'types/app/dashboard/agenda/OpenSlotType';

const OpenSlotModalDateInput = ({
	errors,
	register,
}: {
	errors: FieldErrors<OpenSlotType>;
	register: UseFormRegister<OpenSlotType>;
}): JSX.Element => (
	<VStack spacing="8px" align="start" w="100%">
		<FormLabel size="boldLg" id="edgar-dashboardAgendaPage-formDate-text">
			Date du créneau
		</FormLabel>
		<Input
			{...register('date', { required: true, valueAsDate: false, min: new Date().toISOString().split('T')[0] })}
			placeholder="Sélectionner la date du créneau"
			w="100%"
			min={new Date().toISOString().split('T')[0]}
			type="date"
			id="edgar-dashboardAgendaPage-formDate-input"
		/>
		{errors.date?.type === 'required' && (
			<ErrorMessage id="edgar-dashboardAgendaPage-formDateErrorRequired-text">
				Ce champ est nécessaire
			</ErrorMessage>
		)}
		{errors.date?.type === 'min' && (
			<ErrorMessage id="edgar-dashboardAgendaPage-formDateErrorMin-text">
				La date ne peut pas être antérieure à celle d'aujourd'hui
			</ErrorMessage>
		)}
	</VStack>
);

export default OpenSlotModalDateInput;
