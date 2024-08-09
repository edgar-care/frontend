import { type Dispatch, type SetStateAction } from 'react';
import { Button, useBreakpointValue, useToast } from '@chakra-ui/react';

import ModalHandler from 'components/modals/ModalHandler';
import SimulationAppointmentsSlotContent from 'components/simulationPages/appointments/modals/SimulationAppointmentsSlotContent';

import { type DoctorType } from 'types/dashboard/DoctorType';
import { type SlotType } from 'types/simulation/appointments/SlotType';
import { type ModalSizeType } from 'types/modals/ModalSizeType';

import CalendarIllustration from 'assets/illustrations/CalendarIllustration';

const SimulationAppointmentsSlotsHandler = ({
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

	const modalSize = useBreakpointValue<ModalSizeType>({ base: '2xl', md: '3xl', lg: '5xl' }) || '2xl';

	return (
		<ModalHandler
			isOpen={isOpen}
			onClose={onClose}
			size={modalSize}
			headerTitle="Prendre un rendez-vous"
			headerSubtitle="Sélectionner une date pour votre rendez-vous chez ce médecin."
			headerIcon={CalendarIllustration}
			bodyContent={
				<SimulationAppointmentsSlotContent
					doctor={doctor}
					slots={slots}
					selectedSlot={selectedSlot}
					setSelectedSlot={setSelectedSlot}
				/>
			}
			footerPrimaryButton={
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
					Sélectionner le rendez-vous
				</Button>
			}
			footerSecondaryButton={
				<Button variant="secondary" w="100%" onClick={onClose}>
					Annuler
				</Button>
			}
		/>
	);
};
export default SimulationAppointmentsSlotsHandler;
