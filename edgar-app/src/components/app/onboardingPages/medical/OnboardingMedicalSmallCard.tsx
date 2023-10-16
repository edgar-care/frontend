'use client';

import { HStack, Icon, Text } from '@chakra-ui/react';

import CrossIcon from 'assets/icons/CrossIcon';

const OnboardingMedicalSmallCard = ({
	title,
	onClick,
	canBeDeleted = true,
}: {
	title: string;
	onClick: () => void;
	canBeDeleted?: boolean;
}): JSX.Element => (
	<HStack
		spacing="12px"
		p="8px 16px"
		bg="blue.50"
		borderRadius="8px"
		border="1px solid"
		borderColor="blue.200"
		id={`edgar-onboardingMedicalPage-smallCard-${title}`}
	>
		<Text textTransform="capitalize" id={`edgar-onboardingMedicalPage-smallCard-${title}-text`}>
			{title}
		</Text>
		{canBeDeleted && (
			<Icon
				as={CrossIcon}
				onClick={onClick}
				w="12px"
				h="12px"
				cursor="pointer"
				transition="all .3s ease-in-out"
				_hover={{
					transform: 'rotate(90deg)',
				}}
				id={`edgar-onboardingMedicalPage-smallCard-${title}-icon`}
			/>
		)}
	</HStack>
);

export default OnboardingMedicalSmallCard;
