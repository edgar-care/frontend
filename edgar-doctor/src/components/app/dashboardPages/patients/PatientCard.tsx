import React from 'react';
import { Box, HStack, VStack, Text, Button } from '@chakra-ui/react';
// import { useDisclosure } from '@chakra-ui/react';

import { PatientType } from 'types/dashboard/patients/PatientType';

const PatientCard = ({ patient }: { patient: PatientType }) => (
	// const { isOpen: isOpenDeleteModal, onOpen: onOpenDeleteModal, onClose: onCloseDeleteModal } = useDisclosure();
	// const { isOpen: isOpenUpdateModal, onOpen: onOpenUpdateModal, onClose: onCloseUpdateModal } = useDisclosure();
	// const { isOpen: isOpenViewModal, onOpen: onOpenViewModal, onClose: onCloseViewModal } = useDisclosure();

	<>
		<HStack
			bg="white"
			border="2px solid"
			borderColor="blue.200"
			borderRadius="8px"
			p="12px"
			w="100%"
			justify="space-between"
		>
			<HStack w="100%" spacing="8px">
				<Box bg="green.500" h="42px" w="4px" borderRadius="4px" />
				<VStack w="100%" alignItems="start" spacing="0">
					<HStack>
						<Text size="boldLg">{patient.name}</Text>
						<Text size="md">{new Date(patient.date).toLocaleDateString('fr-FR')}</Text>
					</HStack>

					<Text size="sm">Médecin traitant: {patient.doctor}</Text>
				</VStack>
			</HStack>
			<HStack>
				<Button size="customSm" variant="delete">
					Supprimer
				</Button>
				<Button size="customSm" variant="secondary">
					Modifier
				</Button>
				<Button size="customSm" variant="primary">
					Consulter
				</Button>
			</HStack>
		</HStack>
	</>
);
export default PatientCard;
