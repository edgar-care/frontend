import { Button, HStack, Icon, Text } from '@chakra-ui/react';
import LeftChevronIcon from 'assets/icons/Chevron/LeftChevronIcon';
import RightChevronIcon from 'assets/icons/Chevron/RightChevronIcon';
import { AgendaViewType } from 'types/app/dashboard/agenda/AgendaViewType';
import { Dispatch, SetStateAction } from 'react';

const AgendaNavbar = ({
	date,
	changeDate,
	selectedView,
	setSelectedView,
}: {
	date: Date;
	changeDate: (number: number) => void;
	selectedView: AgendaViewType;
	setSelectedView: Dispatch<SetStateAction<AgendaViewType>>;
}): JSX.Element => (
	<HStack justify="space-between" w="100%" p="0px 8px 16px 0px" borderBottom="2px solid" borderColor="blue.200">
		<HStack spacing="24px">
			<Button>Ouvrir un créneau</Button>
			<HStack spacing="16px">
				<Button variant="fullGhost" onClick={() => changeDate(-1)}>
					<Icon as={LeftChevronIcon} h="16px" w="auto" color="black" />
				</Button>
				<Button variant="fullGhost" onClick={() => changeDate(1)}>
					<Icon as={RightChevronIcon} h="16px" w="auto" color="black" />
				</Button>
			</HStack>
			<Text size="boldXl" textTransform="capitalize">
				{selectedView === 'DAY'
					? date.toLocaleString('fr-FR', { dateStyle: 'long' })
					: date.toLocaleString('fr-FR', { month: 'long', year: 'numeric' })}
			</Text>
		</HStack>
		<HStack>
			<Button
				size="customSm"
				variant={selectedView === 'DAY' ? 'primary' : 'secondary'}
				onClick={() => setSelectedView('DAY')}
			>
				Jour
			</Button>
			<Button
				size="customSm"
				variant={selectedView === '3DAYS' ? 'primary' : 'secondary'}
				onClick={() => setSelectedView('3DAYS')}
			>
				3 Jours
			</Button>
			<Button
				size="customSm"
				variant={selectedView === 'WEEK' ? 'primary' : 'secondary'}
				onClick={() => setSelectedView('WEEK')}
			>
				Semaine
			</Button>
		</HStack>
	</HStack>
);

export default AgendaNavbar;
