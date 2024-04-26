import { type Dispatch, type SetStateAction } from 'react';
import { Text, VStack } from '@chakra-ui/react';

import SimulationAppointmentsAvailableHourCard from 'components/simulationPages/appointments/SimulationAppointmentsAvailableHourCard';

import { type SlotType } from 'types/simulation/appointments/SlotType';

const SimulationAppointmentsAvailableDayCard = ({
	date,
	availableSlots,
	variant,
	nbrDisplayedSlots = 3,
	selectedSlot,
	setSelectedSlot,
}: {
	date: Date;
	availableSlots: SlotType[];
	variant: 'SHORT' | 'FULL';
	nbrDisplayedSlots?: number;
	selectedSlot: SlotType | undefined;
	setSelectedSlot: Dispatch<SetStateAction<SlotType | undefined>>;
}): JSX.Element => (
	<VStack p={{ base: '4px', sm: '8px' }} justify="start">
		<VStack spacing="0px" w="73px">
			<Text textTransform="capitalize" userSelect="none">
				{date.toLocaleDateString('fr-FR', { weekday: 'long' })}
			</Text>
			<Text textTransform="capitalize" whiteSpace="nowrap" userSelect="none">
				{date.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' })}
			</Text>
		</VStack>
		<VStack spacing="4px" justify="start">
			{variant === 'SHORT' ? (
				<>
					{availableSlots.slice(0, 3).map((slot) => (
						<SimulationAppointmentsAvailableHourCard
							slot={slot}
							selectedSlot={selectedSlot}
							setSelectedSlot={setSelectedSlot}
							key={slot.id}
						/>
					))}
					{availableSlots.length < 3 &&
						Array.from({ length: 3 - availableSlots.length }).map((_, index) => (
							<SimulationAppointmentsAvailableHourCard
								slot={undefined}
								selectedSlot={selectedSlot}
								setSelectedSlot={setSelectedSlot}
								key={index}
							/>
						))}
				</>
			) : (
				<>
					{availableSlots.map((slot) => (
						<SimulationAppointmentsAvailableHourCard
							slot={slot}
							selectedSlot={selectedSlot}
							setSelectedSlot={setSelectedSlot}
							key={slot.id}
						/>
					))}
					{availableSlots.length < nbrDisplayedSlots &&
						Array.from({ length: nbrDisplayedSlots - availableSlots.length }).map((_, index) => (
							<SimulationAppointmentsAvailableHourCard
								slot={undefined}
								selectedSlot={selectedSlot}
								setSelectedSlot={setSelectedSlot}
								key={index}
							/>
						))}
				</>
			)}
		</VStack>
	</VStack>
);

export default SimulationAppointmentsAvailableDayCard;
