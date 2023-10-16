import { Button, FormLabel, HStack, useDisclosure, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import { type Control, Controller, type FieldErrors } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';
import OnboardingPersonalSexInfoHandler from 'components/app/onboardingPages/personal/sexInfos/OnboardingPersonalSexInfoHandler';

import { type PersonalInfos } from 'types/onboarding/OnboardingInfos';

const OnboardingPersonalSexInput = ({
	control,
	errors,
}: {
	control: Control<PersonalInfos>;
	errors: FieldErrors<PersonalInfos>;
}): JSX.Element => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<VStack spacing="8px" align="start" w="100%">
			<HStack>
				<FormLabel size="boldLg" id="edgar-onboardingPersonalPage-formSex-text">
					Votre sexe
				</FormLabel>
				<InfoIcon w="16px" h="16px" color="blue.700" cursor="pointer" onClick={onOpen} />
			</HStack>
			<Controller
				control={control}
				name="sex"
				rules={{ required: true }}
				render={({ field: { value, onChange, ref } }) => (
					<Wrap ref={ref}>
						<WrapItem>
							<Button
								variant={value === 'MALE' ? 'primary' : 'secondary'}
								onClick={() => onChange('MALE')}
								id="edgar-onboardingPersonalPage-sexMale-button"
							>
								Masculin
							</Button>
						</WrapItem>
						<WrapItem>
							<Button
								variant={value === 'FEMALE' ? 'primary' : 'secondary'}
								onClick={() => onChange('FEMALE')}
								id="edgar-onboardingPersonalPage-sexFemale-button"
							>
								Féminin
							</Button>
						</WrapItem>
						<WrapItem>
							<Button
								variant={value === 'OTHER' ? 'primary' : 'secondary'}
								onClick={() => onChange('OTHER')}
								id="edgar-onboardingPersonalPage-sexOther-button"
							>
								Autre
							</Button>
						</WrapItem>
					</Wrap>
				)}
			/>
			{errors.sex?.type === 'required' && (
				<ErrorMessage id="edgar-onboardingPersonalPage-formSexError-text">Ce champ est nécessaire</ErrorMessage>
			)}
			<OnboardingPersonalSexInfoHandler isOpen={isOpen} onClose={onClose} />
		</VStack>
	);
};

export default OnboardingPersonalSexInput;
