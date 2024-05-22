import { Icon, Text, VStack } from '@chakra-ui/react';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import DiagnosticCancelModalReasonInput from 'components/app/dashboardPages/diagnostics/modals/cancelModal/fields/DiagnosticCancelModalReasonInput';
import DiagnosticCancelModalHealMethodInput from 'components/app/dashboardPages/diagnostics/modals/cancelModal/fields/DiagnosticCancelModalHealMethodInput';

import DeleteCrossIllustration from 'assets/illustrations/DeleteCrossIllustration';

import { type AddDiagnosticDTO } from 'store/types/diagnostics.type';

const DiagnosticCancelModalContent = ({
	errors,
	register,
}: {
	errors: FieldErrors<AddDiagnosticDTO>;
	register: UseFormRegister<AddDiagnosticDTO>;
}): JSX.Element => (
	<VStack spacing="32px" w="100%">
		<VStack>
			<Icon as={DeleteCrossIllustration} w="48px" h="48px" />
			<VStack>
				<Text size="xl">Êtes-vous sûr ?</Text>
				<Text maxW="350px" align="center" color="grey.500">
					Si vous annulez ce rendez-vous, votre patient ne pourra plus y assister.
				</Text>
			</VStack>
		</VStack>
		<VStack w="100%" spacing="24px" align="start" px="32px">
			<DiagnosticCancelModalReasonInput errors={errors} register={register} />
			<DiagnosticCancelModalHealMethodInput errors={errors} register={register} />
		</VStack>
	</VStack>
);

export default DiagnosticCancelModalContent;
