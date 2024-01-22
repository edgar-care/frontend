import { Text, VStack } from '@chakra-ui/react';

const AgendaHourCard = ({ hour }: { hour: number }): JSX.Element => (
	<VStack w="42px" minH="100px" p="8px 4px" borderTop="2px solid" borderColor="blue.200">
		<Text size="sm" id="edgar-dashboardAgendaPage-calendarHour-text">
			{hour < 10 ? `0${hour}:00` : `${hour}:00`}
		</Text>
	</VStack>
);

export default AgendaHourCard;
