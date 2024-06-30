import { useState } from 'react';
import { HStack, VStack } from '@chakra-ui/react';

import AntecedentCard from 'components/dashboardPages/treatments/AntecedentCard';
import AntecedentInfosHandler from 'components/dashboardPages/treatments/AntecedentInfosHandler';

import { type PatientMedicalAntecedentType } from 'types/dashboard/medical/PatientMedicalAntecedentType';

const TreatmentsPastAntecedents = ({ antecedents }: { antecedents: PatientMedicalAntecedentType[] }): JSX.Element => {
	const [selectedAntecedentId, setSelectedAntecedentId] = useState('');

	return (
		<HStack w="100%" spacing="32px" align="start">
			<VStack w="100%" justify="space-between">
				<VStack w="100%" spacing="8px">
					{antecedents.map((antecedent) => (
						<AntecedentCard
							key={antecedent.id}
							antecedent={antecedent}
							manageOnClick={() => setSelectedAntecedentId(antecedent.id)}
						/>
					))}
				</VStack>
			</VStack>
			<AntecedentInfosHandler
				antecedent={antecedents.find((antecedent) => antecedent.id === selectedAntecedentId)}
			/>
		</HStack>
	);
};

export default TreatmentsPastAntecedents;
