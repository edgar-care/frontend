import { useBreakpointValue } from '@chakra-ui/react';

import DeleteTreatmentDrawer from 'components/dashboardPages/treatments/modal/DeleteTreatmentDrawer';
import DeleteTreatmentModal from 'components/dashboardPages/treatments/modal/DeleteTreatmentModal';
import { PatientMedicineType } from 'types/dashboard/medical/PatientMedicineType';

const DeleteTreatmentHandler = ({
	isOpen,
	onClose,
	medicineIds,
}: {
	isOpen: boolean;
	onClose: () => void;
	medicineIds: PatientMedicineType[] | undefined;
}): JSX.Element => {
	const isMobile = useBreakpointValue({ base: true, smd: false });

	return (
		<>
			{isMobile ? (
				<DeleteTreatmentDrawer isOpen={isOpen} onClose={onClose} medicineIds={medicineIds} />
			) : (
				<DeleteTreatmentModal isOpen={isOpen} onClose={onClose} medicineIds={medicineIds} />
			)}
		</>
	);
};

export default DeleteTreatmentHandler;
