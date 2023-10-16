import { useBreakpointValue } from '@chakra-ui/react';

import OnboardingMedicalModal from 'components/app/onboardingPages/medical/emptyInfosWarning/OnboardingMedicalModal';
import OnboardingMedicalDrawer from 'components/app/onboardingPages/medical/emptyInfosWarning/OnboardingMedicalDrawer';

const OnboardingMedicalWarningHandler = ({
	body,
	isOpen,
	onClose,
	onClick,
}: {
	body: JSX.Element;
	isOpen: boolean;
	onClose: () => void;
	onClick: () => void;
}): JSX.Element => {
	const isMobile = useBreakpointValue({ base: true, smd: false });

	return (
		<>
			{isMobile ? (
				<OnboardingMedicalDrawer body={body} isOpen={isOpen} onClose={onClose} onClick={onClick} />
			) : (
				<OnboardingMedicalModal body={body} isOpen={isOpen} onClose={onClose} onClick={onClick} />
			)}
		</>
	);
};

export default OnboardingMedicalWarningHandler;
