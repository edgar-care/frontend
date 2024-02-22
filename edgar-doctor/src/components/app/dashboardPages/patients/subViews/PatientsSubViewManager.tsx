import { useState } from 'react';
import { HStack, VStack } from '@chakra-ui/react';

import PatientsSubViewNoPatient from 'components/app/dashboardPages/patients/subViews/PatientsSubViewNoPatient';
import PatientsSubViewNavigation from 'components/app/dashboardPages/patients/subViews/navigation/PatientsSubViewNavigation';

import { type PatientsSubViewNavigationTabType } from 'types/app/dashboard/patients/navigation/PatientsSubViewNavigationTabType';

import CalendarIcon from 'assets/icons/CalendarIcon';
import ChatIcon from 'assets/icons/ChatIcon';
import DocumentIcon from 'assets/icons/DocumentIcon';
import MedicalIcon from 'assets/icons/MedicalIcon';

const PatientsSubViewManager = ({ selectedPatientId }: { selectedPatientId: string }): JSX.Element => {
	const [navigationPath, setNavigationPath] = useState('/medical');
	const navigationHandler: { [key: string]: PatientsSubViewNavigationTabType & { content: JSX.Element } } = {
		'/medical': {
			name: 'Dossier médical',
			content: <>Dossier médical</>,
			icon: MedicalIcon,
			id: '/medical',
		},
		'/documents': {
			name: 'Documents',
			content: <>Documents</>,
			icon: DocumentIcon,
			id: '/documents',
		},
		'/appointments': {
			name: 'Rendez-vous',
			content: <>Rendez-vous</>,
			icon: CalendarIcon,
			id: '/appointments',
		},
		'/chat': {
			name: 'Messagerie',
			content: <>Messagerie</>,
			icon: ChatIcon,
			id: '/chat',
		},
	};

	if (!selectedPatientId) return <PatientsSubViewNoPatient />;

	return (
		<HStack
			w="100%"
			h="100%"
			spacing="0px"
			bg="blue.100"
			border="2px solid"
			borderColor="blue.200"
			borderRadius="16px"
		>
			<PatientsSubViewNavigation
				tabs={navigationHandler}
				patientId={selectedPatientId}
				navigationPath={navigationPath}
				setNavigationPath={setNavigationPath}
			/>
			<VStack w="100%" h="100%" spacing="16px" p="16px">
				{navigationHandler[navigationPath].content}
			</VStack>
		</HStack>
	);
};

export default PatientsSubViewManager;
