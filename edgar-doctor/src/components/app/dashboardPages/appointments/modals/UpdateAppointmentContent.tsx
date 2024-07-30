import { type Dispatch, type SetStateAction, useState } from 'react';
import { VStack, Icon, Text, HStack, useBreakpointValue } from '@chakra-ui/react';

import AppointmentSlots from 'components/app/dashboardPages/appointments/AppointmentSlots';

import DiamondWarningIcon from 'assets/icons/DiamondWarningIcon';
import CalendarPreviousIllustration from 'assets/illustrations/CalendarPreviousIllustration';
import CalendarNextIllustration from 'assets/illustrations/CalendarNextIllustration';

import { useGetOpenSlotsQuery } from 'services/request/slots';

import { AgendaSlotType } from 'types/app/dashboard/agenda/AgendaSlotType';

const UpdateAppointmentContent = ({
	selectedAppointment,
	setSelectedAppointment,
}: {
	selectedAppointment: string;
	setSelectedAppointment: Dispatch<SetStateAction<string>>;
}): JSX.Element => {
	const { data: doctorAppointments } = useGetOpenSlotsQuery();
	const [firstAppointmentIndex, setFirstAppointmentIndex] = useState(0);
	const nbrDisplayedAppointments = useBreakpointValue({ base: 1, ssm2: 2, sm2: 3, lg: 5 }) || 1;

	const groupAppointmentsOnSameDay = (appointments: AgendaSlotType[]): AgendaSlotType[][] => {
		const groupedAppointments: AgendaSlotType[][] = [];

		appointments.forEach((appointment) => {
			const appointmentDay = new Date(appointment.startDate).toLocaleDateString('fr-FR');

			if (new Date(appointment.startDate) > new Date()) {
				const appointmentIndex = groupedAppointments.findIndex((groupedAppointment) => {
					const groupedAppointmentDay = new Date(groupedAppointment[0].startDate).toLocaleDateString('fr-FR');
					return groupedAppointmentDay === appointmentDay;
				});

				if (appointmentIndex === -1) {
					groupedAppointments.push([appointment]);
				} else {
					groupedAppointments[appointmentIndex].push(appointment);
				}
			}
		});
		return groupedAppointments;
	};

	const groupedAppointments = groupAppointmentsOnSameDay(doctorAppointments || [])
		.sort((a, b) => a[0].startDate - b[0].startDate)
		.filter(
			(_, index) => index >= firstAppointmentIndex && index < firstAppointmentIndex + nbrDisplayedAppointments,
		);

	return (
		<VStack spacing="16px" w="100%">
			<HStack
				spacing="16px"
				borderRadius="16px"
				w="100%"
				p="16px"
				bg="orange.100"
				border="2px solid"
				borderColor="orange.300"
			>
				<Icon as={DiamondWarningIcon} w="32px" h="32px" color="orange.600" />
				<Text size="boldMd" color="orange.600">
					Assurez-vous de la disponibilité de votre patient avant de modifier la date de son rendez-vous
				</Text>
			</HStack>
			<HStack>
				{firstAppointmentIndex > 0 && (
					<Icon
						as={CalendarPreviousIllustration}
						w="24px"
						h="24px"
						onClick={() => setFirstAppointmentIndex(firstAppointmentIndex - 1)}
					/>
				)}
				<HStack align="stretch">
					{groupedAppointments.length > 0 ? (
						groupedAppointments.map((appointment) => (
							<AppointmentSlots
								key={appointment[0].id}
								appointments={appointment}
								selectedAppointment={selectedAppointment}
								setSelectedAppointment={setSelectedAppointment}
							/>
						))
					) : (
						<Text>Pas de créneaux disponible</Text>
					)}
				</HStack>
				{firstAppointmentIndex + nbrDisplayedAppointments <
					groupAppointmentsOnSameDay(doctorAppointments || []).length && (
					<Icon
						as={CalendarNextIllustration}
						w="24px"
						h="24px"
						onClick={() => setFirstAppointmentIndex(firstAppointmentIndex + 1)}
					/>
				)}
			</HStack>
		</VStack>
	);
};

export default UpdateAppointmentContent;
