import { HStack, Icon, Menu, MenuButton, MenuItem, MenuList, Text, useDisclosure } from '@chakra-ui/react';

import DisplayTreatmentsHandler from 'components/app/dashboardPages/patients/modal/healthIssues/treatments/DisplayTreatmentsHandler';
import DeleteHealthIssueHandler from 'components/app/dashboardPages/patients/modal/healthIssues/DeleteHealthIssueHandler';
import UpdateHealthIssueHandler from 'components/app/dashboardPages/patients/modal/healthIssues/UpdateHealthIssueHandler';

import type { HealthIssuesType } from 'types/app/dashboard/patients/medicalInfos/HealthIssueType';

import TreatmentIcon from 'assets/icons/TreatmentIcon';
import TrashIcon from 'assets/icons/TrashIcon';
import PenIcon from 'assets/icons/PenIcon';
import BandageIcon from 'assets/icons/BandageIcon';
import RightChevronIcon from 'assets/icons/Chevron/RightChevronIcon';

const HealthIssueCard = ({
	healthIssue,
	onUpdate,
	onDelete,
}: {
	healthIssue: HealthIssuesType;
	onUpdate?: (name: string) => void;
	onDelete?: () => void;
}): JSX.Element => {
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

	return (
		<Menu>
			<MenuButton as="button" type="button">
				<HStack
					p="8px 16px"
					spacing="12px"
					bg="blue.50"
					border="2px solid"
					borderColor="blue.200"
					borderRadius="8px"
					id={`edgar-onboardingMedicalPage-healthIssueCard-${healthIssue.name}-container`}
				>
					<HStack>
						<Icon
							as={TreatmentIcon}
							w="16px"
							h="16px"
							color={healthIssue.treatments.length > 0 ? 'blue.700' : 'grey.300'}
							id={`edgar-onboardingMedicalPage-healthIssueCard-moreInfo-${healthIssue.name}-icon`}
						/>
						<Text size="boldLg">{healthIssue.name}</Text>
					</HStack>
					<Icon
						as={RightChevronIcon}
						w="6px"
						id={`edgar-onboardingMedicalPage-healthIssueCard-close-${healthIssue.name}-icon`}
					/>
				</HStack>
			</MenuButton>
			<MenuList>
				{healthIssue.treatments.length > 0 && (
					<MenuItem
						icon={<BandageIcon color="blue.800" w="16px" h="auto" />}
						fontSize="14px"
						fontWeight="500"
						onClick={onOpenDisplayTreatments}
					>
						Consulter les traitements
					</MenuItem>
				)}
				{onUpdate && (
					<MenuItem
						icon={<PenIcon color="blue.800" w="16px" h="auto" />}
						fontSize="14px"
						fontWeight="500"
						onClick={onOpenUpdateTreatments}
					>
						Modifier le sujet de santé
					</MenuItem>
				)}
				{onDelete && (
					<MenuItem
						icon={<TrashIcon color="red.700" w="auto" h="16px" />}
						color="red.700"
						fontSize="14px"
						fontWeight="500"
						onClick={onOpenDeleteTreatments}
					>
						Supprimer le sujet de santé
					</MenuItem>
				)}
			</MenuList>
			<DisplayTreatmentsHandler
				isOpen={isOpenDisplayTreatments}
				onClose={onCloseDisplayTreatments}
				medicalAntecedentName={healthIssue.name}
				treatments={healthIssue.treatments}
			/>
			{onUpdate && (
				<UpdateHealthIssueHandler
					isOpen={isOpenUpdateTreatments}
					onClose={onCloseUpdateTreatments}
					healthIssue={healthIssue}
					onClick={onUpdate}
				/>
			)}
			{onDelete && (
				<DeleteHealthIssueHandler
					isOpen={isOpenDeleteTreatments}
					onClose={onCloseDeleteTreatments}
					healthIssue={healthIssue}
					onClick={onDelete}
				/>
			)}
		</Menu>
	);
};

export default HealthIssueCard;
