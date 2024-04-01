import {
	Button,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerFooter,
	DrawerOverlay,
	Icon,
	Text,
	VStack,
} from '@chakra-ui/react';
import type { Control, FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';

import SelectHealthIssueContent from 'components/onboardingPages/medical/healthIssues/SelectHealthIssueContent';

import { type HealthIssuesType } from 'types/dashboard/medical/HealthIssueType';

import AddHealthIssueIllustration from 'assets/illustrations/AddHealthIssueIllustration';

const SelectHealthIssueDrawer = ({
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
	register: UseFormRegister<HealthIssuesType>;
	control: Control<HealthIssuesType>;
	errors: FieldErrors<HealthIssuesType>;
	watch: UseFormWatch<HealthIssuesType>;
}): JSX.Element => (
	<Drawer isOpen={isOpen} onClose={onClose} size="sm" placement="bottom">
		<DrawerOverlay />
		<DrawerContent borderRadius="16px 16px 0px 0px">
			<DrawerBody p="16px">
				<VStack w="100%" spacing="32px">
					<VStack w="100%">
						<Icon as={AddHealthIssueIllustration} w="48px" h="48px" />
						<VStack w="100%">
							<Text size="xl" textAlign="center">
								Ajoutez un sujet de santé
							</Text>
						</VStack>
					</VStack>
					<SelectHealthIssueContent
						onSubmit={onSubmit}
						register={register}
						control={control}
						errors={errors}
						watch={watch}
					/>
				</VStack>
			</DrawerBody>
			<DrawerFooter p="16px">
				<VStack w="100%">
					<Button size="customMd" variant="validate" w="100%" onClick={onSubmit}>
						Ajouter
					</Button>
					<Button size="customMd" variant="secondary" w="100%" onClick={onClose}>
						Annuler
					</Button>
				</VStack>
			</DrawerFooter>
		</DrawerContent>
	</Drawer>
);

export default SelectHealthIssueDrawer;
