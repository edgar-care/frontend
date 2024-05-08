import { useBreakpointValue } from '@chakra-ui/react';

import UpdateMedicalModal from 'components/dashboardPages/medical/modal/UpdateMedicalModal';
import UpdateMedicalDrawer from 'components/dashboardPages/medical/modal/UpdateMedicalDrawer';

import { type PatientMedicalType } from 'types/dashboard/medical/PatientMedicalType';

const UpdateMedicalHandler = ({
	isOpen,
	onClose,
	medicalInfos,
}: {
	isOpen: boolean;
	onClose: () => void;
	medicalInfos: PatientMedicalType;
}): JSX.Element => {
	const isMobile = useBreakpointValue({ base: true, smd: false });

	return (
		<>
			{isMobile ? (
				<UpdateMedicalDrawer isOpen={isOpen} onClose={onClose} medicalInfos={medicalInfos} />
			) : (
				<UpdateMedicalModal isOpen={isOpen} onClose={onClose} medicalInfos={medicalInfos} />
			)}
		</>
	);
};

export default UpdateMedicalHandler;
