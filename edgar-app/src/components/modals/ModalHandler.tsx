import { type SlideOptions, useBreakpointValue } from '@chakra-ui/react';
import type { ComponentWithAs } from '@chakra-ui/system';
import type { IconProps } from '@chakra-ui/icons';

import CustomDrawer from 'components/modals/CustomDrawer';
import CustomModal from 'components/modals/CustomModal';

import type { ModalSizeType } from 'types/modals/ModalSizeType';

const ModalHandler = ({
	isOpen,
	onClose,
	onReturn = () => {},
	size,
	hasReturnButton = false,
	placement = 'bottom',
	headerTitle,
	headerSubtitle,
	headerIcon,
	bodyContent,
	footerPrimaryButton,
	footerSecondaryButton,
}: {
	isOpen: boolean;
	onClose: () => void;
	onReturn?: () => void;
	size: ModalSizeType;
	hasReturnButton?: boolean;
	placement?: SlideOptions['direction'];
	headerTitle: string;
	headerSubtitle?: string;
	headerIcon: ComponentWithAs<'svg', IconProps>;
	bodyContent?: JSX.Element;
	footerPrimaryButton?: JSX.Element;
	footerSecondaryButton?: JSX.Element;
}): JSX.Element => {
	const isMobile = useBreakpointValue({ base: true, smd: false });

	return (
		<>
			{isMobile ? (
				<CustomDrawer
					isOpen={isOpen}
					onClose={onClose}
					onReturn={onReturn}
					hasReturnButton={hasReturnButton}
					placement={placement}
					headerTitle={headerTitle}
					headerSubtitle={headerSubtitle}
					headerIcon={headerIcon}
					bodyContent={bodyContent}
					footerPrimaryButton={footerPrimaryButton}
					footerSecondaryButton={footerSecondaryButton}
				/>
			) : (
				<CustomModal
					isOpen={isOpen}
					onClose={onClose}
					onReturn={onReturn}
					size={size}
					hasReturnButton={hasReturnButton}
					headerTitle={headerTitle}
					headerSubtitle={headerSubtitle}
					headerIcon={headerIcon}
					bodyContent={bodyContent}
					footerPrimaryButton={footerPrimaryButton}
					footerSecondaryButton={footerSecondaryButton}
				/>
			)}
		</>
	);
};
export default ModalHandler;
