import { HStack, Icon, Menu, MenuButton, MenuItem, MenuList, Text, useDisclosure, VStack } from '@chakra-ui/react';

import MedicineLabel from 'components/dashboardPages/treatments/MedicineLabel';
import DisplayTreatmentHandler from 'components/dashboardPages/treatments/DisplayTreatmentHandler';
import UpdateTreatmentHandler from 'components/dashboardPages/treatments/UpdateTreatmentHandler';
import DeleteTreatmentHandler from 'components/dashboardPages/treatments/DeleteTreatmentHandler';

import type { TreatmentType } from 'types/dashboard/treatments/TreatmentType';

import RightChevronIcon from 'assets/icons/Chevron/RightChevronIcon';
import AntecedentIllustration from 'assets/illustrations/AntecedentIllustration';
import AntecedentPastIllustration from 'assets/illustrations/AntecedentPastIllustration';
import BandageIcon from 'assets/icons/BandageIcon';
import PenIcon from 'assets/icons/PenIcon';
import TrashIcon from 'assets/icons/TrashIcon';

const TreatmentCard = ({ treatment, healthIssueName }: { treatment: TreatmentType; healthIssueName: string }) => {
	const {
		isOpen: isOpenDisplayTreatments,
		onOpen: onOpenDisplayTreatments,
		onClose: onCloseDisplayTreatments,
	} = useDisclosure();
	const {
		isOpen: isOpenUpdateTreatments,
		onOpen: onOpenUpdateTreatments,
		onClose: onCloseUpdateTreatments,
	} = useDisclosure();
	const {
		isOpen: isOpenDeleteTreatments,
		onOpen: onOpenDeleteTreatments,
		onClose: onCloseDeleteTreatments,
	} = useDisclosure();

	const activeTreatment = !treatment.endDate || new Date(treatment.endDate) > new Date();

	return (
		<Menu>
			<MenuButton w="100%" role="group">
				<HStack
					bg="white"
					border="2px solid"
					borderColor="blue.200"
					borderRadius="16px"
					p="8px 16px"
					pr="24px"
					w="100%"
					justify="space-between"
					cursor="pointer"
					transition="all .3s ease-in-out"
					_groupHover={{ pr: '16px' }}
				>
					<HStack w="100%" spacing="8px">
						<Icon
							as={activeTreatment ? AntecedentIllustration : AntecedentPastIllustration}
							w="32px"
							h="32px"
						/>
						<VStack w="100%" align="start" spacing="4px">
							<HStack w="100%" spacing="4px">
								<Text size="boldMd">{healthIssueName}</Text>
								<Text>
									- {new Date(treatment.startDate).toLocaleDateString('fr-FR')}
									{treatment.endDate &&
										` au ${new Date(treatment.endDate).toLocaleDateString('fr-FR')}`}
								</Text>
								{activeTreatment && (
									<Text size="sm" color="green.700" fontWeight="600" fontStyle="italic">
										(en cours)
									</Text>
								)}
							</HStack>
							<HStack w="100%" spacing="8px">
								{treatment.medicines.map((medicine) => (
									<MedicineLabel key={medicine.medicineId} medicineId={medicine.medicineId} />
								))}
							</HStack>
						</VStack>
					</HStack>
					<Icon as={RightChevronIcon} w="8px" h="16px" transition="transform 0.2s ease-in-out" />
				</HStack>
			</MenuButton>
			<MenuList>
				<MenuItem
					icon={<BandageIcon color="blue.800" w="16px" h="auto" />}
					fontSize="14px"
					fontWeight="500"
					onClick={onOpenDisplayTreatments}
				>
					Consulter le traitement
				</MenuItem>
				<MenuItem
					icon={<PenIcon color="blue.800" w="16px" h="auto" />}
					fontSize="14px"
					fontWeight="500"
					onClick={onOpenUpdateTreatments}
				>
					Modifier le traitement
				</MenuItem>
				<MenuItem
					icon={<TrashIcon color="red.700" w="auto" h="16px" />}
					color="red.700"
					fontSize="14px"
					fontWeight="500"
					onClick={onOpenDeleteTreatments}
				>
					Supprimer le traitement
				</MenuItem>
			</MenuList>
			<DisplayTreatmentHandler
				isOpen={isOpenDisplayTreatments}
				onClose={onCloseDisplayTreatments}
				medicalAntecedentName={healthIssueName}
				treatment={treatment}
			/>
			<UpdateTreatmentHandler
				isOpen={isOpenUpdateTreatments}
				onClose={onCloseUpdateTreatments}
				treatment={treatment}
			/>
			<DeleteTreatmentHandler
				isOpen={isOpenDeleteTreatments}
				onClose={onCloseDeleteTreatments}
				treatmentId={treatment.id}
			/>
		</Menu>
	);
};

export default TreatmentCard;
