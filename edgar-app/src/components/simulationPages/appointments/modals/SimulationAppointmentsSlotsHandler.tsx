import { type Dispatch, type SetStateAction } from 'react';
import { useBreakpointValue } from '@chakra-ui/react';

import SimulationAppointmentsSlotsModal from 'components/simulationPages/appointments/modals/SimulationAppointmentsSlotsModal';
import SimulationAppointmentsSlotsDrawer from 'components/simulationPages/appointments/modals/SimulationAppointmentsSlotsDrawer';

import { type DoctorType } from 'types/dashboard/DoctorType';
import { type SlotType } from 'types/simulation/appointments/SlotType';

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
	const isMobile = useBreakpointValue({ base: true, smd: false });

	return (
		<>
			{isMobile ? (
				<SimulationAppointmentsSlotsDrawer
					isOpen={isOpen}
					onClose={onClose}
					doctor={doctor}
					slots={slots}
					selectedSlot={selectedSlot}
					setSelectedSlot={setSelectedSlot}
				/>
			) : (
				<SimulationAppointmentsSlotsModal
					isOpen={isOpen}
					onClose={onClose}
					doctor={doctor}
					slots={slots}
					selectedSlot={selectedSlot}
					setSelectedSlot={setSelectedSlot}
				/>
			)}
		</>
	);
};
export default SimulationAppointmentsSlotsHandler;
