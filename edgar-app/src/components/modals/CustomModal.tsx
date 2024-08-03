import {
	Box,
	HStack,
	Icon,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	VStack,
} from '@chakra-ui/react';
import { type ComponentWithAs } from '@chakra-ui/system';
import { type IconProps } from '@chakra-ui/icons';

import { type ModalSizeType } from 'types/modals/ModalSizeType';

import CrossIcon from 'assets/icons/CrossIcon';
import SmallLeftArrowIcon from 'assets/icons/Arrow/Small/SmallLeftArrowIcon';

const CustomModal = ({
	isOpen,
	onClose,
	onReturn,
	size,
	id,
	hasReturnButton,
	headerTitle,
	headerSubtitle,
	headerIcon,
	bodyContent,
	footerPrimaryButton,
	footerSecondaryButton,
}: {
	isOpen: boolean;
	onClose: () => void;
	onReturn: () => void;
	size: ModalSizeType;
	id?: string;
	hasReturnButton: boolean;
	headerTitle: string;
	headerSubtitle?: string;
	headerIcon: ComponentWithAs<'svg', IconProps>;
	bodyContent?: JSX.Element;
	footerPrimaryButton?: JSX.Element;
	footerSecondaryButton?: JSX.Element;
}): JSX.Element => {
	const sizePadding = {
		xs: '16px',
		sm: '16px',
		md: '16px',
		lg: '24px',
		xl: '24px',
		'2xl': '24px',
		'3xl': '32px',
		'4xl': '32px',
		'5xl': '32px',
		full: '32px',
	};

	const sizeFooterVertical = {
		xs: true,
		sm: true,
		md: true,
		lg: true,
		xl: false,
		'2xl': false,
		'3xl': false,
		'4xl': false,
		'5xl': false,
		full: false,
	};

	const sizeLeftBanner = {
		xs: false,
		sm: false,
		md: false,
		lg: false,
		xl: false,
		'2xl': true,
		'3xl': true,
		'4xl': true,
		'5xl': true,
		full: true,
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} size={size} autoFocus={false}>
			<ModalOverlay />
			<ModalContent p={sizePadding[size]} mx="12px">
				<HStack w="100%" align="stretch" spacing="32px">
					{sizeLeftBanner[size] && (
						<VStack w="64px" spacing="16px" align="start">
							{hasReturnButton && (
								<Icon
									h="16px"
									w="auto"
									as={SmallLeftArrowIcon}
									onClick={onReturn}
									cursor="pointer"
									id={`edgar-${id}-returnButton-icon`}
								/>
							)}
							<Box
								w="100%"
								h="100%"
								bg="radial-gradient(circle at center, #A0C9F0 0, #335FC2 100%);"
								borderRadius="12px"
								id={`edgar-${id}-banner-div`}
							/>
						</VStack>
					)}
					<VStack w="100%" spacing="32px">
						<ModalHeader p="0px" w="100%">
							<VStack w="100%" spacing="16px" align="start">
								<HStack w="100%" justify="space-between" align="center" pr="12px">
									<Icon as={headerIcon} w="48px" h="48px" id={`edgar-${id}-headerIcon-icon`} />
									{hasReturnButton ? (
										!sizeLeftBanner[size] && (
											<Icon
												as={SmallLeftArrowIcon}
												w="16px"
												h="16px"
												cursor="pointer"
												onClick={onReturn}
												id={`edgar-${id}-returnButton-icon`}
											/>
										)
									) : (
										<Icon
											as={CrossIcon}
											w="16px"
											h="16px"
											cursor="pointer"
											onClick={onClose}
											id={`edgar-${id}-closeButton-icon`}
										/>
									)}
								</HStack>
								<VStack w="100%" spacing="0px">
									<Text size="boldXl" w="100%" id={`edgar-${id}-headerTitle-text`}>
										{headerTitle}
									</Text>
									{headerSubtitle && (
										<Text color="grey.600" w="100%" id={`edgar-${id}-headerSubtitle-text`}>
											{headerSubtitle}
										</Text>
									)}
								</VStack>
							</VStack>
						</ModalHeader>
						{bodyContent && (
							<ModalBody p="0px" w="100%">
								{bodyContent}
							</ModalBody>
						)}
						{(footerPrimaryButton || footerSecondaryButton) && (
							<ModalFooter p="0px" w="100%">
								{sizeFooterVertical[size] ? (
									<VStack w="100%">
										{footerPrimaryButton}
										{footerSecondaryButton}
									</VStack>
								) : (
									<HStack w="100%" spacing="16px">
										{footerSecondaryButton}
										{footerPrimaryButton}
									</HStack>
								)}
							</ModalFooter>
						)}
					</VStack>
				</HStack>
			</ModalContent>
		</Modal>
	);
};

export default CustomModal;
