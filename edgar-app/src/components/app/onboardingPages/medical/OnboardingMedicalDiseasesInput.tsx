import { useState } from 'react';
import { FormLabel, Input, InputGroup, InputRightElement, useToast, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import { type UseFormSetValue, type UseFormWatch } from 'react-hook-form';

import OnboardingMedicalSmallCard from 'components/app/onboardingPages/medical/OnboardingMedicalSmallCard';

import PlusIcon from 'assets/icons/PlusIcon';

import { type MedicalInfos } from 'types/onboarding/OnboardingInfos';

const OnboardingMedicalDiseasesInput = ({
	setValue,
	watch,
}: {
	setValue: UseFormSetValue<MedicalInfos>;
	watch: UseFormWatch<MedicalInfos>;
}): JSX.Element => {
	const diseases = watch('diseases') || [];
	const [diseaseInput, setDiseaseInput] = useState('');

	const toast = useToast({ duration: 2000, isClosable: true });

	const checkDiseases = () => {
		if (diseases.includes(diseaseInput)) {
			toast({
				title: 'Maladie déjà renseignée',
				status: 'error',
			});
			return false;
		}
		return true;
	};

	return (
		<VStack spacing="16px" align="start" w="100%">
			<VStack spacing="8px" align="start" w="100%">
				<FormLabel size="boldLg" id="edgar-onboardingMedicalPage-formDiseases-text">
					Vos maladies
				</FormLabel>
				<InputGroup>
					<Input
						placeholder="Renseignez vos maladies ici"
						w="100%"
						maxLength={40}
						value={diseaseInput}
						id="edgar-onboardingMedicalPage-formDiseases-input"
						onChange={(e) => setDiseaseInput(e.target.value.toLowerCase())}
						onKeyDown={(e) => {
							if (e.key !== 'Enter' || !diseaseInput || !checkDiseases()) return;
							setValue('diseases', [...diseases, diseaseInput]);
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
							id="edgar-onboardingMedicalPage-formDiseases-addButton-icon"
							onClick={() => {
								if (!diseaseInput || !checkDiseases()) return;
								setValue('diseases', [...diseases, diseaseInput]);
								setDiseaseInput('');
							}}
							_hover={{
								transform: 'rotate(90deg)',
							}}
						/>
					</InputRightElement>
				</InputGroup>
			</VStack>
			{diseases.length !== 0 && (
				<VStack spacing="8px" align="start" w="100%">
					<FormLabel size="boldMd" id="edgar-onboardingMedicalPage-formDiseases-filled-text">
						Vos maladies renseignées :{' '}
					</FormLabel>
					<Wrap>
						{diseases.map((disease) => (
							<WrapItem key={disease}>
								<OnboardingMedicalSmallCard
									title={disease}
									onClick={() =>
										setValue(
											'diseases',
											diseases.filter((d) => d !== disease),
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

export default OnboardingMedicalDiseasesInput;
