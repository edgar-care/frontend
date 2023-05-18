import { HStack, Icon, Text, VStack } from '@chakra-ui/react';
import { BsCheckCircleFill } from 'react-icons/bs';

import type MilestoneDetailsCardType from 'types/productPage/MilestoneDetailsCardType';

const MilestoneDetailsCard = ({ title, elements, type, id }: MilestoneDetailsCardType): JSX.Element => (
	<VStack
		bg={type === 'previous' ? 'green.600' : 'blue.700'}
		spacing="32px"
		p="32px"
		borderRadius="16px"
		w={{ base: '100%', smd: '300px', lg: '360px' }}
		h={{ base: '100%', smd: '490px' }}
	>
		<VStack spacing="0px" h="60px">
			<Text
				size={{ base: 'boldXl', lg: 'bold2xl' }}
				color="white"
				fontWeight="600"
				textAlign="center"
				id={`edgar-productPage-milestoneDetails-${id}-title-text`}
			>
				{title}
			</Text>
			{type === 'current' && (
				<Text size="boldLg" color="white" id={`edgar-productPage-milestoneDetails-${id}-subTitle-text`}>
					En cours
				</Text>
			)}
		</VStack>
		<VStack w="100%" spacing="16px">
			{elements.map((element) => (
				<HStack justify="space-between" w="100%">
					<Text size={{ base: 'lg', lg: 'xl' }} color="white" maxW="250px">
						{element}
					</Text>
					<Icon
						as={BsCheckCircleFill}
						w="24px"
						h="24px"
						color={type === 'previous' ? 'white' : 'grey.300'}
						id={`edgar-productPage-milestoneDetails-${id}-check-icon`}
					/>
				</HStack>
			))}
		</VStack>
	</VStack>
);

export default MilestoneDetailsCard;
