import { useRouter, useSearchParams } from 'next/navigation';
import { chakra, Button, VStack, useToast, useTimeout } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import BetaWarningBanner from 'components/BetaWarningBanner';
import OnboardingMedicalHealthIssues from 'components/onboardingPages/medical/OnboardingMedicalHealthIssues';

import { useOnboardingContext } from 'contexts/onboarding';

import { type HealthInfos } from 'types/onboarding/OnboardingInfos';

import { useAddPatientMedicalFolderMutation } from 'services/request/medical';

const OnboardingMedicalFields = (): JSX.Element => {
	const [triggerAddPatientMedicalFolderMutation] = useAddPatientMedicalFolderMutation();
	const { infos: onboardingInfos } = useOnboardingContext();
	const {
		handleSubmit,
		formState: { errors },
		control,
		watch,
	} = useForm<HealthInfos>({ mode: 'onChange', defaultValues: { healthIssues: [] } });

	const router = useRouter();
	const searchParams = useSearchParams();

	const toast = useToast({ duration: 3000, isClosable: true });

	const onSubmit = handleSubmit((data) => {
		if (onboardingInfos)
			triggerAddPatientMedicalFolderMutation({
				name: onboardingInfos.name,
				firstname: onboardingInfos.firstname,
				birthdate: new Date(onboardingInfos.birthdate).getTime(),
				sex: onboardingInfos.sex,
				height: onboardingInfos.height,
				weight: onboardingInfos.weight,
				primaryDoctorId: onboardingInfos.primaryDoctorId,
				medicalAntecedents: data.healthIssues,
			})
				.unwrap()
				.then(() => {
					toast({ title: 'Votre dossier médical a bien été ajouté', status: 'success' });
					window.localStorage.removeItem('onboardingInfos');
					router.push(searchParams.get('redirect') || '/dashboard');
				})
				.catch(() => {
					toast({ title: 'Une erreur est survenue', status: 'error' });
				});
		else toast({ title: 'Une erreur est survenue', status: 'error' });
	});

	useTimeout(() => {
		if (!onboardingInfos) router.push('/onboarding/personal');
	}, 1000);

	return (
		<VStack w="100%" h="100%">
			<chakra.form
				onSubmit={onSubmit}
				onKeyDown={(e) => {
					if (e.key === 'Enter') e.preventDefault();
				}}
				w="100%"
				h="100%"
			>
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
							<OnboardingMedicalHealthIssues
								control={control}
								errors={errors}
								healthIssues={watch('healthIssues')}
							/>
						</VStack>
					</VStack>
					<Button type="submit" w={{ base: '100%', xl: 'auto' }} id="edgar-onboardingMedicalPage-next-button">
						Valider
					</Button>
				</VStack>
			</chakra.form>
		</VStack>
	);
};

export default OnboardingMedicalFields;
