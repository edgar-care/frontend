import {
	CircularProgress,
	CircularProgressLabel,
	HStack,
	Stack,
	Text,
	useBreakpointValue,
	VStack,
} from '@chakra-ui/react';

import CustomProgress from 'components/progress/CustomProgress';

import { type DiagnosticSummaryDiseaseType } from 'types/app/dashboard/diagnostics/DiagnosticSummaryType';

const DiagnosticSummarySuggestedDiseasesCard = ({
	fiability,
	suggestedDiseases,
}: {
	fiability: number;
	suggestedDiseases: DiagnosticSummaryDiseaseType[];
}): JSX.Element => {
	const progressColor = (value: number) => (value > 60 ? 'green.700' : value > 30 ? 'orange.600' : 'red.700');
	const progressTrackColor = (value: number) => (value > 60 ? 'green.200' : value > 30 ? 'orange.200' : 'red.200');

	const isMobile = useBreakpointValue({ base: true, sm: false });

	return (
		<VStack w="100%" spacing="4px" align="start">
			<Text size="boldLg">Maladies suggérées</Text>
			<Stack direction={{ base: 'column', sm: 'row' }} spacing={{ base: '8px', sm: '32px' }}>
				<VStack w={{ base: '100%', sm: 'auto' }} align="start">
					<CircularProgress value={fiability} size={85} color={progressColor(fiability)} capIsRound>
						<CircularProgressLabel>
							<VStack spacing="0px">
								<Text size="sm">Fiabilité</Text>
								<Text size="boldLg" lineHeight="16px" color={progressColor(fiability)}>
									{fiability}%
								</Text>
							</VStack>
						</CircularProgressLabel>
					</CircularProgress>
				</VStack>
				<VStack spacing={{ base: '4px', sm: '0px' }} align="start">
					{suggestedDiseases.slice(0, 4).map((disease) => (
						<Stack
							direction={{ base: 'column', sm: 'row' }}
							spacing={{ base: '0px', sm: '16px' }}
							key={disease.name}
						>
							{isMobile && <Text size="boldMd">{disease.name}</Text>}
							<HStack key={disease.name} spacing="8px" w={{ base: '100px', md: '125px' }}>
								<CustomProgress
									h="6px"
									trackColor={progressTrackColor(disease.presence)}
									progressColor={progressColor(disease.presence)}
									value={disease.presence}
								/>
								<Text
									size="boldMd"
									color={progressColor(disease.presence)}
									minW={{ base: 'auto', sm: '30px' }}
								>
									{disease.presence}%
								</Text>
							</HStack>
							{!isMobile && <Text size="boldMd">{disease.name}</Text>}
						</Stack>
					))}
				</VStack>
			</Stack>
		</VStack>
	);
};

export default DiagnosticSummarySuggestedDiseasesCard;
