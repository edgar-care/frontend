import { HStack, Icon, Text, VStack, useDisclosure } from '@chakra-ui/react';

import TreatmentCard from 'components/dashboardPages/treatments/TreatmentCard';

import RightChevronIcon from 'assets/icons/Chevron/RightChevronIcon';
import AntecedentIllustration from 'assets/illustrations/AntecedentIllustration';

import { type PatientMedicalAntecedentType } from 'types/dashboard/medical/PatientMedicalAntecedentType';

const AntecedentCard = ({
	antecedent,
	manageOnClick,
}: {
	antecedent: PatientMedicalAntecedentType;
	manageOnClick: () => void;
}) => {
	const { isOpen: isHover, onOpen: onHoverOpen, onClose: onHoverClose } = useDisclosure();

	return (
		<HStack
			bg="white"
			border="2px solid"
			borderColor="blue.200"
			borderRadius="16px"
			p="8px 16px"
			w="100%"
			justify="space-between"
			onMouseEnter={onHoverOpen}
			onMouseLeave={onHoverClose}
			onClick={() => manageOnClick()}
		>
			<HStack w="100%" spacing="8px">
				<Icon as={AntecedentIllustration} w="32px" h="32px" />
				<VStack w="100%" align="start" spacing="4px">
					<HStack w="100%" spacing="4px">
						<Text size="boldMd">{antecedent.name}</Text>
						{antecedent.stillRelevant && (
							<Text fontSize="12" color="green.700" fontWeight="600" fontStyle="italic">
								en cours
							</Text>
						)}
					</HStack>
					{antecedent.medicines.map((medicine) => (
						<TreatmentCard key={medicine.id} treatment={medicine} />
					))}
				</VStack>
			</HStack>
			<Icon
				as={RightChevronIcon}
				w="8px"
				h="16px"
				transform={isHover ? 'translateX(8px)' : 'translateX(0)'}
				transition="transform 0.2s ease-in-out"
			/>
		</HStack>
	);
};

export default AntecedentCard;
