'use client';

import { useState } from 'react';
import {
	Button,
	HStack,
	Icon,
	Input,
	InputGroup,
	InputRightElement,
	Stack,
	Text,
	useDisclosure,
	useToast,
	VStack,
} from '@chakra-ui/react';

import DashboardPageBanner from 'components/dashboardPages/DashboardPageBanner';
import AddTreatmentHandler from 'components/dashboardPages/treatments/AddTreatmentHandler';
import TreatmentCard from 'components/dashboardPages/treatments/TreatmentCard';

import { useGetPatientMedicalFolderQuery } from 'services/request/medical';
import { useAddTreatmentMutation } from 'services/request/treatments';

import type { HealthIssuesType } from 'types/dashboard/medical/HealthIssueType';
import type { TreatmentType } from 'types/dashboard/treatments/TreatmentType';

import SearchIcon from 'assets/icons/SearchIcon';
import PlusIcon from 'assets/icons/PlusIcon';

const TreatmentsPageContent = (): JSX.Element => {
	const { data: medicalInfo } = useGetPatientMedicalFolderQuery();
	const [triggerAddTreatment] = useAddTreatmentMutation();

	const [searchText, setSearchText] = useState('');
	const [displayOldTreatments, setDisplayOldTreatments] = useState(false);

	const { isOpen: isOpenAddTreatment, onOpen: onOpenAddTreatment, onClose: onCloseAddTreatment } = useDisclosure();

	const toast = useToast({ duration: 3000, isClosable: true });

	const healthIssuesWithActiveTreatments: HealthIssuesType[] =
		medicalInfo?.healthIssues
			.map((healthIssue) => ({
				...healthIssue,
				treatments: healthIssue.treatments.filter(
					(treatment) => !treatment.endDate || new Date(treatment.endDate) > new Date(),
				),
			}))
			.filter((healthIssue) => healthIssue.treatments.length > 0) ?? [];

	const healthIssuesWithPastTreatments: HealthIssuesType[] =
		medicalInfo?.healthIssues
			.map((healthIssue) => ({
				...healthIssue,
				treatments: healthIssue.treatments.filter(
					(treatment) => treatment.endDate && new Date(treatment.endDate) < new Date(),
				),
			}))
			.filter((healthIssue) => healthIssue.treatments.length > 0) ?? [];

	const onSubmit = (data: TreatmentType) => {
		if (data.medicalAntecedentId)
			triggerAddTreatment({
				healthIssueId: data.medicalAntecedentId,
				startDate: data.startDate,
				endDate: data.endDate,
				medicines: data.medicines,
			})
				.unwrap()
				.then(() => toast({ title: 'Traitement ajouté', status: 'success' }))
				.catch(() => toast({ title: "Erreur lors de l'ajout du traitement", status: 'error' }));
	};

	return (
		<VStack w="100%" spacing="32px">
			<DashboardPageBanner
				title="Mes traitements"
				subTitle="Retrouvez tous vos traitements en cours et passés."
			/>
			<VStack w="100%" spacing="16px">
				<Stack direction={{ base: 'column', md: 'row' }} w="100%" spacing="16px">
					<Button
						whiteSpace="nowrap"
						w={{ base: '100%', md: 'auto' }}
						onClick={onOpenAddTreatment}
						id="edgar-dashboardTreatmentsPage-addTreatment-button"
					>
						Ajouter un traitement
					</Button>
					<InputGroup w="100%">
						<Input
							placeholder="Rechercher par nom de maladie ou de traitement"
							value={searchText}
							onChange={(e) => setSearchText(e.target.value)}
						/>
						<InputRightElement>
							<Icon as={SearchIcon} w="16px" h="16px" />
						</InputRightElement>
					</InputGroup>
				</Stack>
				<Stack direction={{ base: 'column', md: 'row' }} w="100%" spacing="16px" align="start">
					{/* <TreatmentsCalendar treatments={treatments} /> */}
					<HStack w="100%" align="start" h="100%">
						<VStack w="100%" spacing="16px" h="100%">
							<VStack w="100%" spacing="8px" h="100%">
								{healthIssuesWithActiveTreatments
									.filter((healthIssue) =>
										healthIssue.name.toLowerCase().includes(searchText.toLowerCase()),
									)
									.map((healthIssue) =>
										healthIssue.treatments.map((treatment) => (
											<VStack w="100%" key={treatment.id}>
												<TreatmentCard
													treatment={treatment}
													healthIssueName={healthIssue.name}
												/>
											</VStack>
										)),
									)}
								{displayOldTreatments &&
									healthIssuesWithPastTreatments
										.filter((healthIssue) =>
											healthIssue.name.toLowerCase().includes(searchText.toLowerCase()),
										)
										.map((healthIssue) =>
											healthIssue.treatments.map((treatment) => (
												<VStack w="100%" key={treatment.id}>
													<TreatmentCard
														treatment={treatment}
														healthIssueName={healthIssue.name}
													/>
												</VStack>
											)),
										)}
							</VStack>
							{!displayOldTreatments && healthIssuesWithPastTreatments.length > 0 && (
								<HStack spacing="12px" cursor="pointer" onClick={() => setDisplayOldTreatments(true)}>
									<Text>Voir les anciens traitements</Text>
									<Icon as={PlusIcon} w="12px" />
								</HStack>
							)}
						</VStack>
					</HStack>
				</Stack>
			</VStack>
			<AddTreatmentHandler
				isOpen={isOpenAddTreatment}
				onClose={onCloseAddTreatment}
				onChange={(data: unknown) => onSubmit((data as TreatmentType[])[0])}
				treatments={[]}
				hasHealthIssueSearch={true}
				healthIssues={medicalInfo?.healthIssues ?? []}
			/>
		</VStack>
	);
};

export default TreatmentsPageContent;
