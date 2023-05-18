import { HStack, Text, useBreakpointValue, VStack, Wrap, WrapItem } from '@chakra-ui/react';

import ProductMilestonesCard from './ProductMilestonesCard';

const MilestoneRoadmap = (): JSX.Element => {
	const isMobile = useBreakpointValue({ base: true, '4xl': false });

	return (
		<VStack w="100%" spacing={{ base: '32px', '2xl': '96px' }} align="start" id="milestones">
			<Text size={{ base: '3xl', xl: '6xl' }} id="edgar-homePage-QATitle-text">
				LES MILESTONES D'EDGAR
			</Text>
			{isMobile ? (
				<Wrap spacing={{ base: '48px', smd: '32px' }} justify={{ base: 'center', md: 'start' }} w="100%">
					<WrapItem w={{ base: '100%', smd: 'auto' }}>
						<VStack spacing="16px" w="100%">
							<ProductMilestonesCard variant="blue" label="2022 - Décembre" id="2022-title" />
							<ProductMilestonesCard variant="green" label="Prototypage/ Idéation" id="2022-goal" />
						</VStack>
					</WrapItem>
					<WrapItem w={{ base: '100%', smd: 'auto' }}>
						<VStack spacing="16px" w="100%">
							<ProductMilestonesCard variant="blue" label="2023 - Novembre" id="2023-title" />
							<ProductMilestonesCard variant="blue" label="POC (Proof Of Concept)" id="2023-goal" />
						</VStack>
					</WrapItem>
					<WrapItem w={{ base: '100%', smd: 'auto' }}>
						<VStack spacing="16px" w="100%">
							<ProductMilestonesCard variant="blue" label="2024 - Mai" id="2024-title" />
							<ProductMilestonesCard variant="blue" label="Beta #1" id="2024-goal" />
						</VStack>
					</WrapItem>
					<WrapItem w={{ base: '100%', smd: 'auto' }}>
						<VStack spacing="16px" w="100%">
							<ProductMilestonesCard variant="blue" label="2025 - Mai" id="2025-title" />
							<ProductMilestonesCard variant="blue" label="Beta #2" id="2025-goal" />
						</VStack>
					</WrapItem>
				</Wrap>
			) : (
				<HStack spacing={{ base: '16px', '4xl': '32px' }} justify="space-between" align="start">
					<VStack spacing="32px">
						<ProductMilestonesCard variant="blue" label="2022 - Décembre" id="2022-title" />
						<ProductMilestonesCard variant="green" label="Prototypage/ Idéation" id="2022-goal" />
					</VStack>
					<VStack spacing="32px">
						<ProductMilestonesCard variant="blue" label="2023 - Novembre" id="2023-title" />
						<ProductMilestonesCard variant="empty" label="" id="2023-empty" />
						<ProductMilestonesCard variant="blue" label="POC (Proof Of Concept)" id="2023-goal" />
					</VStack>
					<VStack spacing="32px">
						<ProductMilestonesCard variant="blue" label="2024 - Mai" id="2024-title" />
						<ProductMilestonesCard variant="empty" label="" id="2024-empty1" />
						<ProductMilestonesCard variant="empty" label="" id="2024-empty12" />
						<ProductMilestonesCard variant="blue" label="Beta #1" id="2024-goal" />
					</VStack>
					<VStack spacing="32px">
						<ProductMilestonesCard variant="blue" label="2025 - Mai" id="2025-title" />
						<ProductMilestonesCard variant="empty" label="" id="2025-empty1" />
						<ProductMilestonesCard variant="empty" label="" id="2025-empty2" />
						<ProductMilestonesCard variant="empty" label="" id="2025-empty3" />
						<ProductMilestonesCard variant="blue" label="Beta #2" id="2025-goal" />
					</VStack>
				</HStack>
			)}
		</VStack>
	);
};

export default MilestoneRoadmap;
