import { type Dispatch, type SetStateAction } from 'react';
import { Box, Button, Text, VStack } from '@chakra-ui/react';

import PatientsSubViewNavigationTab from 'components/app/dashboardPages/patients/subViews/navigation/PatientsSubViewNavigationTab';

import { type PatientsSubViewNavigationTabType } from 'types/app/dashboard/patients/navigation/PatientsSubViewNavigationTabType';
import { type PatientType } from 'types/app/dashboard/patients/PatientType';

import colors from 'theme/foundations/colors';

const PatientsSubViewNavigation = ({
	patient,
	navigationPath,
	setNavigationPath,
	tabs,
	onDeletePatientOpen,
}: {
	patient: PatientType;
	navigationPath: string;
	setNavigationPath: Dispatch<SetStateAction<string>>;
	tabs: { [key: string]: PatientsSubViewNavigationTabType };
	onDeletePatientOpen: () => void;
}): JSX.Element => (
	<VStack
		h="100%"
		w="100%"
		maxW="200px"
		bg="white"
		// borderRadius of 14px instead of 16px to fix the small space between the navbar container and the overall container
		borderRadius="14px"
		p="16px"
		boxShadow={`0px 0px 0px 2px ${colors.blue[200]}`}
	>
		<Text size="lg" w="100%" textAlign="center" textOverflow="ellipsis">
			{patient.medicalInfos.firstname[0]}. {patient.medicalInfos.name}
		</Text>
		<VStack w="100%" spacing="16px">
			<VStack w="100%" spacing="8px">
				{Object.entries(tabs).map(([key, tab]) => (
					<PatientsSubViewNavigationTab
						tab={{ ...tab, path: key }}
						navigationPath={navigationPath}
						setNavigationPath={setNavigationPath}
						key={key}
					/>
				))}
			</VStack>
			<Box w="100%" h="2px" bg="blue.200" />
			<Button size="customSm" variant="delete" w="100%" onClick={onDeletePatientOpen}>
				Retirer le patient
			</Button>
		</VStack>
	</VStack>
);
export default PatientsSubViewNavigation;
