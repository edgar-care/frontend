'use client';

import { Button, VStack, chakra, Stack, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useRouter, useSearchParams } from 'next/navigation';

import BetaWarningBanner from 'components/BetaWarningBanner';

import { type PersonalInfos } from 'types/onboarding/OnboardingInfos';

import { useOnboardingContext } from 'contexts/onboarding';

import { useAddPatientMedicalFolderMutation } from 'services/request/medical';

import OnboardingPersonalHasAntecedentsInput from './OnboardingPersonalHasAntecedentsInput';
import OnboardingPersonalPrimaryDoctorInput from './OnboardingPersonalPrimaryDoctorInput';
import OnboardingPersonalFirstnameInput from './OnboardingPersonalFirstnameInput';
import OnboardingPersonalNameInput from './OnboardingPersonalNameInput';
import OnboardingPersonalBirthdateInput from './OnboardingPersonalBirthdateInput';
import OnboardingPersonalSexInput from './OnboardingPersonalSexInput';
import OnboardingPersonalWeightInput from './OnboardingPersonalWeightInput';
import OnboardingPersonalHeightInput from './OnboardingPersonalHeightInput';

const OnboardingPersonalFields = (): JSX.Element => {
	const [triggerAddPatientMedicalFolderMutation] = useAddPatientMedicalFolderMutation();

	const { infos: onboardingInfos, setInfos: setOnboardingInfos } = useOnboardingContext();
	const {
		handleSubmit,
		formState: { errors },
		register,
		control,
		watch,
	} = useForm<PersonalInfos>({
		mode: 'onChange',
		defaultValues: { ...onboardingInfos, birthdate: 0 },
	});

	const router = useRouter();
	const searchParams = useSearchParams();

	const toast = useToast({ duration: 3000, isClosable: true });

	const onSubmit = handleSubmit((data) => {
		const redirect = searchParams.get('redirect');

		if (data.hasMedicalAntecedents) {
			setOnboardingInfos(data);
			router.push(`/onboarding/medical${redirect ? `?redirect=${redirect}` : ''}`);
		} else
			triggerAddPatientMedicalFolderMutation({
				name: data.name,
				firstname: data.firstname,
				birthdate: data.birthdate,
				sex: data.sex,
				height: data.height,
				weight: data.weight,
				primaryDoctorId: data.primaryDoctorId,
				medicalAntecedents: [],
			})
				.unwrap()
				.then(() => {
					toast({ title: 'Votre dossier médical a bien été ajouté', status: 'success' });
					router.push(redirect || '/dashboard');
				})
				.catch(() => {
					toast({ title: 'Une erreur est survenue', status: 'error' });
				});
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
							<BetaWarningBanner />
							<OnboardingPersonalFirstnameInput register={register} errors={errors} />
							<OnboardingPersonalNameInput register={register} errors={errors} />
							<OnboardingPersonalBirthdateInput control={control} errors={errors} />
							<OnboardingPersonalSexInput control={control} errors={errors} />
							<Stack
								direction={{ base: 'column', smd: 'row', lg: 'column', '3xl': 'row' }}
								w="100%"
								spacing="32px"
								pb={errors.height || errors.weight ? '0px' : '16px'}
								align="start"
							>
								<OnboardingPersonalHeightInput register={register} errors={errors} />
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
