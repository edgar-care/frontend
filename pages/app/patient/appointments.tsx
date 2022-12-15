import { VStack, Text, Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import MedCard from 'components/pages/patient/MedCard';
import NavBar from 'components/pages/patient/NavBar';
import BannerCard from 'components/pages/patient/BannerCard';

import colors from 'theme/foundations/colors';

const Appointments = (): JSX.Element => {
	const router = useRouter();

	const appointmentList = [
		{
			name: 'Roger Palot',
			hours: new Date('2021-05-01 09:00'),
		},
		{
			name: 'benoit Baillard',
			hours: new Date('2021-04-22 11:00'),
		},
		{
			name: 'Amoz Pay',
			hours: new Date('2021-02-12 15:00'),
		},
	];

	return (
		<VStack ml="250px" spacing="64px" px="288px">
			<NavBar />
			<VStack>
				<Text size="3xl">Mes rendez-vous</Text>
				<Box
					w="375px"
					h="3px"
					bg={`linear-gradient(90deg, ${colors.blue[600]} 0%, ${colors.pink[600]} 100%)`}
				/>
			</VStack>
			<BannerCard
				text="Vous avez besoin d'un rendez-vous ?"
				buttonText="Commencer votre pré-diagnostique"
				buttonRedirect={() => router.push('/simulation')}
			/>
			<VStack w="100%" spacing="16px">
				{appointmentList.map((appointment) => (
					<MedCard
						name={appointment.name}
						date={appointment.hours.toLocaleDateString()}
						hours={appointment.hours.toLocaleTimeString()}
					/>
				))}
			</VStack>
		</VStack>
	);
};

export default Appointments;
