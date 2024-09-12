import { type Dispatch, type SetStateAction, useState } from 'react';
import { Skeleton, Stack, VStack } from '@chakra-ui/react';

import PatientsSubViewNoPatient from 'components/app/dashboardPages/patients/subViews/PatientsSubViewNoPatient';
import PatientsSubViewNavigationHandler from 'components/app/dashboardPages/patients/subViews/navigation/PatientsSubViewNavigationHandler';
import PatientsSubViewChat from 'components/app/dashboardPages/patients/subViews/chat/PatientsSubViewChat';
import PatientsSubViewAppointments from 'components/app/dashboardPages/patients/subViews/PatientsSubViewAppointments';
import PatientsSubViewDocuments from 'components/app/dashboardPages/patients/subViews/documents/PatientsSubViewDocuments';
import PatientsSubViewMedicalInfo from 'components/app/dashboardPages/patients/subViews/medicalInfo/PatientsSubViewMedicalInfo';
import PatientsSubViewPrescriptions from 'components/app/dashboardPages/patients/subViews/prescriptions/PatientsSubViewPrescriptions';

import { type PatientType } from 'types/app/dashboard/patients/PatientType';
import { type PatientsSubViewNavigationHandlerType } from 'types/app/dashboard/patients/navigation/PatientsSubViewNavigationHandlerType';

import CalendarIcon from 'assets/icons/CalendarIcon';
import ChatIcon from 'assets/icons/ChatIcon';
import DocumentIcon from 'assets/icons/DocumentIcon';
import MedicalIcon from 'assets/icons/MedicalIcon';
import PrescriptionIcon from 'assets/icons/PrescriptionIcon';

const PatientsSubViewManager = ({
	selectedPatient,
	setSelectedPatientId,
}: {
	selectedPatient: PatientType | undefined;
	setSelectedPatientId: Dispatch<SetStateAction<string>>;
}): JSX.Element => {
	const [navigationPath, setNavigationPath] = useState('/medical');

	const navigationHandler: PatientsSubViewNavigationHandlerType = {
		'/medical': {
			name: 'Dossier médical',
			content: (
				<Skeleton isLoaded={selectedPatient !== undefined} w="100%" h="100%" borderRadius="8px">
					{selectedPatient && <PatientsSubViewMedicalInfo patientId={selectedPatient?.id} />}
				</Skeleton>
			),
			icon: MedicalIcon,
			id: '/medical',
		},
		'/documents': {
			name: 'Documents',
			content: <PatientsSubViewDocuments selectedPatient={selectedPatient} />,
			icon: DocumentIcon,
			id: '/documents',
		},
		'/prescriptions': {
			name: 'Ordonnances',
			content: <PatientsSubViewPrescriptions selectedPatient={selectedPatient} />,
			icon: PrescriptionIcon,
			id: '/prescriptions',
		},
		'/appointments': {
			name: 'Rendez-vous',
			content: <PatientsSubViewAppointments selectedPatient={selectedPatient} />,
			icon: CalendarIcon,
			id: '/appointments',
		},
		'/chat': {
			name: 'Messagerie',
			content: <PatientsSubViewChat patientId={selectedPatient?.id} />,
			icon: ChatIcon,
			id: '/chat',
		},
	};

	if (!selectedPatient) return <PatientsSubViewNoPatient />;

	return (
		<Stack
			direction={{ base: 'column', xl: 'row' }}
			p={{ base: '8px', xl: '0px' }}
			w="100%"
			minH="100%"
			spacing={{ base: '8px', xl: '0px' }}
			bg="blue.100"
			border="2px solid"
			borderColor="blue.200"
			borderRadius="16px"
			align="start"
			overflow="hidden"
		>
			<PatientsSubViewNavigationHandler
				navigationHandler={navigationHandler}
				selectedPatient={selectedPatient}
				navigationPath={navigationPath}
				setNavigationPath={setNavigationPath}
				setSelectedPatientId={setSelectedPatientId}
			/>
			<VStack w="100%" h="100%" spacing="16px" p={{ base: '0px', xl: '16px' }} overflowY="hidden">
				{navigationHandler[navigationPath].content}
			</VStack>
		</Stack>
	);
};

export default PatientsSubViewManager;
