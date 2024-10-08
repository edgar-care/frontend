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
import type { Control, FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';

import AddTreatmentIllustration from 'assets/illustrations/AddTreatmentIllustration';
import AddTreatmentContent from 'components/dashboardPages/treatments/modal/AddTreatmentContent';

import { type TreatmentType } from 'types/dashboard/treatments/TreatmentType';

const AddTreatmentDrawer = ({
	isOpen,
	onClose,
	onSubmit,
	register,
	control,
	errors,
	watch,
}: {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: () => void;
	register: UseFormRegister<TreatmentType>;
	control: Control<TreatmentType>;
	errors: FieldErrors<TreatmentType>;
	watch: UseFormWatch<TreatmentType>;
}) => {
	const isMobile = useBreakpointValue({ base: true, sm: false });

	return (
		<Drawer isOpen={isOpen} onClose={() => onClose()} size="sm" placement="bottom">
			<DrawerOverlay />
			<DrawerBody p="24px 24px 16px 24px">
				<VStack w="100%" spacing="32px">
					<VStack w="100%">
						<Icon as={AddTreatmentIllustration} w="48px" h="48px" />
						<Text size="xl" textAlign="center">
							Ajoutez un traitement
						</Text>
					</VStack>
					<AddTreatmentContent
						onSubmit={onSubmit}
						register={register}
						control={control}
						errors={errors}
						watch={watch}
					/>
				</VStack>
			</DrawerBody>
			<DrawerFooter p="16px 24px 24px 24px">
				{isMobile ? (
					<VStack w="100%" spacing="12px">
						<Button size="customMd" variant="validate" w="100%" onClick={onSubmit}>
							Ajouter
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
							Ajouter
						</Button>
					</HStack>
				)}
			</DrawerFooter>
			<DrawerContent borderRadius="12px"></DrawerContent>
		</Drawer>
	);
};

export default AddTreatmentDrawer;
