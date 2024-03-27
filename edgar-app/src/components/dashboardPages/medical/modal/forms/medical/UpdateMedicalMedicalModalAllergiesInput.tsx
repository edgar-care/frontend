/*
import { useState } from 'react';
import { FormLabel, Input, InputGroup, InputRightElement, useToast, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import { type UseFormSetValue, type UseFormWatch } from 'react-hook-form';

import OnboardingMedicalSmallCard from 'components/onboardingPages/medical/OnboardingMedicalSmallCard';

import PlusIcon from 'assets/icons/PlusIcon';

import { type PatientMedicalType } from 'types/dashboard/medical/PatientMedicalType';

const UpdateMedicalMedicalModalAllergiesInput = ({
	watch,
	setValue,
}: {
	watch: UseFormWatch<PatientMedicalType>;
	setValue: UseFormSetValue<PatientMedicalType>;
}): JSX.Element => {
	const allergies = watch('allergies') || [];
	const [allergieInput, setAllergieInput] = useState('');

	const toast = useToast({ duration: 2000, isClosable: true });

	const checkAllergies = () => {
		if (allergies.includes(allergieInput)) {
			toast({
				title: 'Allergie déjà renseignée',
				status: 'error',
			});
			return false;
		}
		return true;
	};

	return (
		<VStack spacing="16px" align="start" w="100%">
			<VStack spacing="8px" align="start" w="100%">
				<FormLabel size="boldLg" id="edgar-updateMedicalPersonalModal-formAllergies-text">
					Vos allergies
				</FormLabel>
				<InputGroup>
					<Input
						placeholder="Renseignez vos allergies ici"
						w="100%"
						maxLength={25}
						value={allergieInput}
						id="edgar-updateMedicalPersonalModal-formAllergies-input"
						onChange={(e) => setAllergieInput(e.target.value.toLowerCase())}
						onKeyDown={(e) => {
							if (e.key !== 'Enter' || !allergieInput || !checkAllergies()) return;
							setValue('allergies', [...allergies, allergieInput]);
							setAllergieInput('');
						}}
					/>
					<InputRightElement>
						<PlusIcon
							color="blue.700"
							w="16px"
							h="16px"
							cursor="pointer"
							transition="all .3s ease-in-out"
							id="edgar-updateMedicalPersonalModal-formAllergies-addButton-icon"
							onClick={() => {
								if (!allergieInput || !checkAllergies()) return;
								setValue('allergies', [...allergies, allergieInput]);
								setAllergieInput('');
							}}
							_hover={{
								transform: 'rotate(90deg)',
							}}
						/>
					</InputRightElement>
				</InputGroup>
			</VStack>
			{allergies.length !== 0 && (
				<VStack spacing="8px" align="start" w="100%">
					<FormLabel size="boldMd" id="edgar-updateMedicalPersonalModal-formAllergies-filled-text">
						Vos allergies renseignées :{' '}
					</FormLabel>
					<Wrap>
						{allergies.map((allergie) => (
							<WrapItem key={allergie}>
								<OnboardingMedicalSmallCard
									title={allergie}
									onClick={() =>
										setValue(
											'allergies',
											allergies.filter((a) => a !== allergie),
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

export default UpdateMedicalMedicalModalAllergiesInput;
*/
