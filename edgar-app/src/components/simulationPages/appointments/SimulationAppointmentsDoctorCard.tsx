import { type Dispatch, type SetStateAction } from 'react';
import {
	Box,
	Button,
	HStack,
	Skeleton,
	Stack,
	Text,
	useBreakpointValue,
	useDisclosure,
	VStack,
} from '@chakra-ui/react';

import SimulationAppointmentsAvailableDayCard from 'components/simulationPages/appointments/SimulationAppointmentsAvailableDayCard';
import SimulationAppointmentsSlotsHandler from 'components/simulationPages/appointments/modals/SimulationAppointmentsSlotsHandler';

import groupSlotByDay from 'utils/simulation/appointments/groupSlotByDay';
import setupAppointmentsDates from 'utils/simulation/appointments/setupAppointmentsDates';

import { type DoctorType } from 'types/dashboard/DoctorType';
import { type SlotType } from 'types/simulation/appointments/SlotType';

import { useGetDoctorByIdSlotsQuery } from 'services/request/doctor';

const SimulationAppointmentsDoctorCard = ({
	doctor,
	selectedSlot,
	setSelectedSlot,
}: {
	doctor: DoctorType;
	selectedSlot: SlotType | undefined;
	setSelectedSlot: Dispatch<SetStateAction<SlotType | undefined>>;
}): JSX.Element => {
	const { data: slots, isLoading } = useGetDoctorByIdSlotsQuery(doctor.id);
	const { isOpen, onOpen, onClose } = useDisclosure();

	const numberOfDaysDisplayed =
		useBreakpointValue({ base: 3, ssm2: 4, sm2: 5, smd: 6, md: 7, md2: 8, md3: 9, lg: 7 }) || 7;

	const groupedSlotsByDay = groupSlotByDay(slots?.filter((slot) => slot.startDate > new Date().getTime()) || []);

	console.log(groupedSlotsByDay);
	return (
		<Skeleton isLoaded={!isLoading} w="100%" h="100%" borderRadius="8px">
			<Stack
				direction={{ base: 'column', lg: 'row' }}
				w="100%"
				h="100%"
				spacing="16px"
				p={{ base: '8px', sm: '12px' }}
				borderRadius="8px"
				border="2px solid"
				borderColor="blue.200"
			>
				<Stack
					direction={{ base: 'column', sm2: 'row', lg: 'column' }}
					w="100%"
					h={{ base: 'auto', lg: '100%' }}
					spacing={{ base: '8px', sm: '16px' }}
					justify="space-between"
					px="8px"
					align={{ base: 'start', sm2: 'end', lg: 'start' }}
					minW={{ base: 'auto', sm: '200px' }}
					maxW={{ base: '100%', lg: '350px' }}
				>
					<VStack w="100%" spacing="0px" align="start">
						<Text size="boldLg">
							Docteur {doctor.name.toUpperCase()} {doctor.firstname[0]}.
						</Text>
						<Text>{doctor.address.street}</Text>
						<Text>
							{doctor.address.zipCode} - {doctor.address.city}
						</Text>
					</VStack>
					<Button w="100%" size="customSm" onClick={onOpen}>
						Voir plus d'horaire
					</Button>
				</Stack>
				<Box as="span" h={{ base: '1px', lg: '100%' }} w={{ base: '100%', lg: '1px' }} bg="blue.700" />
				{slots?.length === 0 ? (
					<VStack w="100%" h="100%" minH="150px" bg="blue.100" justify="center" borderRadius="8px">
						<Text size="lg">Aucun créneau disponible</Text>
					</VStack>
				) : (
					<HStack spacing="0px" justify={{ base: 'space-between', ssm: 'center' }}>
						{setupAppointmentsDates(new Date(), numberOfDaysDisplayed).map((date) => (
							<SimulationAppointmentsAvailableDayCard
								date={new Date(date)}
								availableSlots={
									groupedSlotsByDay[date]?.sort((a, b) => a.startDate - b.startDate) || []
								}
								variant="SHORT"
								selectedSlot={selectedSlot}
								setSelectedSlot={setSelectedSlot}
								key={date}
							/>
						))}
					</HStack>
				)}
				<SimulationAppointmentsSlotsHandler
					isOpen={isOpen}
					onClose={onClose}
					doctor={doctor}
					slots={groupedSlotsByDay}
					selectedSlot={selectedSlot}
					setSelectedSlot={setSelectedSlot}
				/>
			</Stack>
		</Skeleton>
	);
};

export default SimulationAppointmentsDoctorCard;
