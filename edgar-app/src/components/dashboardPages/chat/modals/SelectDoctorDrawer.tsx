import { useState } from 'react';
import {
	Button,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerFooter,
	DrawerOverlay,
	Icon,
	Text,
	VStack,
} from '@chakra-ui/react';

import SelectDoctorContent from 'components/dashboardPages/chat/modals/SelectDoctorContent';
import StartChatContent from 'components/dashboardPages/chat/modals/StartChatContent';

import CreateChatIllustration from 'assets/illustrations/CreateChatIllustration';

import type { DoctorType } from 'types/dashboard/DoctorType';

const SelectDoctorDrawer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }): JSX.Element => {
	const [selectedDoctor, setSelectedDoctor] = useState<DoctorType | undefined>(undefined);

	return (
		<Drawer
			isOpen={isOpen}
			onClose={() => {
				setSelectedDoctor(undefined);
				onClose();
			}}
			size="sm"
			placement="bottom"
		>
			<DrawerOverlay />
			<DrawerContent borderRadius="16px 16px 0px 0px">
				<DrawerBody p="16px">
					<VStack w="100%" spacing="32px">
						<VStack w="100%">
							<Icon as={CreateChatIllustration} w="48px" h="48px" />
							<VStack w="100%">
								<Text size="xl" textAlign="center">
									Démarrez une nouvelle conversation
								</Text>
							</VStack>
						</VStack>
						{selectedDoctor ? (
							<StartChatContent
								selectedDoctor={selectedDoctor}
								onClose={() => {
									setSelectedDoctor(undefined);
									onClose();
								}}
							/>
						) : (
							<SelectDoctorContent onClick={(doctorInfos) => setSelectedDoctor(doctorInfos)} />
						)}
					</VStack>
				</DrawerBody>
				<DrawerFooter p="16px">
					<Button
						size="customMd"
						variant="secondary"
						w="100%"
						onClick={() => {
							setSelectedDoctor(undefined);
							onClose();
						}}
					>
						Annuler
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default SelectDoctorDrawer;
