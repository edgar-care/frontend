import { VStack, Text, Image } from '@chakra-ui/react';

import AntecedentInfos from 'components/dashboardPages/treatments/AntecedentInfos';

import { type PatientMedicalAntecedentType } from 'types/dashboard/medical/PatientMedicalAntecedentType';

const AntecedentInfosHandler = ({
	antecedent,
}: {
	antecedent: PatientMedicalAntecedentType | undefined;
}): JSX.Element => (
	<>
		{antecedent ? (
			<AntecedentInfos antecedent={antecedent} />
		) : (
			<VStack
				w="100%"
				maxW={{ base: '100%', '2xl': '400px' }}
				p="32px 16px"
				spacing="16px"
				bg="blue.100"
				justify="center"
				borderRadius="16px"
				border="2px solid"
				borderColor="blue.200"
			>
				<Text size="boldLg" textAlign="center">
					Sélectionner une maladie pour consulter ses traitements
				</Text>
				<Image src="/assets/Edgars/edgar-confused.svg" alt="edgar-confused" width={200} height={227} />
			</VStack>
		)}
	</>
);

export default AntecedentInfosHandler;
