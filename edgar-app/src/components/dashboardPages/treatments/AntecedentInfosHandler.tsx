import { VStack, Text, HStack, Button, useDisclosure } from '@chakra-ui/react';

import TreatmentDisplayCard from 'components/dashboardPages/treatments/TreatmentDisplayCard';
import DeleteTreatmentHandler from 'components/dashboardPages/treatments/modal/DeleteTreatmentHandler';

import { type PatientMedicalAntecedentType } from 'types/dashboard/medical/PatientMedicalAntecedentType';

const AntecedentInfosHandler = ({
	antecedent,
}: {
	antecedent: PatientMedicalAntecedentType | undefined;
}): JSX.Element => {
	const { isOpen: isOpenDeleteModal, onOpen: onOpenDeleteModal, onClose: onCloseDeleteModal } = useDisclosure();

	return (
		<VStack
			w="100%"
			h="100%"
			maxW={{ base: '100%', '2xl': '400px' }}
			p="16px"
			justify="space-between"
			bg="white"
			borderRadius="16px"
			border="2px solid"
			borderColor="blue.200"
			align="start"
		>
			<VStack spacing="16px" align="start" w="100%">
				<VStack spacing="8px" align="start">
					<Text size="boldMd">Votre sujet de santé est-il toujours en cours ?</Text>
					<HStack spacing="16px">
						<Button size="customSm" variant={antecedent?.stillRelevant ? 'primary' : 'secondary'}>
							Oui
						</Button>
						<Button size="customSm" variant={antecedent?.stillRelevant ? 'secondary' : 'primary'}>
							Non
						</Button>
					</HStack>
				</VStack>
				<VStack spacing="8px" align="start" w="100%">
					<Text size="boldMd">Le nom de vos médicaments</Text>
					{antecedent?.medicines.map((medicine) => (
						<TreatmentDisplayCard key={medicine.id} treatment={medicine} />
					))}
				</VStack>
			</VStack>
			<HStack spacing="16px" w="100%">
				<Button size="customSm" w="100%" variant="secondary">
					Modifier
				</Button>
				<Button size="customSm" w="100%" variant="deleteBordered" onClick={onOpenDeleteModal}>
					Supprimer
				</Button>
			</HStack>
			<DeleteTreatmentHandler
				isOpen={isOpenDeleteModal}
				onClose={onCloseDeleteModal}
				medicineIds={antecedent?.medicines}
			/>
		</VStack>
	);
};

export default AntecedentInfosHandler;
