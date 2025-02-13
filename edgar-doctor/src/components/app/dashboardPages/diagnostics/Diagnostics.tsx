import { useState } from 'react';
import { Button, Stack, VStack } from '@chakra-ui/react';

import DiagnosticsView from 'components/app/dashboardPages/diagnostics/DiagnosticsView';

import { type DiagnosticsSubNavigationType } from 'types/app/dashboard/diagnostics/DiagnosticsSubNavigationType';

import { useGetDoctorAppointmentsQuery } from 'services/request/appointments';

const Diagnostics = (): JSX.Element => {
	const { data: appointments } = useGetDoctorAppointmentsQuery();

	const [subNavigationState, setSubNavigationState] = useState<DiagnosticsSubNavigationType>('WAITING');

	const availableSubNavigation: { label: string; state: DiagnosticsSubNavigationType }[] = [
		{
			label: 'Pré-diagnostics en attente',
			state: 'WAITING',
		},
		{
			label: 'Pré-diagnostics validés',
			state: 'VALIDATED',
		},
		{
			label: 'Pré-diagnostics refusés',
			state: 'REFUSED',
		},
	];

	const subNavigation: { [key: string]: JSX.Element } = {
		WAITING: (
			<DiagnosticsView
				title="Mes pré-diagnostics en attente"
				diagnostics={
					appointments?.filter((appointment) => appointment.appointmentStatus === 'WAITING_FOR_REVIEW') || []
				}
			/>
		),
		VALIDATED: (
			<DiagnosticsView
				title="Mes pré-diagnostics validés"
				diagnostics={
					appointments?.filter((appointment) => appointment.appointmentStatus === 'ACCEPTED_DUE_TO_REVIEW') ||
					[]
				}
			/>
		),
		REFUSED: (
			<DiagnosticsView
				title="Mes pré-diagnostics refusés"
				diagnostics={
					appointments?.filter((appointment) => appointment.appointmentStatus === 'CANCELED_DUE_TO_REVIEW') ||
					[]
				}
			/>
		),
	};

	return (
		<VStack w="100%" h="100%" spacing="32px">
			<Stack direction={{ base: 'column', md: 'row' }} w="100%" spacing={{ base: '8px', md: '16px' }}>
				{availableSubNavigation.map((navigation) => (
					<Button
						w="100%"
						whiteSpace="nowrap"
						variant={subNavigationState === navigation.state ? 'primary' : 'secondary'}
						key={navigation.state}
						onClick={() => setSubNavigationState(navigation.state)}
					>
						{navigation.label}
					</Button>
				))}
			</Stack>
			{subNavigation[subNavigationState]}
		</VStack>
	);
};

export default Diagnostics;
