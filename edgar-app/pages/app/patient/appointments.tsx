import { VStack, Text, Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import MedCard from 'components/pages/patient/MedCard';
import BannerCard from 'components/pages/patient/BannerCard';
import ResponsiveNavBar from 'components/pages/patient/medical/ResponsiveNavBar';

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
		<VStack
			ml={{ base: '0px', lg: '250px' }}
			my={{ base: '128px', lg: '0px' }}
			spacing="64px"
			px={{ base: '32px', md: '64px', lg: '96px', xl: '128px', '2xl': '288px' }}
		>
			<ResponsiveNavBar />
			<VStack>
				<Text size={{ base: '2xl', lg: '3xl' }} textAlign="center">
					Mes rendez-vous
				</Text>
				<Box
					w={{ base: '200px', sm: '300px', md: '375px' }}
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
						key={appointment.hours.toString()}
					/>
				))}
			</VStack>
		</VStack>
	);
};

export default Appointments;
