'use client';

import { useEffect, useState } from 'react';
import { Stack, Text, VStack } from '@chakra-ui/react';

import ColorText from 'components/GradientText';
import SimulationPage from 'components/pages/simulation/SimulationPage';
import DoctorCard from 'components/simulationPage/DoctorCard';

import { DoctorType } from 'types/simulationPage/DoctorType';

const Doctor = (): JSX.Element => {
	const [doctorList, setDoctorList] = useState<DoctorType[]>([]);
	const [selectedDoctor, setSelectedDoctor] = useState<string>('');
	console.log(selectedDoctor);

	useEffect(() => {
		setDoctorList([
			{ id: '1', name: 'Doctor A.', position: 'A 2km de chez vous' },
			{ id: '2', name: 'Doctor B.', position: 'A 2km de chez vous' },
			{ id: '3', name: 'Doctor C.', position: 'A 2km de chez vous' },
		]);
	}, []);

	return (
		<SimulationPage>
			<VStack>
				<Stack spacing="64px">
					<Stack spacing="32px">
						<Text size={{ base: 'boldXl', sm: '2xl' }}>
							Merci pour cet <ColorText textValue="échange" />
						</Text>
						<Text size={{ base: 'boldXl', sm: '2xl' }}>
							Nous avons besoin d'un médecin, pour examiner votre analyse :
						</Text>
					</Stack>
					<VStack
						overflowY="auto"
						w="100%"
						h="400px"
						spacing="16px"
						px={{ base: '0px', sm: '16px' }}
						sx={{
							'::-webkit-scrollbar': {
								width: '4px',
							},
							'::-webkit-scrollbar-track': {
								background: '#F1F1F1',
							},
							'::-webkit-scrollbar-thumb': {
								background: '#CCC',
							},
							'::-webkit-scrollbar-thumb:hover': {
								background: '#888',
							},
							scrollbarWidth: 'thin',
							scrollbarColor: '#CCC #F1F1F1',
						}}
					>
						{doctorList.map((doctor) => (
							<DoctorCard doc={doctor} setSelectedDoctor={setSelectedDoctor} key={doctor.id} />
						))}
					</VStack>
				</Stack>
			</VStack>
		</SimulationPage>
	);
};

export default Doctor;
