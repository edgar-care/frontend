import {
	Drawer,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	HStack,
	Icon,
	ModalBody,
	type SlideOptions,
	Text,
	VStack,
} from '@chakra-ui/react';
import { type ComponentWithAs } from '@chakra-ui/system';
import { type IconProps } from '@chakra-ui/icons';

import CrossIcon from 'assets/icons/CrossIcon';
import SmallLeftArrowIcon from 'assets/icons/Arrow/Small/SmallLeftArrowIcon';

const CustomDrawer = ({
	isOpen,
	onClose,
	hasReturnButton,
	placement,
	maxW = 'calc(100vw - 24px) !important',
	headerTitle,
	headerSubtitle,
	headerIcon,
	bodyContent,
	footerPrimaryButton,
	footerSecondaryButton,
}: {
	isOpen: boolean;
	onClose: () => void;
	hasReturnButton: boolean;
	placement?: SlideOptions['direction'];
	maxW?: string;
	headerTitle: string;
	headerSubtitle?: string;
	headerIcon: ComponentWithAs<'svg', IconProps>;
	bodyContent?: JSX.Element;
	footerPrimaryButton?: JSX.Element;
	footerSecondaryButton?: JSX.Element;
}): JSX.Element => (
	<Drawer isOpen={isOpen} onClose={onClose} size="sm" placement={placement}>
		<DrawerOverlay />
		<DrawerContent p={{ base: '16px', ssm2: '24px' }} m="12px" borderRadius="16px" maxW={maxW}>
			<DrawerHeader p="0px 0px 16px 0px">
				<VStack w="100%" spacing="16px">
					<HStack w="100%" justify="space-between" align="center" pr="12px">
						<Icon as={headerIcon} w="48px" h="48px" />
						{hasReturnButton ? (
							<Icon as={SmallLeftArrowIcon} w="16px" h="16px" cursor="pointer" onClick={onClose} />
						) : (
							<Icon as={CrossIcon} w="16px" h="16px" cursor="pointer" onClick={onClose} />
						)}
					</HStack>
					<VStack w="100%" spacing="0px">
						<Text size="boldXl" w="100%">
							{headerTitle}
						</Text>
						{headerSubtitle && (
							<Text color="grey.600" w="100%">
								{headerSubtitle}
							</Text>
						)}
					</VStack>
				</VStack>
			</DrawerHeader>
			{bodyContent && <ModalBody p="0px">{bodyContent}</ModalBody>}
			<DrawerFooter p="16px 0px 0px 0px">
				<VStack w="100%">
					{footerPrimaryButton}
					{footerSecondaryButton}
				</VStack>
			</DrawerFooter>
		</DrawerContent>
	</Drawer>
);

export default CustomDrawer;
