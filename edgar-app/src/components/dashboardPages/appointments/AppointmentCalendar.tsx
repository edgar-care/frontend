import { Grid, GridItem, Text } from '@chakra-ui/react';

import { days } from 'utils/app/dashboard/appointments/calendarUtils';
import getAllDays from 'utils/app/dashboard/appointments/getAllDays';

import { type AppointmentType } from 'types/dashboard/appointments/appointmentType';

const AppointmentCalendar = ({
	month,
	year,
	appointments,
}: {
	month: number;
	year: number;
	appointments: AppointmentType[];
}): JSX.Element => (
	<Grid templateColumns="repeat(7, 1fr)" gap="12px">
		{days.map((day) => (
			<GridItem key={day}>
				<Text size="boldMd" textAlign="center">
					{day}
				</Text>
			</GridItem>
		))}
		{getAllDays(month, year).map((day) => {
			const appointmentsOfTheDay = appointments.filter(
				(appointment) =>
					day.currentMonth &&
					appointment.startDate.getDate() === day.number &&
					appointment.startDate.getMonth() === month,
			);

			return (
				<GridItem
					w="100%"
					p="2px 6px"
					bg={
						day.currentMonth && month === new Date().getMonth() && day.number === new Date().getDate()
							? 'blue.700'
							: ''
					}
					borderRadius={appointmentsOfTheDay.length > 0 ? '0px' : '8px'}
					borderBottom={appointmentsOfTheDay.length > 0 ? '2px solid' : ''}
					borderColor={appointmentsOfTheDay[0]?.status !== 'DONE' ? 'green.500' : 'blue.200'}
					key={`${day.number}/${month}/${year}-${day.currentMonth}`}
				>
					<Text
						w="100%"
						textAlign="center"
						size="boldMd"
						color={
							day.currentMonth
								? day.number === new Date().getDate() && month === new Date().getMonth()
									? 'white'
									: 'black'
								: 'grey.400'
						}
					>
						{day.number.toString().padStart(2, '0')}
					</Text>
				</GridItem>
			);
		})}
	</Grid>
);

export default AppointmentCalendar;
