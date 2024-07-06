import { HStack, Icon, Text, VStack, useDisclosure } from '@chakra-ui/react';

import TreatmentLabel from 'components/dashboardPages/treatments/TreatmentLabel';

import RightChevronIcon from 'assets/icons/Chevron/RightChevronIcon';
import AntecedentIllustration from 'assets/illustrations/AntecedentIllustration';
import AntecedentPastIllustration from 'assets/illustrations/AntecedentPastIllustration';

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
				<Icon
					as={antecedent.stillRelevant ? AntecedentIllustration : AntecedentPastIllustration}
					w="32px"
					h="32px"
				/>
				<VStack w="100%" align="start" spacing="4px">
					<HStack w="100%" spacing="4px">
						<Text size="boldMd">{antecedent.name}</Text>
						{antecedent.stillRelevant && (
							<Text fontSize="12" color="green.700" fontWeight="600" fontStyle="italic">
								en cours
							</Text>
						)}
					</HStack>
					<HStack w="100%" spacing="8px">
						{antecedent.medicines.map((medicine) => (
							<TreatmentLabel key={medicine.id} treatment={medicine} />
						))}
					</HStack>
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
