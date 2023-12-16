import { VStack } from '@chakra-ui/react';
import AgendaNavbar from 'components/app/dashboardPages/agenda/AgendaNavbar';
import { useState } from 'react';
import { AgendaViewType } from 'types/app/dashboard/agenda/AgendaViewType';
import AgendaCalendar from 'components/app/dashboardPages/agenda/AgendaCalendar';

const Agenda = (): JSX.Element => {
	const [selectedView, setSelectedView] = useState<AgendaViewType>('WEEK');
	const [date, setDate] = useState(new Date());

	const changeDate = (number: number) => {
		if (selectedView === 'DAY') setDate(new Date(date.setDate(date.getDate() + number)));
		else if (selectedView === '3DAYS') setDate(new Date(date.setDate(date.getDate() + 3 * number)));
		else {
			const newDate = new Date(date);
			newDate.setDate(newDate.getDate() + 7 * number - newDate.getDay() + 1);
			setDate(newDate);
		}
	};

	return (
		<VStack
			w="100%"
			bg="white"
			p="16px"
			border="2px solid"
			borderColor="blue.200"
			h="100%"
			borderRadius="16px"
			overflowY="hidden"
		>
			<AgendaNavbar
				date={date}
				changeDate={changeDate}
				selectedView={selectedView}
				setSelectedView={setSelectedView}
			/>
			<AgendaCalendar date={date} selectedView={selectedView} />
		</VStack>
	);
};

export default Agenda;
