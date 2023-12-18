import { Text, VStack } from '@chakra-ui/react';

const AgendaDateCard = ({ date, firstDate }: { date: Date; firstDate: boolean }): JSX.Element => (
	<VStack py="16px" w="100%">
		<VStack spacing="0px" borderLeft={firstDate ? '0px' : '2px solid'} borderColor="blue.200" w="100%">
			<Text size="boldMd" textTransform="capitalize" id="edgar-dashboardAgendaPage-calendarWeekDay-text">
				{date.toLocaleDateString('fr-FR', { weekday: 'long' })}
			</Text>
			<Text
				size="2xl"
				textTransform="capitalize"
				lineHeight="24px"
				id="edgar-dashboardAgendaPage-calendarDay-text"
			>
				{date.toLocaleDateString('fr-FR', { day: 'numeric' })}
			</Text>
			<Text size="boldMd" textTransform="capitalize" id="edgar-dashboardAgendaPage-calendarMonth-text">
				{date.toLocaleDateString('fr-FR', { month: 'long' })}
			</Text>
		</VStack>
	</VStack>
);

export default AgendaDateCard;
