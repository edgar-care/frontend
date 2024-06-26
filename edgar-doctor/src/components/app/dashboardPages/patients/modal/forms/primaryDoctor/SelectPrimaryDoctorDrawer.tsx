import { type Dispatch, type SetStateAction } from 'react';
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

import PeopleIllustration from 'assets/illustrations/PeopleIllustration';
import SelectPrimaryDoctorContent from 'components/app/dashboardPages/patients/modal/forms/primaryDoctor/SelectPrimaryDoctorContent';

const SelectPrimaryDoctorDrawer = ({
	isOpen,
	onClose,
	onChange,
	setPrimaryDoctorName,
}: {
	isOpen: boolean;
	onClose: () => void;
	onChange: (event: unknown) => void;
	setPrimaryDoctorName: Dispatch<SetStateAction<string>>;
}): JSX.Element => (
	<Drawer isOpen={isOpen} onClose={onClose} size="sm" placement="bottom">
		<DrawerOverlay />
		<DrawerContent borderRadius="16px 16px 0px 0px">
			<DrawerBody p="16px">
				<VStack w="100%" spacing="32px">
					<VStack w="100%">
						<Icon as={PeopleIllustration} w="48px" h="48px" />
						<VStack w="100%">
							<Text size="xl" textAlign="center">
								Sélectionnez votre médecin traitant
							</Text>
						</VStack>
					</VStack>
					<SelectPrimaryDoctorContent
						onChange={onChange}
						onClose={onClose}
						setPrimaryDoctorName={setPrimaryDoctorName}
					/>
				</VStack>
			</DrawerBody>
			<DrawerFooter p="16px">
				<Button size="customMd" variant="secondary" w="100%" onClick={onClose}>
					Annuler
				</Button>
			</DrawerFooter>
		</DrawerContent>
	</Drawer>
);

export default SelectPrimaryDoctorDrawer;
