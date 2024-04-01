'use client';

import { Button, VStack, chakra, Stack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { type PersonalInfos } from 'types/onboarding/OnboardingInfos';

import { useOnboardingContext } from 'contexts/onboarding';

import OnboardingPersonalHasAntecedentsInput from './OnboardingPersonalHasAntecedentsInput';
import OnboardingPersonalPrimaryDoctorInput from './OnboardingPersonalPrimaryDoctorInput';
import OnboardingPersonalFirstnameInput from './OnboardingPersonalFirstnameInput';
import OnboardingPersonalNameInput from './OnboardingPersonalNameInput';
import OnboardingPersonalBirthdateInput from './OnboardingPersonalBirthdateInput';
import OnboardingPersonalSexInput from './OnboardingPersonalSexInput';
import OnboardingPersonalSizeInput from './OnboardingPersonalSizeInput';
import OnboardingPersonalWeightInput from './OnboardingPersonalWeightInput';

const OnboardingPersonalFields = (): JSX.Element => {
	const { infos: onboardingInfos, setInfos: setOnboardingInfos } = useOnboardingContext();
	const {
		handleSubmit,
		formState: { errors },
		register,
		control,
		watch,
	} = useForm<PersonalInfos>({
		mode: 'onChange',
		defaultValues: onboardingInfos,
	});

	const router = useRouter();

	const onSubmit = handleSubmit((data) => {
		if (data.hasMedicalAntecedents) {
			setOnboardingInfos(data);
			router.push('/onboarding/medical');
		}
		// TODO: call backend to push data
	});

	return (
		<VStack w="100%" h="100%">
			<chakra.form onSubmit={onSubmit} w="100%" h="100%">
				<VStack
					w="100%"
					spacing="16px"
					h="100%"
					align={{ base: 'center', lg: 'end' }}
					justify="space-between"
					p={{ base: '16px', ssm: '32px', smd: '32px 64px', lg: '64px' }}
					sx={{
						'::-webkit-scrollbar': {
							width: '6px',
						},
						'::-webkit-scrollbar-track': {
							background: 'grey.100',
							borderRadius: '8px',
							marginTop: '64px',
							marginBottom: '64px',
						},
						'::-webkit-scrollbar-thumb': {
							background: 'grey.200',
							borderRadius: '8px',
						},
						'::-webkit-scrollbar-thumb:hover': {
							background: 'grey.300',
						},
					}}
				>
					<VStack w="100%" align={{ base: 'center', lg: 'start' }}>
						<VStack w="100%" spacing="16px">
							<OnboardingPersonalFirstnameInput register={register} errors={errors} />
							<OnboardingPersonalNameInput register={register} errors={errors} />
							<OnboardingPersonalBirthdateInput register={register} errors={errors} />
							<OnboardingPersonalSexInput control={control} errors={errors} />
							<Stack
								direction={{ base: 'column', smd: 'row', lg: 'column', '3xl': 'row' }}
								w="100%"
								spacing="32px"
								pb={errors.size || errors.weight ? '0px' : '16px'}
								align="start"
							>
								<OnboardingPersonalSizeInput register={register} errors={errors} />
								<OnboardingPersonalWeightInput register={register} errors={errors} />
							</Stack>
							<OnboardingPersonalPrimaryDoctorInput control={control} errors={errors} />
							<OnboardingPersonalHasAntecedentsInput control={control} errors={errors} />
						</VStack>
					</VStack>
					<Button
						type="submit"
						variant={watch('hasMedicalAntecedents') ? 'primary' : 'validate'}
						w={{ base: '100%', xl: 'auto' }}
						id="edgar-onboardingPersonalPage-next-button"
					>
						{watch('hasMedicalAntecedents') ? 'Continuer' : 'Confirmer'}
					</Button>
				</VStack>
			</chakra.form>
		</VStack>
	);
};

export default OnboardingPersonalFields;
