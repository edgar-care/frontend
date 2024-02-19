'use client';

import { Text, HStack, Icon, Box } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import SimulationLayout from 'components/simulationPages/SimulationLayout';

import { useAuthContext } from 'contexts/auth';

import RightCircleArrowIcon from 'assets/icons/Arrow/RightCircleArrowIcon';

const Conditions = (): JSX.Element => {
	const router = useRouter();
	const auth = useAuthContext();

	const handleClick = () => {
		const token = auth.getToken();
		const redirection = token ? 'start' : 'connection';
		router.push(redirection);
	};

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
				<Box w="100%">
					<HStack justify="end" onClick={handleClick} cursor="pointer">
						<Text size="boldXl" color="white">
							Continuer
						</Text>
						<Icon as={RightCircleArrowIcon} w="24px" h="24px" color="white" />
					</HStack>
				</Box>
			</>
		</SimulationLayout>
	);
};

export default Conditions;
