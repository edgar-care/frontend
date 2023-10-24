import { useBreakpointValue } from '@chakra-ui/react';

import UpdateMedicalModal from 'components/dashboardPages/medical/modal/UpdateMedicalModal';
import UpdateMedicalDrawer from 'components/dashboardPages/medical/modal/UpdateMedicalDrawer';

import { type HealthInfos, type PersonalInfos } from 'types/onboarding/OnboardingInfos';

const UpdateMedicalHandler = ({
	isOpen,
	onClose,
	personalInfos,
	medicalInfos,
}: {
	isOpen: boolean;
	onClose: () => void;
	personalInfos: PersonalInfos;
	medicalInfos: HealthInfos;
}): JSX.Element => {
	const isMobile = useBreakpointValue({ base: true, smd: false });

	return (
		<>
			{isMobile ? (
				<UpdateMedicalDrawer
					isOpen={isOpen}
					onClose={onClose}
					personalInfos={personalInfos}
					medicalInfos={medicalInfos}
				/>
			) : (
				<UpdateMedicalModal
					isOpen={isOpen}
					onClose={onClose}
					personalInfos={personalInfos}
					medicalInfos={medicalInfos}
				/>
			)}
		</>
	);
};

export default UpdateMedicalHandler;
