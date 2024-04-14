import { type Dispatch, type SetStateAction, useState } from 'react';
import { Box, HStack, Icon, Text, useBreakpointValue, useDisclosure, VStack } from '@chakra-ui/react';

import AppointmentSlot from 'components/dashboardPages/appointments/AppointmentSlot';

import DownChevronIcon from 'assets/icons/Chevron/DownChevronIcon';
import UpChevronIcon from 'assets/icons/Chevron/UpChevronIcon';
import CalendarPreviousIllustration from 'assets/illustrations/CalendarPreviousllustration';
import CalendarNextIllustration from 'assets/illustrations/CalendarNextIllustration';

import { useGetDoctorAppointmentsQuery } from 'services/request/appointments';

import { type DoctorType } from 'types/dashboard/appointments/doctorTypes';
import { type AppointmentType } from 'types/dashboard/appointments/appointmentType';

const AppointmentDoctorCard = ({
	doctorInfos,
	selectedAppointment,
	setSelectedAppointment,
}: {
	doctorInfos: DoctorType;
	selectedAppointment: string;
	setSelectedAppointment: Dispatch<SetStateAction<string>>;
}): JSX.Element => {
	const { data: doctorAppointments } = useGetDoctorAppointmentsQuery(doctorInfos.id);

	const [firstAppointmentIndex, setFirstAppointmentIndex] = useState(0);
	const { isOpen: isDetailsOpen, onToggle: onToggleDetails } = useDisclosure();

	const nbrDisplayedAppointments = useBreakpointValue({ base: 1, ssm2: 2, sm2: 3, lg: 5 }) || 1;
	const isMobile = useBreakpointValue({ base: true, sm: false });
	const isDrawer = useBreakpointValue({ base: true, smd: false });

	const groupAppointmentsOnSameDay = (appointments: AppointmentType[]): AppointmentType[][] => {
		const groupedAppointments: AppointmentType[][] = [];

		appointments.forEach((appointment) => {
			const appointmentDay = new Date(appointment.startDate).toLocaleDateString('fr-FR');

			const appointmentIndex = groupedAppointments.findIndex((groupedAppointment) => {
				const groupedAppointmentDay = new Date(groupedAppointment[0].startDate).toLocaleDateString('fr-FR');
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
			cursor={doctorAppointments && doctorAppointments.length > 0 ? 'pointer' : ''}
			transition="all .3s ease-in-out"
			_hover={{
				borderColor: 'blue.400',
				transition: 'all .3s ease-in-out',
			}}
			onClick={() =>
				!isDetailsOpen && doctorAppointments && doctorAppointments.length > 0 ? onToggleDetails() : {}
			}
		>
			<HStack
				w="100%"
				justify="space-between"
				px="4px"
				onClick={() =>
					isDetailsOpen && doctorAppointments && doctorAppointments.length > 0 ? onToggleDetails() : {}
				}
			>
				<VStack align="starts">
					<VStack align="start" spacing="0px">
						<Text size="boldLg">{doctorInfos.name}</Text>
						<Text>
							{doctorInfos.address.street}, {doctorInfos.address.zipCode} - {doctorInfos.address.city}
						</Text>
					</VStack>
					{!isDetailsOpen && doctorAppointments && (
						<>
							{doctorAppointments.length > 0 ? (
								<Text maxW={{ base: '250px', sm: '350px', smd: '100%' }}>
									Prochain créneau disponible{isDrawer ? ':' : ' le '}
									<Box as="span" color="blue.700" textTransform="capitalize" display="inline-block">
										{new Date(doctorAppointments[0].startDate).toLocaleDateString('fr-FR', {
											weekday: isMobile ? 'short' : 'long',
											day: 'numeric',
											month: isMobile ? 'short' : 'long',
										})}
									</Box>
									<Box as="span" color="blue.700">
										{' '}
										de{' '}
										{new Date(doctorAppointments[0].startDate).toLocaleTimeString('fr-FR', {
											hour: '2-digit',
											minute: '2-digit',
										})}{' '}
										à{' '}
										{new Date(doctorAppointments[0].startDate).toLocaleTimeString('fr-FR', {
											hour: '2-digit',
											minute: '2-digit',
										})}
									</Box>
								</Text>
							) : (
								<Text maxW={{ base: '250px', sm: '350px', smd: '100%' }} color="red.700">
									Pas de créneaux disponible pour le moment
								</Text>
							)}
						</>
					)}
				</VStack>
				{doctorAppointments && doctorAppointments.length > 0 && (
					<Icon as={isDetailsOpen ? UpChevronIcon : DownChevronIcon} w="16px" color="black" />
				)}
			</HStack>
			{isDetailsOpen && doctorAppointments && (
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
						{groupAppointmentsOnSameDay(doctorAppointments)
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
								groupAppointmentsOnSameDay(doctorAppointments).length
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
