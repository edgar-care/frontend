import { useBreakpointValue } from '@chakra-ui/react';

import UpdateTreatmentDrawer from 'components/dashboardPages/treatments/modal/UpdateTreatmentDrawer';
import UpdateTreatmentModal from 'components/dashboardPages/treatments/modal/UpdateTreatmentModal';

import { type PatientMedicalAntecedentType } from 'types/dashboard/medical/PatientMedicalAntecedentType';

const UpdateTreatmentHandler = ({
	isOpen,
	onClose,
	antecedent,
}: {
	isOpen: boolean;
	onClose: () => void;
	antecedent: PatientMedicalAntecedentType | undefined;
}): JSX.Element => {
	const isMobile = useBreakpointValue({ base: true, smd: false });

	return (
		<>
			{isMobile ? (
				<UpdateTreatmentDrawer isOpen={isOpen} onClose={onClose} antecedent={antecedent} />
			) : (
				<UpdateTreatmentModal isOpen={isOpen} onClose={onClose} antecedent={antecedent} />
			)}
		</>
	);
};

export default UpdateTreatmentHandler;
