import { chakra, Button, ListItem, Text, UnorderedList, VStack, useDisclosure, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import OnboardingMedicalPrimaryDoctorInput from 'components/app/onboardingPages/medical/OnboardingMedicalPrimaryDoctorInput';
import OnboardingMedicalAllergiesInput from 'components/app/onboardingPages/medical/OnboardingMedicalAllergiesInput';
import OnboardingMedicalDiseasesInput from 'components/app/onboardingPages/medical/OnboardingMedicalDiseasesInput';
import OnboardingMedicalTreatmentsInput from 'components/app/onboardingPages/medical/OnboardingMedicalTreatmentsInput';

import onSubmitMedicalInfos from 'utils/api/onboarding/onSubmitMedicalInfos';

import { type MedicalInfos } from 'types/onboarding/OnboardingInfos';
import OnboardingMedicalWarningHandler from 'components/app/onboardingPages/medical/emptyInfosWarning/OnboardingMedicalWarningHandler';

const OnboardingMedicalFields = (): JSX.Element => {
	const {
		handleSubmit,
		formState: { errors },
		register,
		setValue,
		watch,
	} = useForm<MedicalInfos>({ mode: 'onChange' });
	const { allergies, diseases, treatmentsInProgress } = watch();

	const { isOpen, onOpen, onClose } = useDisclosure();
	const router = useRouter();
	const toast = useToast({ duration: 2000, isClosable: true });

	let isInfosGood = false;

	const onSubmit = handleSubmit((data) => {
		if (
			(!data.allergies ||
				data.allergies.length === 0 ||
				!data.diseases ||
				data.diseases.length === 0 ||
				!data.treatmentsInProgress ||
				data.treatmentsInProgress.length === 0) &&
			!isInfosGood
		) {
			onOpen();
			return;
		}
		onClose();
		onSubmitMedicalInfos(data, router).then((res) => {
			toast({
				title: res.title,
				status: res.status,
			});

			if (res.status === 'success') router.push('/dashboard');
		});
	});

	return (
		<VStack w="100%" h="100%" p={{ base: '16px', sm: '64px' }}>
			<chakra.form
				onSubmit={onSubmit}
				onKeyDown={(e) => {
					if (e.key === 'Enter') e.preventDefault();
				}}
				w="100%"
				maxW={{ base: '500px', '4xl': '100%' }}
			>
				<VStack w="100%" spacing="64px" h="100%" align={{ base: 'center', lg: 'end' }}>
					<VStack w="100%" p={{ base: '0px', '4xl': '64px' }} align={{ base: 'center', lg: 'start' }}>
						<VStack w="100%" spacing="32px" maxW="500px">
							<OnboardingMedicalPrimaryDoctorInput register={register} errors={errors} />
							<OnboardingMedicalAllergiesInput setValue={setValue} watch={watch} />
							<OnboardingMedicalDiseasesInput setValue={setValue} watch={watch} />
							<OnboardingMedicalTreatmentsInput setValue={setValue} watch={watch} />
						</VStack>
					</VStack>
					<Button type="submit" w={{ base: '100%', xl: 'auto' }} id="edgar-onboardingMedicalPage-next-button">
						Valider
					</Button>
				</VStack>
			</chakra.form>
			<OnboardingMedicalWarningHandler
				body={
					<VStack spacing="8px" w="100%" align="start">
						<Text size="boldLg">Les informations suivantes n'ont pas été remplies :</Text>
						<UnorderedList>
							{(!allergies || allergies.length === 0) && (
								<ListItem id="edgar-onboardingMedicalPage-confirmationModalAllergies-text">
									Vos allergies
								</ListItem>
							)}
							{(!diseases || diseases.length === 0) && (
								<ListItem id="edgar-onboardingMedicalPage-confirmationModalDiseases-text">
									Vos maladies
								</ListItem>
							)}
							{(!treatmentsInProgress || treatmentsInProgress.length === 0) && (
								<ListItem id="edgar-onboardingMedicalPage-confirmationModalTreatments-text">
									Vos traitements en cours
								</ListItem>
							)}
						</UnorderedList>
					</VStack>
				}
				isOpen={isOpen}
				onClose={onClose}
				onClick={() => {
					isInfosGood = true;
					void onSubmit();
				}}
			/>
		</VStack>
	);
};

export default OnboardingMedicalFields;
