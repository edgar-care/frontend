'use client';

import { Text, Box } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import SimulationLayout from 'components/simulationPages/SimulationLayout';
import SimulationButton from 'components/simulationPages/SimulationButton';

import { useAuthContext } from 'contexts/auth';

const SimulationConditionsPageContent = (): JSX.Element => {
	const router = useRouter();
	const { auth } = useAuthContext();

	const handleClick = () => {
		const token = auth.getToken();
		router.push(token ? 'start' : 'connection');
	};

	return (
		<SimulationLayout>
			<>
				<Text
					size={{ base: 'boldXl', md: 'bold2xl', xl: '3xl' }}
					color="white"
					maxW="1000px"
					id="edgar-simulationConditionsPage-title-text"
				>
					Avant de commencer votre simulation, notez que cette simulation n’a pas pour but de diagnostiquer
					une maladie. <br />
					A l’issue de la simulation, notre échange sera transmis à un médecin afin d’être examiné. <br />
					Si votre rendez-vous n’est pas utile alors il sera annulé par le médecin et il vous conseillera des
					méthodes de soins. <br />
				</Text>
				<Box w="100%" textAlign="end" onClick={handleClick}>
					<SimulationButton id="edgar-simulationConditionsPage-next-button">Continuer</SimulationButton>
				</Box>
			</>
		</SimulationLayout>
	);
};

export default SimulationConditionsPageContent;
