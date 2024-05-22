import { type Dispatch, type SetStateAction } from 'react';
import {
	Button,
	HStack,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalOverlay,
	useToast,
	VStack,
} from '@chakra-ui/react';

import SimulationAppointmentsSlotContent from 'components/simulationPages/appointments/modals/SimulationAppointmentsSlotContent';

import { type DoctorType } from 'types/dashboard/DoctorType';
import { type SlotType } from 'types/simulation/appointments/SlotType';

const SimulationAppointmentsSlotsModal = ({
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
		<Modal isOpen={isOpen} onClose={onClose} size={{ base: '2xl', md: '3xl', lg: '5xl' }}>
			<ModalOverlay />
			<ModalContent>
				<ModalBody p="32px 32px 24px 32px">
					<VStack w="100%">
						<SimulationAppointmentsSlotContent
							doctor={doctor}
							slots={slots}
							selectedSlot={selectedSlot}
							setSelectedSlot={setSelectedSlot}
						/>
					</VStack>
				</ModalBody>
				<ModalFooter p="24px 32px 32px 32px">
					<HStack w="100%">
						<Button variant="secondary" w="100%" onClick={onClose}>
							Annuler
						</Button>
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
					</HStack>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default SimulationAppointmentsSlotsModal;
