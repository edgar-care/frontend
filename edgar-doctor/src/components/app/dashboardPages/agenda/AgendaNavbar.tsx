import { Dispatch, SetStateAction } from 'react';
import { Button, HStack, Icon, Stack, Text, useBreakpointValue } from '@chakra-ui/react';

import LeftChevronIcon from 'assets/icons/Chevron/LeftChevronIcon';
import RightChevronIcon from 'assets/icons/Chevron/RightChevronIcon';

import { AgendaViewType } from 'types/app/dashboard/agenda/AgendaViewType';

const AgendaNavbar = ({
	date,
	changeDate,
	selectedView,
	setSelectedView,
	isWeekAvailable,
	is3DaysAvailable,
}: {
	date: Date;
	changeDate: (number: number) => void;
	selectedView: AgendaViewType;
	setSelectedView: Dispatch<SetStateAction<AgendaViewType>>;
	isWeekAvailable: boolean;
	is3DaysAvailable: boolean;
}): JSX.Element => {
	const isMobile = useBreakpointValue({ base: true, ssm: false });

	return (
		<HStack
			justify="space-between"
			w="100%"
			pb={selectedView === 'DAY' ? '8px' : '16px'}
			borderBottom={selectedView !== 'DAY' ? '2px solid' : '0px'}
			borderColor="blue.200"
		>
			<Stack
				direction={{ base: 'column', smd: 'row' }}
				spacing={{ base: '8px', smd: '24px' }}
				w={{ base: '100%', smd: 'auto' }}
			>
				<Button w={{ base: '100%', smd: 'auto' }}>Ouvrir un créneau</Button>
				<HStack spacing="16px">
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
							? date.toLocaleString('fr-FR', { dateStyle: isMobile ? 'medium' : 'long' })
							: date.toLocaleString('fr-FR', { month: 'long', year: 'numeric' })}
					</Text>
				</HStack>
			</Stack>
			<HStack>
				{is3DaysAvailable && (
					<>
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
					</>
				)}
				{isWeekAvailable && (
					<Button
						size="customSm"
						variant={selectedView === 'WEEK' ? 'primary' : 'secondary'}
						onClick={() => setSelectedView('WEEK')}
					>
						Semaine
					</Button>
				)}
			</HStack>
		</HStack>
	);
};

export default AgendaNavbar;
