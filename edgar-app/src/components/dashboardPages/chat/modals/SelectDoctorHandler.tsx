import { useState } from 'react';

import ModalHandler from 'components/modals/ModalHandler';
import SelectDoctorBodyContent from 'components/dashboardPages/chat/modals/SelectDoctorBodyContent';

import type { DoctorType } from 'types/dashboard/DoctorType';

import CreateChatIllustration from 'assets/illustrations/CreateChatIllustration';

const SelectDoctorHandler = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }): JSX.Element => {
	const [selectedDoctor, setSelectedDoctor] = useState<DoctorType | undefined>(undefined);

	const onCloseAction = () => {
		setSelectedDoctor(undefined);
		onClose();
	};

	return (
		<ModalHandler
			isOpen={isOpen}
			onClose={onCloseAction}
			size="3xl"
			headerTitle="Commencer une conversation"
			headerSubtitle={
				selectedDoctor
					? 'Ecriver votre message pour commencer la conversation avec ce médecin.'
					: 'Commencer une nouvelle conversation en sélectionnant un médecin.'
			}
			headerIcon={CreateChatIllustration}
			bodyContent={
				<SelectDoctorBodyContent
					selectedDoctor={selectedDoctor}
					setSelectedDoctor={setSelectedDoctor}
					onClose={onClose}
				/>
			}
		/>
	);
};
export default SelectDoctorHandler;
