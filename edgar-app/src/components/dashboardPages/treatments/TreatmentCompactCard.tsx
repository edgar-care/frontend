import { Checkbox, HStack, Icon, Text, useDisclosure, VStack, Wrap, WrapItem } from '@chakra-ui/react';

import SmallMedicineCard from 'components/dashboardPages/treatments/SmallMedicineCard';
import DisplayTreatmentHandler from 'components/dashboardPages/treatments/DisplayTreatmentHandler';

import type { TreatmentType } from 'types/dashboard/treatments/TreatmentType';

import RightArrowIcon from 'assets/icons/Arrow/RightArrowIcon';
import RightChevronIcon from 'assets/icons/Chevron/RightChevronIcon';

const TreatmentCompactCard = ({
	treatment,
	medicalAntecedentName,
	isDeletable = false,
	onDelete,
}: {
	medicalAntecedentName: string;
	treatment: TreatmentType;
	isDeletable?: boolean;
	onDelete?: () => void;
}): JSX.Element => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<HStack
			bg="blue.50"
			borderRadius="8px"
			border="2px solid"
			borderColor="blue.200"
			p={isDeletable ? '8px' : '8px 12px'}
			w="100%"
			justify="space-between"
		>
			{isDeletable && <Checkbox borderColor="blue.300" onChange={onDelete} />}
			<HStack
				w="100%"
				justify="space-between"
				cursor={isDeletable ? 'auto' : 'pointer'}
				transition="all .3s ease-in-out"
				pr={isDeletable ? '0px' : '4px'}
				_hover={{ pr: '0px' }}
				onClick={() => !isDeletable && onOpen()}
			>
				<VStack w="100%" align="start">
					<HStack>
						<Text>{new Date(treatment.startDate).toLocaleDateString('fr-FR')}</Text>
						{treatment.endDate && (
							<>
								<Icon as={RightArrowIcon} w="14px" h="auto" />
								<Text>{new Date(treatment.endDate).toLocaleDateString('fr-FR')}</Text>
							</>
						)}
					</HStack>
					<Wrap w="100%">
						{treatment.medicines.map((medicine) => (
							<WrapItem key={medicine.medicineId}>
								<SmallMedicineCard medicine={medicine} />
							</WrapItem>
						))}
					</Wrap>
				</VStack>
				{!isDeletable && <Icon as={RightChevronIcon} w="8px" h="auto" />}
			</HStack>
			<DisplayTreatmentHandler
				isOpen={isOpen}
				onClose={onClose}
				medicalAntecedentName={medicalAntecedentName}
				treatment={treatment}
			/>
		</HStack>
	);
};

export default TreatmentCompactCard;
