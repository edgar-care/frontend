import { type Dispatch, type SetStateAction } from 'react';

import ModalHandler from 'components/modals/ModalHandler';
import SelectPrimaryDoctorContent from 'components/onboardingPages/personal/primaryDoctor/SelectPrimaryDoctorContent';

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
		headerTitle="Ajout de vos informations médicales"
		headerSubtitle="Sélectionner votre médecin traitant."
		headerIcon={PeopleIllustration}
		bodyContent={
			<SelectPrimaryDoctorContent
				onChange={onChange}
				onClose={onClose}
				setPrimaryDoctorName={setPrimaryDoctorName}
			/>
		}
	/>
);
export default SelectPrimaryDoctorHandler;
