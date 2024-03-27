import { HStack, Icon, Text, VStack } from '@chakra-ui/react';
import { BsCheckCircleFill } from 'react-icons/bs';

import MilestoneDetailsCardType from 'types/productPage/MilestoneDetailsCardType';

const MilestoneDetailsCard = ({ milestone }: { milestone: MilestoneDetailsCardType }): JSX.Element => (
	<VStack
		bg={milestone.type === 'previous' ? 'green.600' : 'blue.700'}
		spacing={{ base: '16px', lg: '32px' }}
		p="32px"
		borderRadius="16px"
		w="100%"
		minW={{ base: '100%', smd: '300px', '2xl': '500px', '4xl': 'auto' }}
	>
		<VStack spacing="4px" w="100%">
			<Text
				id={`edgar-productPage-productMilestones-${milestone.id}-text`}
				color="white"
				size={{ base: 'boldXl', lg: 'bold2xl' }}
				textAlign="center"
			>
				{milestone.date}
			</Text>
			<VStack spacing="0px" h={{ base: 'auto', smd: '60px' }}>
				<Text
					size={{ base: 'boldXl', lg: 'bold2xl' }}
					color="white"
					fontWeight="600"
					textAlign="center"
					id={`edgar-productPage-milestoneDetails-${milestone.id}-title-text`}
				>
					{milestone.title}
				</Text>
				{milestone.type === 'current' && (
					<Text
						size="boldLg"
						color="white"
						id={`edgar-productPage-milestoneDetails-${milestone.id}-subTitle-text`}
					>
						En cours
					</Text>
				)}
			</VStack>
		</VStack>
		<VStack w="100%" spacing="16px">
			{milestone.elements.map((element) => (
				<HStack w="100%" spacing={{ base: '16px', lg: '32px' }} key={element}>
					<Icon
						as={BsCheckCircleFill}
						w="24px"
						h="24px"
						color={milestone.type === 'previous' ? 'white' : 'grey.300'}
						id={`edgar-productPage-milestoneDetails-${milestone.id}-check-icon`}
					/>
					<Text size={{ base: 'lg', lg: 'xl' }} color="white">
						{element}
					</Text>
				</HStack>
			))}
		</VStack>
	</VStack>
);

export default MilestoneDetailsCard;
