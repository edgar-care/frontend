import { Text, VStack, Stack, HStack } from '@chakra-ui/react';

import ColorText from 'components/GradientText';
import SimulationPage from 'components/pages/simulation/SimulationPage';
import AppointmentCard from 'components/simulationPage/AppointmentCard';
import { useEffect, useState } from 'react';
import { AppointmentType } from 'types/simulationPage/AppointmentType';

const Result = (): JSX.Element => {
	const [appointments, setAppointments] = useState<AppointmentType[]>([]);

	useEffect(() => {
		const appointmentList = [
			{
				date: new Date('2021-05-04'),
				hours: [new Date('2021-05-01 09:00'), new Date('2021-05-01 10:00'), new Date('2021-05-01 02:00')],
			},
			{
				date: new Date('2021-05-02'),
				hours: [new Date('2021-05-02 09:00'), new Date('2021-05-02 10:00'), new Date('2021-05-02 11:00')],
			},
			{
				date: new Date('2021-05-03'),
				hours: [new Date('2021-05-03 09:00'), new Date('2021-05-03 10:00'), new Date('2021-05-03 11:00')],
			},
		];
		appointmentList.sort((a, b) => a.date.getTime() - b.date.getTime());
		appointmentList.forEach((appointment) => appointment.hours.sort((a, b) => a.getTime() - b.getTime()));
		setAppointments(appointmentList);
	}, []);

	return (
		<SimulationPage>
			<VStack maxW="750px">
				<Stack spacing="64px">
					<Stack spacing="32px">
						<Text size="2xl">
							Le médecin que vous avez sélectionné a examiné votre <ColorText textValue="analyse" />
						</Text>
						<Text size="2xl">
							Un rendez-vous est <ColorText textValue="nécessaire" /> pour déterminer de manière plus
							précise les causes de vos symptômes
						</Text>
					</Stack>

					<HStack borderRadius="16px" h="350px" backgroundColor="blue.100" p="32px" spacing="32px">
						{appointments.map((appointment) => (
							<AppointmentCard appointment={appointment} key={appointment.date.toString()} />
						))}
					</HStack>
				</Stack>
			</VStack>
		</SimulationPage>
	);
};

export default Result;
