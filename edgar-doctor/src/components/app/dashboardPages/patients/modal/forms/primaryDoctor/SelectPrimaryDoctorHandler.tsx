import { type Dispatch, type SetStateAction } from 'react';
import { Button } from '@chakra-ui/react';

import ModalHandler from 'components/modals/ModalHandler';
import SelectPrimaryDoctorContent from 'components/app/dashboardPages/patients/modal/forms/primaryDoctor/SelectPrimaryDoctorContent';

import PeopleIllustration from 'assets/illustrations/PeopleIllustration';

const SelectPrimaryDoctorHandler = ({
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
	<ModalHandler
		isOpen={isOpen}
		onClose={onClose}
		size="3xl"
		headerTitle="Sélection du médecin traitant"
		headerIcon={PeopleIllustration}
		bodyContent={
			<SelectPrimaryDoctorContent
				onChange={onChange}
				onClose={onClose}
				setPrimaryDoctorName={setPrimaryDoctorName}
			/>
		}
		footerPrimaryButton={
			<Button variant="secondary" w="100%" onClick={onClose}>
				Annuler
			</Button>
		}
	/>
);
export default SelectPrimaryDoctorHandler;
