import {
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerOverlay,
	DrawerFooter,
	useBreakpointValue,
	VStack,
	Button,
	HStack,
	Icon,
	Text,
} from '@chakra-ui/react';
import type { Control, FieldErrors } from 'react-hook-form';

import UpdateTreatmentContent from 'components/dashboardPages/treatments/modal/UpdateTreatmentContent';

import type { PatientMedicalAntecedentType } from 'types/dashboard/medical/PatientMedicalAntecedentType';
import type { PatientMedicineType } from 'types/dashboard/medical/PatientMedicineType';

import UpdateTreatmentIllustration from 'assets/illustrations/UpdateTreatmentIllustration';

const UpdateTreatmentDrawer = ({
	addedMedicines,
	isOpen,
	onClose,
	onSubmit,
	control,
	errors,
}: {
	addedMedicines: PatientMedicineType[];
	isOpen: boolean;
	onClose: () => void;
	onSubmit: () => void;
	control: Control<PatientMedicalAntecedentType>;
	errors: FieldErrors<PatientMedicalAntecedentType>;
}) => {
	const isMobile = useBreakpointValue({ base: true, sm: false });

	return (
		<Drawer isOpen={isOpen} onClose={() => onClose()} size="sm" placement="bottom">
			<DrawerOverlay />
			<DrawerBody p="24px 24px 16px 24px">
				<VStack w="100%" spacing="32px">
					<VStack w="100%">
						<Icon as={UpdateTreatmentIllustration} w="48px" h="48px" />
						<Text size="xl" textAlign="center">
							Modifiez un traitement
						</Text>
					</VStack>
					<UpdateTreatmentContent
						addedMedicines={addedMedicines}
						onSubmit={onSubmit}
						control={control}
						errors={errors}
					/>
				</VStack>
			</DrawerBody>
			<DrawerFooter p="16px 24px 24px 24px">
				{isMobile ? (
					<VStack w="100%" spacing="12px">
						<Button size="customMd" variant="validate" w="100%" onClick={onSubmit}>
							Modifier
						</Button>
						<Button size="customMd" variant="secondary" w="100%" onClick={onClose}>
							Annuler
						</Button>
					</VStack>
				) : (
					<HStack w="100%" spacing="12px">
						<Button size="customMd" variant="secondary" w="100%" onClick={onClose}>
							Annuler
						</Button>
						<Button size="customMd" variant="validate" w="100%" onClick={onSubmit}>
							Modifier
						</Button>
					</HStack>
				)}
			</DrawerFooter>
			<DrawerContent borderRadius="12px"></DrawerContent>
		</Drawer>
	);
};

export default UpdateTreatmentDrawer;
