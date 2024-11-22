import { Button, VStack } from '@chakra-ui/react';

import ModalHandler from 'components/modals/ModalHandler';

import TreatmentCompactCard from 'components/app/dashboardPages/patients/modal/healthIssues/treatments/TreatmentCompactCard';

import type { TreatmentType } from 'types/app/dashboard/patients/medicalInfos/HealthIssueType';

import AddHealthIssueIllustration from 'assets/illustrations/AddHealthIssueIllustration';

const DisplayTreatmentsHandler = ({
	isOpen,
	onClose,
	medicalAntecedentName,
	treatments,
}: {
	isOpen: boolean;
	onClose: () => void;
	medicalAntecedentName: string;
	treatments: TreatmentType[];
}): JSX.Element => (
	<ModalHandler
		isOpen={isOpen}
		onClose={onClose}
		size="3xl"
		headerTitle="Informations de votre sujet de santé"
		headerSubtitle={`Vos traitements pour votre sujet de santé: ${medicalAntecedentName}`}
		headerIcon={AddHealthIssueIllustration}
		bodyContent={
			<VStack w="100%" spacing="12px">
				{treatments.map((treatment, index) => (
					<TreatmentCompactCard
						treatment={treatment}
						medicalAntecedentName={medicalAntecedentName}
						key={index}
					/>
				))}
			</VStack>
		}
		footerPrimaryButton={
			<Button w="100%" variant="secondary" onClick={onClose}>
				Revenir en arrière
			</Button>
		}
	/>
);
export default DisplayTreatmentsHandler;
