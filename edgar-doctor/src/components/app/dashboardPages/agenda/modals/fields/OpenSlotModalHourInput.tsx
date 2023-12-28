import { FormLabel, Select, VStack } from '@chakra-ui/react';
import { type UseFormRegister, type FieldErrors } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';

import { type OpenSlotType } from 'types/app/dashboard/agenda/OpenSlotType';

const OpenSlotModalHourInput = ({
	errors,
	register,
	availableHours,
}: {
	errors: FieldErrors<OpenSlotType>;
	register: UseFormRegister<OpenSlotType>;
	availableHours: string[];
}): JSX.Element => (
	<VStack spacing="8px" align="start" w="100%">
		<FormLabel size="boldLg" id="edgar-dashboardAgendaPage-formHour-text">
			Heure du créneau
		</FormLabel>
		<Select {...register('startTime', { required: true })} isDisabled={availableHours.length === 0}>
			{availableHours.map((hour) => (
				<option key={hour} value={hour}>
					{hour}
				</option>
			))}
		</Select>
		{errors.startTime?.type === 'required' && (
			<ErrorMessage id="edgar-dashboardAgendaPage-formHourErrorRequired-text">
				Ce champ est nécessaire
			</ErrorMessage>
		)}
	</VStack>
);

export default OpenSlotModalHourInput;
