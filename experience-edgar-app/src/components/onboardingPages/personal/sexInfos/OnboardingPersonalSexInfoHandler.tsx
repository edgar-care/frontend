import { useBreakpointValue } from '@chakra-ui/react';

import OnboardingPersonalSexDrawer from 'components/onboardingPages/personal/sexInfos/OnboardingPersonalSexDrawer';
import OnboardingPersonalSexModal from 'components/onboardingPages/personal/sexInfos/OnboardingPersonalSexModal';

const OnboardingPersonalSexInfoHandler = ({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}): JSX.Element => {
	const isMobile = useBreakpointValue({ base: true, smd: false });

	return (
		<>
			{isMobile ? (
				<OnboardingPersonalSexDrawer isOpen={isOpen} onClose={onClose} />
			) : (
				<OnboardingPersonalSexModal isOpen={isOpen} onClose={onClose} />
			)}
		</>
	);
};

export default OnboardingPersonalSexInfoHandler;
