'use client';

import { Text } from '@chakra-ui/react';
import Link from 'next/link';

import SimulationLayout from 'components/simulationPages/SimulationLayout';
import SimulationButton from 'components/simulationPages/SimulationButton';

import { useAuthContext } from 'contexts/auth';

const SimulationConditionsContent = (): JSX.Element => {
	const auth = useAuthContext();

	return (
		<SimulationLayout>
			<>
				<Text size="3xl" color="white" maxW="1000px">
					Avant de commencer votre simulation, notez que cette simulation n’a pas pour but de diagnostiquer
					une maladie. <br />
					A l’issue de la simulation, notre échange sera transmis à un médecin afin d’être examiné. <br />
					Si votre rendez-vous n’est pas utile alors il sera annulé par le médecin et il vous conseillera des
					méthodes de soins. <br />
				</Text>
				<Link href={auth.getToken() ? 'start' : 'connection'}>
					<SimulationButton>Continuer</SimulationButton>
				</Link>
			</>
		</SimulationLayout>
	);
};

export default SimulationConditionsContent;
