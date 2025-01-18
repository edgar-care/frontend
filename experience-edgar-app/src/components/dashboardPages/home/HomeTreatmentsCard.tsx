import { Box, Button, HStack, Icon, Skeleton, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';

import TreatmentCard from 'components/dashboardPages/treatments/TreatmentCard';

import { useGetPatientMedicalFolderQuery } from 'services/request/medical';

import type { HealthIssuesType } from 'types/dashboard/medical/HealthIssueType';

import WarningIcon from 'assets/icons/WarningIcon';

const HomeTreatmentsCard = (): JSX.Element => {
	const { data: medicalInfo, isLoading } = useGetPatientMedicalFolderQuery();

	const healthIssuesWithActiveTreatments: HealthIssuesType[] =
		medicalInfo?.healthIssues
			.map((healthIssue) => ({
				...healthIssue,
				treatments: healthIssue.treatments.filter(
					(treatment) => !treatment.endDate || new Date(treatment.endDate) > new Date(),
				),
			}))
			.filter((healthIssue) => healthIssue.treatments.length > 0) ?? [];

	return (
		<VStack w="100%" bg="white" borderRadius="16px" p="16px" border="2px" borderColor="blue.200" align="start">
			<Text size="boldXl">Mes traitements en cours</Text>
			<Box w="100%" h="2px" bg="blue.700" />
			{healthIssuesWithActiveTreatments.length > 0 ? (
				<Skeleton isLoaded={!isLoading} w="100%">
					<VStack w="100%" align="start">
						{!isLoading &&
							healthIssuesWithActiveTreatments.map((healthIssue) =>
								healthIssue.treatments.slice(0, 5).map((treatment) => (
									<VStack w="100%" key={treatment.id}>
										<TreatmentCard treatment={treatment} healthIssueName={healthIssue.name} />
									</VStack>
								)),
							)}
						<Link href="/dashboard/treatments">
							<Text textDecoration="underline">Voir plus de traitements</Text>
						</Link>
					</VStack>
				</Skeleton>
			) : (
				<VStack
					w="100%"
					borderRadius="16px"
					border="2px"
					borderColor="orange.300"
					bg="orange.100"
					p="8px 16px"
					spacing="8px"
				>
					<HStack spacing="16px" w="100%">
						<Icon as={WarningIcon} w="32px" h="32px" color="orange.600" />
						<Text color="orange.600" size="boldMd">
							Vous n’avez pas encore enregistré de traitements
						</Text>
					</HStack>
					<Box w="100%">
						<Link href="/dashboard/treatments">
							<Button variant="secondary" w="100%">
								Ajouter un traitement
							</Button>
						</Link>
					</Box>
				</VStack>
			)}
		</VStack>
	);
};

export default HomeTreatmentsCard;
