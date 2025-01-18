import type { Dispatch, SetStateAction } from 'react';

import StartChatContent from 'components/dashboardPages/chat/modals/StartChatContent';
import SelectDoctorContent from 'components/dashboardPages/chat/modals/SelectDoctorContent';

import type { DoctorType } from 'types/dashboard/DoctorType';

const SelectDoctorBodyContent = ({
	selectedDoctor,
	setSelectedDoctor,
	onClose,
}: {
	selectedDoctor: DoctorType | undefined;
	setSelectedDoctor: Dispatch<SetStateAction<DoctorType | undefined>>;
	onClose: () => void;
}): JSX.Element => (
	<>
		{selectedDoctor ? (
			<StartChatContent selectedDoctor={selectedDoctor} setSelectedDoctor={setSelectedDoctor} onClose={onClose} />
		) : (
			<SelectDoctorContent onClick={(doctorInfos) => setSelectedDoctor(doctorInfos)} />
		)}
	</>
);

export default SelectDoctorBodyContent;
