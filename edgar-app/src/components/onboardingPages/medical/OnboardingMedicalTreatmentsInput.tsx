import { useState } from 'react';
import { FormLabel, Input, InputGroup, InputRightElement, useToast, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import { type UseFormSetValue, type UseFormWatch } from 'react-hook-form';

import OnboardingMedicalSmallCard from 'components/onboardingPages/medical/OnboardingMedicalSmallCard';

import PlusIcon from 'assets/icons/PlusIcon';

import { type MedicalInfos } from 'types/onboarding/OnboardingInfos';

const OnboardingMedicalTreatmentsInput = ({
	setValue,
	watch,
}: {
	setValue: UseFormSetValue<MedicalInfos>;
	watch: UseFormWatch<MedicalInfos>;
}): JSX.Element => {
	const treatments = watch('treatmentsInProgress') || [];
	const [treatmentInput, setDiseaseInput] = useState('');

	const toast = useToast({ duration: 2000, isClosable: true });

	const checkTreatments = () => {
		if (treatments.includes(treatmentInput)) {
			toast({
				title: 'Traitement déjà renseignée',
				status: 'error',
			});
			return false;
		}
		return true;
	};

	return (
		<VStack spacing="16px" align="start" w="100%">
			<VStack spacing="8px" align="start" w="100%">
				<FormLabel size="boldLg" id="edgar-onboardingMedicalPage-formTreatments-text">
					Vos traitements
				</FormLabel>
				<InputGroup>
					<Input
						placeholder="Renseignez vos traitements ici"
						w="100%"
						maxLength={40}
						value={treatmentInput}
						id="edgar-onboardingMedicalPage-formTreatments-input"
						onChange={(e) => setDiseaseInput(e.target.value.toLowerCase())}
						onKeyDown={(e) => {
							if (e.key !== 'Enter' || !treatmentInput || !checkTreatments()) return;
							setValue('treatmentsInProgress', [...treatments, treatmentInput]);
							setDiseaseInput('');
						}}
					/>
					<InputRightElement>
						<PlusIcon
							color="blue.700"
							w="16px"
							h="16px"
							cursor="pointer"
							transition="all .3s ease-in-out"
							id="edgar-onboardingMedicalPage-formTreatments-addButton-icon"
							onClick={() => {
								if (!treatmentInput || !checkTreatments()) return;
								setValue('treatmentsInProgress', [...treatments, treatmentInput]);
								setDiseaseInput('');
							}}
							_hover={{
								transform: 'rotate(90deg)',
							}}
						/>
					</InputRightElement>
				</InputGroup>
			</VStack>
			{treatments.length !== 0 && (
				<VStack spacing="8px" align="start" w="100%">
					<FormLabel size="boldMd" id="edgar-onboardingMedicalPage-formTreatments-filled-text">
						Vos traitements renseignés :{' '}
					</FormLabel>
					<Wrap>
						{treatments.map((treatment) => (
							<WrapItem key={treatment}>
								<OnboardingMedicalSmallCard
									title={treatment}
									onClick={() =>
										setValue(
											'treatmentsInProgress',
											treatments.filter((d) => d !== treatment),
										)
									}
								/>
							</WrapItem>
						))}
					</Wrap>
				</VStack>
			)}
		</VStack>
	);
};

export default OnboardingMedicalTreatmentsInput;
