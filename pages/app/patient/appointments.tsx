import { VStack, Text, Box, HStack, Button } from '@chakra-ui/react';
import MedCard from 'components/pages/patient/MedCard';
import NavBar from 'components/pages/patient/NavBar';
import colors from 'theme/foundations/colors';

const Appointments = (): JSX.Element => {
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
			<HStack
				border="2px solid"
				borderColor="purple.200"
				justify="space-between"
				w="100%"
				borderRadius="16px"
				p="12px 24px"
				bg="purple.100"
			>
				<Text size="boldLg">Vous avez besoin d'un rendez-vous ?</Text>
				<Button size="sm">Commencer votre pré-diagnostique</Button>
			</HStack>
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
