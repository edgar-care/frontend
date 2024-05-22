import { type Dispatch, type SetStateAction } from 'react';
import { useBreakpointValue } from '@chakra-ui/react';

import SelectPrimaryDoctorDrawer from 'components/app/dashboardPages/patients/modal/forms/primaryDoctor/SelectPrimaryDoctorDrawer';
import SelectPrimaryDoctorModal from 'components/app/dashboardPages/patients/modal/forms/primaryDoctor/SelectPrimaryDoctorModal';

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
}): JSX.Element => {
	const isMobile = useBreakpointValue({ base: true, smd: false });

	return (
		<>
			{isMobile ? (
				<SelectPrimaryDoctorDrawer
					isOpen={isOpen}
					onClose={onClose}
					onChange={onChange}
					setPrimaryDoctorName={setPrimaryDoctorName}
				/>
			) : (
				<SelectPrimaryDoctorModal
					isOpen={isOpen}
					onClose={onClose}
					onChange={onChange}
					setPrimaryDoctorName={setPrimaryDoctorName}
				/>
			)}
		</>
	);
};
export default SelectPrimaryDoctorHandler;
