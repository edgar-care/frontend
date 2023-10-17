import { type Dispatch, type SetStateAction, useState } from 'react';
import { HStack, Icon, Text, useBreakpointValue, useDisclosure, VStack } from '@chakra-ui/react';

import AppointmentSlot from 'components/dashboardPages/appointments/AppointmentSlot';

import DownChevronIcon from 'assets/icons/Chevron/DownChevronIcon';
import UpChevronIcon from 'assets/icons/Chevron/UpChevronIcon';
import CalendarPreviousIllustration from 'assets/illustrations/CalendarPreviousllustration';
import CalendarNextIllustration from 'assets/illustrations/CalendarNextIllustration';

import { type AppointmentType, DoctorType } from 'types/dashboard/appointments/doctorTypes';

const AppointmentDoctorCard = ({
	doctorInfos,
	selectedAppointment,
	setSelectedAppointment,
}: {
	doctorInfos: DoctorType;
	selectedAppointment: string;
	setSelectedAppointment: Dispatch<SetStateAction<string>>;
}): JSX.Element => {
	const [firstAppointmentIndex, setFirstAppointmentIndex] = useState(0);
	const { isOpen: isDetailsOpen, onToggle: onToggleDetails } = useDisclosure();

	const nbrDisplayedAppointments = useBreakpointValue({ base: 1, md: 2, lg: 5 }) || 1;

	const groupAppointmentsOnSameDay = (appointments: AppointmentType[]): AppointmentType[][] => {
		const groupedAppointments: AppointmentType[][] = [];

		appointments.forEach((appointment) => {
			const appointmentDay = appointment.startDate.toLocaleDateString('fr-FR');

			const appointmentIndex = groupedAppointments.findIndex((groupedAppointment) => {
				const groupedAppointmentDay = groupedAppointment[0].startDate.toLocaleDateString('fr-FR');
				return groupedAppointmentDay === appointmentDay;
			});

			if (appointmentIndex === -1) {
				groupedAppointments.push([appointment]);
			} else {
				groupedAppointments[appointmentIndex].push(appointment);
			}
		});

		return groupedAppointments;
	};

	return (
		<VStack
			w="100%"
			p="12px"
			bg="white"
			border="2px solid"
			borderColor="blue.200"
			borderRadius="8px"
			spacing="16px"
			cursor="pointer"
			transition="all .3s ease-in-out"
			_hover={{
				borderColor: 'blue.400',
				transition: 'all .3s ease-in-out',
			}}
			onClick={() => (!isDetailsOpen ? onToggleDetails() : {})}
		>
			<HStack w="100%" justify="space-between" px="4px" onClick={() => (isDetailsOpen ? onToggleDetails() : {})}>
				<VStack align="starts">
					<VStack align="start" spacing="0px">
						<Text size="boldLg">{doctorInfos.name}</Text>
						<Text>{doctorInfos.address}</Text>
					</VStack>
					{!isDetailsOpen && (
						<HStack w="100%" spacing="4px">
							<Text>Prochain créneau disponible le</Text>
							<Text color="blue.700" textTransform="capitalize">
								{doctorInfos.appointments[0].startDate.toLocaleDateString('fr-FR', {
									weekday: 'long',
									day: 'numeric',
									month: 'long',
								})}
							</Text>
							<Text color="blue.700">
								de{' '}
								{doctorInfos.appointments[0].startDate.toLocaleTimeString('fr-FR', {
									hour: '2-digit',
									minute: '2-digit',
								})}{' '}
								à{' '}
								{doctorInfos.appointments[0].endDate.toLocaleTimeString('fr-FR', {
									hour: '2-digit',
									minute: '2-digit',
								})}
							</Text>
						</HStack>
					)}
				</VStack>
				<Icon as={isDetailsOpen ? UpChevronIcon : DownChevronIcon} w="16px" color="black" />
			</HStack>
			{isDetailsOpen && (
				<HStack>
					<Icon
						as={CalendarPreviousIllustration}
						w="24px"
						h="24px"
						onClick={() => {
							if (firstAppointmentIndex > 0) setFirstAppointmentIndex(firstAppointmentIndex - 1);
						}}
					/>
					<HStack align="strech">
						{groupAppointmentsOnSameDay(doctorInfos.appointments)
							.filter(
								(_, index) =>
									index >= firstAppointmentIndex &&
									index < firstAppointmentIndex + nbrDisplayedAppointments,
							)
							.map((appointment) => (
								<AppointmentSlot
									key={appointment[0].id}
									appointments={appointment}
									selectedAppointment={selectedAppointment}
									setSelectedAppointment={setSelectedAppointment}
								/>
							))}
					</HStack>
					<Icon
						as={CalendarNextIllustration}
						w="24px"
						h="24px"
						onClick={() => {
							if (
								firstAppointmentIndex + nbrDisplayedAppointments <
								groupAppointmentsOnSameDay(doctorInfos.appointments).length
							)
								setFirstAppointmentIndex(firstAppointmentIndex + 1);
						}}
					/>
				</HStack>
			)}
		</VStack>
	);
};

export default AppointmentDoctorCard;
