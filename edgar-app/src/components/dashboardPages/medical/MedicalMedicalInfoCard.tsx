import { Box, Button, HStack, Text, useDisclosure, useToast, VStack, Wrap, WrapItem } from '@chakra-ui/react';

import HealthIssueCard from 'components/dashboardPages/medical/healthIssue/HealthIssueCard';
import SelectHealthIssueHandler from 'components/onboardingPages/medical/healthIssues/SelectHealthIssueHandler';

import { useAddHealthIssueMutation } from 'services/request/medical';

import type { HealthInfos } from 'types/onboarding/OnboardingInfos';
import type { HealthIssuesType } from 'types/dashboard/medical/HealthIssueType';

const MedicalMedicalInfoCard = ({ medicalInfos }: { medicalInfos: HealthInfos }): JSX.Element => {
	const [triggerAddHealthIssue] = useAddHealthIssueMutation();
	const {
		isOpen: isOpenAddHealthIssue,
		onOpen: onOpenAddHealthIssue,
		onClose: onCloseAddHealthIssue,
	} = useDisclosure();

	const toast = useToast({ duration: 3000, isClosable: true });

	const onSubmit = (data: HealthIssuesType) => {
		triggerAddHealthIssue(data)
			.unwrap()
			.then(() => toast({ title: 'Sujet de santé ajouté', status: 'success' }))
			.catch(() => toast({ title: "Erreur lors de l'ajout du sujet de santé", status: 'error' }));
	};

	return (
		<HStack
			p="16px"
			w="100%"
			bg="white"
			border="2px solid"
			borderColor="blue.200"
			spacing="4px"
			borderRadius="8px"
			maxW={{ base: '100%', '2xl': '500px' }}
			minW={{ base: '100%', sm: '300px' }}
		>
			<Box as="span" w="4px" alignSelf="stretch" bg="green.500" borderRadius="4px" />
			<VStack pl="8px" w="100%" align="start" spacing={{ base: '8px', lg: '12px' }}>
				<VStack w="100%" spacing="16px">
					<Button w="100%" onClick={onOpenAddHealthIssue}>
						Ajouter un sujet de santé
					</Button>
					<VStack w="100%" align="start">
						<Text
							size={{ base: 'md', lg: 'lg' }}
							id={`edgar-dashboardMedicalPage-healthInfoCard-healthIssues-text`}
						>
							Antécédents médicaux et sujets de santé:
						</Text>
						<Wrap w="100%" gap="8px">
							{medicalInfos.healthIssues.map((healthIssue) => (
								<WrapItem key={healthIssue.id}>
									<HealthIssueCard healthIssue={healthIssue} />
								</WrapItem>
							))}
						</Wrap>
					</VStack>
				</VStack>
			</VStack>
			<SelectHealthIssueHandler
				isOpen={isOpenAddHealthIssue}
				onClose={onCloseAddHealthIssue}
				onChange={(data: unknown) => onSubmit((data as HealthIssuesType[])[0])}
				healthIssues={[]}
			/>
		</HStack>
	);
};

export default MedicalMedicalInfoCard;
