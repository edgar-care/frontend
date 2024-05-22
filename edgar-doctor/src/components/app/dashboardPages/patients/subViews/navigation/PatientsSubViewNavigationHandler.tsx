import { type Dispatch, type SetStateAction } from 'react';
import {
	Box,
	Button,
	HStack,
	Icon,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
	Text,
	useBreakpointValue,
	useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import PatientsSubViewNavigation from 'components/app/dashboardPages/patients/subViews/navigation/PatientsSubViewNavigation';
import DeletePatientHandler from 'components/app/dashboardPages/patients/subViews/deletePatient/DeletePatientHandler';

import { type PatientType } from 'types/app/dashboard/patients/PatientType';
import { type PatientsSubViewNavigationHandlerType } from 'types/app/dashboard/patients/navigation/PatientsSubViewNavigationHandlerType';

import TrashIcon from 'assets/icons/TrashIcon';
import SmallLeftArrowIcon from 'assets/icons/Arrow/SmallLeftArrowIcon';

const PatientsSubViewNavigationHandler = ({
	navigationHandler,
	selectedPatient,
	navigationPath,
	setNavigationPath,
	setSelectedPatientId,
}: {
	navigationHandler: PatientsSubViewNavigationHandlerType;
	selectedPatient: PatientType;
	navigationPath: string;
	setNavigationPath: Dispatch<SetStateAction<string>>;
	setSelectedPatientId: Dispatch<SetStateAction<string>>;
}): JSX.Element => {
	const isMobile = useBreakpointValue({ base: true, xl: false });
	const isReturnButtonDisplayed = useBreakpointValue({ base: true, md: false });

	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			{isMobile ? (
				<HStack w="100%" justify="space-between" bg="blue.700" borderRadius="12px" p="2px 4px">
					{isReturnButtonDisplayed && (
						<Box as="span" px="8px">
							<Button variant="fullGhost" onClick={() => setSelectedPatientId('')}>
								<HStack>
									<Icon as={SmallLeftArrowIcon} w="12px" color="white" />
									<Text size="sm" color="white">
										Revenir en arrière
									</Text>
								</HStack>
							</Button>
						</Box>
					)}

					<Menu autoSelect={false}>
						<MenuButton as={Button} p="4px" variant="fullGhost">
							<Icon fontSize="24px" as={HamburgerIcon} color="white" />
						</MenuButton>
						<MenuList px="8px">
							<Text size="lg" w="100%" textAlign="center" textOverflow="ellipsis">
								{selectedPatient.medicalInfos.firstname[0]}. {selectedPatient.medicalInfos.name}
							</Text>
							<MenuDivider />
							{Object.entries(navigationHandler).map(([key, tab]) => (
								<MenuItem
									key={key}
									icon={<Icon as={tab.icon} color={navigationPath === key ? 'white' : 'blue.950'} />}
									bg={navigationPath === key ? 'blue.950' : 'white'}
									borderRadius="8px"
									onClick={() => setNavigationPath(key)}
								>
									<Text
										color={navigationPath === key ? 'white' : 'blue.950'}
										transition="all .3s ease-out"
									>
										{tab.name}
									</Text>
								</MenuItem>
							))}
							<MenuDivider />
							<MenuItem icon={<Icon as={TrashIcon} color="red.500" />} onClick={onOpen}>
								<Text color="red.500">Retirer le patient</Text>
							</MenuItem>
						</MenuList>
					</Menu>
					{!isReturnButtonDisplayed && (
						<>
							<Text color="white">{navigationHandler[navigationPath].name}</Text>
							<Box as="span" w="32px" />
						</>
					)}
				</HStack>
			) : (
				<PatientsSubViewNavigation
					tabs={navigationHandler}
					patient={selectedPatient}
					navigationPath={navigationPath}
					setNavigationPath={setNavigationPath}
					onDeletePatientOpen={onOpen}
				/>
			)}
			<DeletePatientHandler isOpen={isOpen} onClose={onClose} patientId={selectedPatient.id} />
		</>
	);
};

export default PatientsSubViewNavigationHandler;
