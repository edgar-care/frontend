import { type Dispatch, type SetStateAction, useState } from 'react';
import { Box, Button, HStack, Icon, Stack, Text, useBreakpointValue, VStack } from '@chakra-ui/react';

import SimulationAppointmentsAvailableDayCard from 'components/simulationPages/appointments/SimulationAppointmentsAvailableDayCard';

import setupAppointmentsDates from 'utils/simulation/appointments/setupAppointmentsDates';
import countMaxNbrOfSlotsPerDay from 'utils/simulation/appointments/countMaxNbrOfSlotsPerDay';

import { type DoctorType } from 'types/dashboard/DoctorType';
import { type SlotType } from 'types/simulation/appointments/SlotType';

import LeftChevronIcon from 'assets/icons/Chevron/LeftChevronIcon';
import RightChevronIcon from 'assets/icons/Chevron/RightChevronIcon';

const SimulationAppointmentsSlotContent = ({
	doctor,
	slots,
	selectedSlot,
	setSelectedSlot,
}: {
	doctor: DoctorType;
	slots: { [key: string]: SlotType[] };
	selectedSlot: SlotType | undefined;
	setSelectedSlot: Dispatch<SetStateAction<SlotType | undefined>>;
}): JSX.Element => {
	const [startDate, setStartDate] = useState(new Date());

	const numberOfDaysDisplayed = useBreakpointValue({ base: 3, ssm2: 4, sm2: 5, smd: 6, md: 7 }) || 7;

	return (
		<Stack
			direction={{ base: 'column', lg: 'row' }}
			w="100%"
			h="100%"
			align="stretch"
			borderRadius="8px"
			border="2px solid"
			borderColor="blue.200"
			p="12px"
			spacing="16px"
		>
			<VStack w="100%" spacing="0px" align="start" px="8px">
				<Text size="boldLg">
					Docteur {doctor.name.toUpperCase()} {doctor.firstname[0]}.
				</Text>
				<Text>{doctor.address.street}</Text>
				<Text>
					{doctor.address.zipCode} - {doctor.address.city}
				</Text>
			</VStack>
			<Box as="span" h={{ base: '1px', lg: 'auto' }} w={{ base: '100%', lg: '1px' }} bg="blue.700" />
			<VStack w="100%">
				<HStack
					spacing="0px"
					w="100%"
					maxH="500px"
					overflowY="auto"
					overflowX="hidden"
					pr="8px"
					sx={{
						'::-webkit-scrollbar': {
							width: '6px',
						},
						'::-webkit-scrollbar-track': {
							background: 'grey.100',
							borderRadius: '8px',
						},
						'::-webkit-scrollbar-thumb': {
							background: 'grey.200',
							borderRadius: '8px',
						},
						'::-webkit-scrollbar-thumb:hover': {
							background: 'grey.300',
						},
					}}
				>
					{startDate.getDate() - 1 >= new Date().getDate() && (
						<Button variant="fullGhost">
							<Icon
								as={LeftChevronIcon}
								h="16px"
								w="auto"
								cursor="pointer"
								onClick={() => setStartDate(new Date(startDate.setDate(startDate.getDate() - 1)))}
							/>
						</Button>
					)}
					<HStack spacing="0px" h="100%" w="100%" align="start" justify="center">
						{setupAppointmentsDates(startDate, numberOfDaysDisplayed).map((date) => (
							<SimulationAppointmentsAvailableDayCard
								date={new Date(date)}
								availableSlots={slots[date]?.sort((a, b) => a.startDate - b.startDate) || []}
								variant="FULL"
								nbrDisplayedSlots={countMaxNbrOfSlotsPerDay(slots)}
								selectedSlot={selectedSlot}
								setSelectedSlot={setSelectedSlot}
								key={date}
							/>
						))}
					</HStack>
					<Button variant="fullGhost">
						<Icon
							as={RightChevronIcon}
							h="16px"
							w="auto"
							cursor="pointer"
							onClick={() => setStartDate(new Date(startDate.setDate(startDate.getDate() + 1)))}
						/>
					</Button>
				</HStack>
			</VStack>
		</Stack>
	);
};

export default SimulationAppointmentsSlotContent;
