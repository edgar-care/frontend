import { useState } from 'react';
import { Button, Skeleton, useDisclosure, VStack } from '@chakra-ui/react';

import PatientDocumentCard from 'components/app/dashboardPages/patients/subViews/documents/PatientDocumentCard';
import Pagination from 'components/navigation/Pagination';
import PatientAddDocumentHandler from 'components/app/dashboardPages/patients/subViews/documents/modals/PatientAddDocumentHandler';

import { type PatientType } from 'types/app/dashboard/patients/PatientType';

import countMaxNumberPage from 'utils/navigation/countMaxNumberPage';
import paginationHandler from 'utils/navigation/paginationHandler';

const PatientsSubViewDocuments = ({ selectedPatient }: { selectedPatient: PatientType | undefined }): JSX.Element => {
	const [pageIndex, setPageIndex] = useState(1);

	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Skeleton isLoaded={selectedPatient !== undefined} w="100%" h="100%" borderRadius="8px">
			{selectedPatient && (
				<VStack w="100%" h="100%" justify="space-between">
					<VStack w="100%" spacing="16px" align="start">
						<Button w={{ base: '100%', md: 'auto' }} onClick={onOpen}>
							Ajouter un document
						</Button>
						<VStack w="100%" spacing="4px">
							{paginationHandler(selectedPatient.documentIds, pageIndex, 6).map((document) => (
								<PatientDocumentCard documentId={document} key={document} />
							))}
						</VStack>
					</VStack>
					{selectedPatient.documentIds.length > 6 && (
						<Pagination
							pageIndex={pageIndex}
							maxPageNumbers={countMaxNumberPage(selectedPatient.documentIds, 6)}
							setPageIndex={setPageIndex}
							variant="secondary"
							size="small"
						/>
					)}
					<PatientAddDocumentHandler isOpen={isOpen} onClose={onClose} patientId={selectedPatient.id} />
				</VStack>
			)}
		</Skeleton>
	);
};

export default PatientsSubViewDocuments;
