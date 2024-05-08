import { Grid, GridItem, Text } from '@chakra-ui/react';

import { days } from 'utils/app/dashboard/appointments/calendarUtils';
import getAllDays from 'utils/app/dashboard/appointments/getAllDays';

const AppointmentCalendar = ({ month, year }: { month: number; year: number }): JSX.Element => (
	<Grid templateColumns="repeat(7, 1fr)" gap={{ base: '6px', ssm: '12px' }}>
		{days.map((day) => (
			<GridItem key={day}>
				<Text size="boldMd" textAlign="center">
					{day}
				</Text>
			</GridItem>
		))}
		{getAllDays(month, year).map((day) => (
			<GridItem
				w="100%"
				p="2px 6px"
				bg={
					day.currentMonth && month === new Date().getMonth() && day.number === new Date().getDate()
						? 'blue.700'
						: ''
				}
				borderRadius="8px"
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
		))}
	</Grid>
);

export default AppointmentCalendar;
