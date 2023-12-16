import { useEffect, useState } from 'react';
import { Center, useBreakpointValue, useTimeout, VStack } from '@chakra-ui/react';

import AgendaNavbar from 'components/app/dashboardPages/agenda/AgendaNavbar';
import AgendaCalendar from 'components/app/dashboardPages/agenda/AgendaCalendar';
import GridLoader from 'components/loader/GridLoader';

import colors from 'theme/foundations/colors';

import { AgendaViewType } from 'types/app/dashboard/agenda/AgendaViewType';

const Agenda = (): JSX.Element => {
	const isWeekAvailable = useBreakpointValue({ base: false, '2xl': true }) || false;
	const is3DaysAvailable = useBreakpointValue({ base: false, md: true }) || false;
	const [selectedView, setSelectedView] = useState<AgendaViewType>('WEEK');
	const [date, setDate] = useState(new Date());
	const [isLoading, setIsLoading] = useState(true);

	const changeDate = (number: number) => {
		if (selectedView === 'DAY') setDate(new Date(date.setDate(date.getDate() + number)));
		else if (selectedView === '3DAYS') setDate(new Date(date.setDate(date.getDate() + 3 * number)));
		else {
			const newDate = new Date(date);
			newDate.setDate(newDate.getDate() + 7 * number - newDate.getDay() + 1);
			setDate(newDate);
		}
	};

	useEffect(() => {
		if (!isWeekAvailable && selectedView === 'WEEK') setSelectedView('3DAYS');
		if (!is3DaysAvailable && selectedView !== 'DAY') setSelectedView('DAY');
	}, [isWeekAvailable, is3DaysAvailable]);

	useTimeout(() => {
		if (is3DaysAvailable) setSelectedView('3DAYS');
		if (isWeekAvailable) setSelectedView('WEEK');
		setIsLoading(false);
	}, 100);

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
			spacing="0px"
		>
			{isLoading ? (
				<Center w="100%" h="100vh">
					<GridLoader size="64" speed="1.5" color={colors.blue[900]} />
				</Center>
			) : (
				<>
					<AgendaNavbar
						date={date}
						changeDate={changeDate}
						selectedView={selectedView}
						setSelectedView={setSelectedView}
						is3DaysAvailable={is3DaysAvailable}
						isWeekAvailable={isWeekAvailable}
					/>
					<AgendaCalendar date={date} selectedView={selectedView} />
				</>
			)}
		</VStack>
	);
};

export default Agenda;
