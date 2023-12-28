import { HStack, Icon, Stack, Text, VStack } from '@chakra-ui/react';
import { type FieldErrors, type UseFormRegister } from 'react-hook-form';

import OpenSlotModalDateInput from 'components/app/dashboardPages/agenda/modals/fields/OpenSlotModalDateInput';
import OpenSlotModalHourInput from 'components/app/dashboardPages/agenda/modals/fields/OpenSlotModalHourInput';

import { type OpenSlotType } from 'types/app/dashboard/agenda/OpenSlotType';

import DiamondWarningIcon from 'assets/icons/DiamondWarningIcon';

const OpenSlotModalContent = ({
	register,
	errors,
	availableHours,
}: {
	register: UseFormRegister<OpenSlotType>;
	errors: FieldErrors<OpenSlotType>;
	availableHours: string[];
}): JSX.Element => (
	<VStack w="100%" spacing="24px" align="start">
		<Stack direction={{ base: 'column', sm: 'row' }} w="100%" spacing={{ base: '16px', sm: '32px' }}>
			<OpenSlotModalDateInput errors={errors} register={register} />
			<OpenSlotModalHourInput errors={errors} register={register} availableHours={availableHours} />
		</Stack>
		<HStack
			spacing="16px"
			borderRadius="16px"
			w="100%"
			p="16px"
			bg="orange.100"
			border="2px solid"
			borderColor="orange.300"
		>
			<Icon as={DiamondWarningIcon} w="32px" h="32px" color="orange.600" />
			<Text size="boldMd" color="orange.600">
				En ouvrant ce créneau, n’importe quel patient pourra le réserver
			</Text>
		</HStack>
	</VStack>
);

export default OpenSlotModalContent;
