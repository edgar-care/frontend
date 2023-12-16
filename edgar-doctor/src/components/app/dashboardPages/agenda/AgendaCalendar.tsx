import { useEffect, useState } from 'react';
import { Box, HStack, VStack } from '@chakra-ui/react';

import AgendaDateCard from 'components/app/dashboardPages/agenda/AgendaDateCard';
import AgendaHourCard from 'components/app/dashboardPages/agenda/AgendaHourCard';
import AgendaSlotGroup from 'components/app/dashboardPages/agenda/AgendaSlotGroup';

import { AgendaSlotType } from 'types/app/dashboard/agenda/AgendaSlotType';
import { AgendaViewType } from 'types/app/dashboard/agenda/AgendaViewType';

const AgendaCalendar = ({ date, selectedView }: { date: Date; selectedView: AgendaViewType }): JSX.Element => {
	const [calendarDates, setCalendarDates] = useState<Date[]>([]);

	useEffect(() => {
		const dates: Date[] = [];
		if (selectedView === 'DAY') dates.push(date);
		else if (selectedView === '3DAYS') {
			const newDate = new Date(date);
			newDate.setDate(newDate.getDate() - 1);
			for (let i = 0; i < 3; i += 1) dates.push(new Date(newDate.setDate(newDate.getDate() + 1)));
		} else {
			const newDate = new Date(date);
			newDate.setDate(newDate.getDate() - ((newDate.getDay() + 6) % 7) - 1);
			for (let i = 0; i < 7; i += 1) dates.push(new Date(newDate.setDate(newDate.getDate() + 1)));
		}
		setCalendarDates(dates);
	}, [date, selectedView]);

	const slots: AgendaSlotType[] = [
		{
			id: '1',
			startDate: 1702724400000,
			endDate: 11,
			patientName: 'Monsieur Jean',
			status: 'BOOKED',
		},
		{
			id: '1',
			startDate: 10,
			endDate: 11,
			patientName: 'Jean',
			status: 'BOOKED',
		},
	];

	return (
		<VStack spacing="0px" w="100%" h="100%" overflowY="hidden">
			<HStack w="100%" spacing="0px" pr="16px">
				<Box minW="42px" h="100px" />
				{calendarDates.map((calendarDate, index) => (
					<AgendaDateCard key={index} date={calendarDate} firstDate={index === 0} />
				))}
			</HStack>
			<HStack h="100%" overflowY="scroll" w="100%" justify="start" spacing="0px">
				<VStack spacing="0px" h="100%">
					{[...Array(24)].map((_, index) => (
						<AgendaHourCard hour={index} key={index} />
					))}
				</VStack>
				{calendarDates.map((calendarDate) => (
					<VStack spacing="0px" w="100%" h="100%" key={calendarDate.getTime()}>
						{[...Array(24)].map((_, index) => (
							<AgendaSlotGroup
								agendaSlots={slots}
								hourSlot={index}
								calendarDate={calendarDate}
								key={index}
							/>
						))}
					</VStack>
				))}
			</HStack>
		</VStack>
	);
};

export default AgendaCalendar;
