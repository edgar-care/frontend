import { type Dispatch, type SetStateAction } from 'react';
import {
	Button,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerFooter,
	DrawerOverlay,
	useToast,
	VStack,
} from '@chakra-ui/react';

import SimulationAppointmentsSlotContent from 'components/simulationPages/appointments/modals/SimulationAppointmentsSlotContent';

import { type DoctorType } from 'types/dashboard/DoctorType';
import { type SlotType } from 'types/simulation/appointments/SlotType';

const SimulationAppointmentsSlotsDrawer = ({
	isOpen,
	onClose,
	doctor,
	slots,
	selectedSlot,
	setSelectedSlot,
}: {
	isOpen: boolean;
	onClose: () => void;
	doctor: DoctorType;
	slots: { [key: string]: SlotType[] };
	selectedSlot: SlotType | undefined;
	setSelectedSlot: Dispatch<SetStateAction<SlotType | undefined>>;
}): JSX.Element => {
	const toast = useToast({ duration: 3000, isClosable: true });

	return (
		<Drawer isOpen={isOpen} onClose={onClose} size="sm" placement="bottom">
			<DrawerOverlay />
			<DrawerContent borderRadius="16px 16px 0px 0px">
				<DrawerBody p="16px">
					<VStack w="100%" spacing="32px">
						<SimulationAppointmentsSlotContent
							doctor={doctor}
							slots={slots}
							selectedSlot={selectedSlot}
							setSelectedSlot={setSelectedSlot}
						/>
					</VStack>
				</DrawerBody>
				<DrawerFooter p="16px">
					<VStack w="100%">
						<Button
							w="100%"
							onClick={() => {
								if (selectedSlot && selectedSlot.doctorId === doctor.id) onClose();
								else
									toast({
										title: 'Veuillez sélectionner un rendez-vous',
										status: 'error',
									});
							}}
						>
							Valider le rendez-vous
						</Button>
						<Button variant="secondary" w="100%" onClick={onClose}>
							Annuler
						</Button>
					</VStack>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default SimulationAppointmentsSlotsDrawer;
