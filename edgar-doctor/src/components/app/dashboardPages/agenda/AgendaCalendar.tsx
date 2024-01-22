import { useEffect, useState } from 'react';
import { Box, HStack, VStack } from '@chakra-ui/react';

import AgendaDateCard from 'components/app/dashboardPages/agenda/AgendaDateCard';
import AgendaHourCard from 'components/app/dashboardPages/agenda/AgendaHourCard';
import AgendaSlotGroup from 'components/app/dashboardPages/agenda/AgendaSlotGroup';

import { useGetSlotsQuery } from 'services/request/slots';

import { type AgendaViewType } from 'types/app/dashboard/agenda/AgendaViewType';

import getCalendarDates from 'utils/app/dashboard/agenda/getCalendarDates';

const AgendaCalendar = ({ date, selectedView }: { date: Date; selectedView: AgendaViewType }): JSX.Element => {
	const { data: slots } = useGetSlotsQuery();
	const [calendarDates, setCalendarDates] = useState<Date[]>([]);

	useEffect(() => {
		setCalendarDates(getCalendarDates(date, selectedView));
	}, [date, selectedView]);

	return (
		<VStack spacing="0px" w="100%" h="100%" overflowY="hidden">
			{selectedView !== 'DAY' && (
				<HStack w="100%" spacing="0px" pr="16px">
					<Box minW="42px" h="100px" />
					{calendarDates.map((calendarDate, index) => (
						<AgendaDateCard key={index} date={calendarDate} firstDate={index === 0} />
					))}
				</HStack>
			)}
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
								agendaSlots={slots || []}
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
