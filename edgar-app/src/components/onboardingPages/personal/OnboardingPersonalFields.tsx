'use client';

import { Button, VStack, chakra, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import onSubmitPersonalInfos from 'utils/api/onboarding/onSubmitPersonalInfos';

import { type PersonalInfos } from 'types/onboarding/OnboardingInfos';

import OnboardingPersonalFirstnameInput from './OnboardingPersonalFirstnameInput';
import OnboardingPersonalNameInput from './OnboardingPersonalNameInput';
import OnboardingPersonalBirthdateInput from './OnboardingPersonalBirthdateInput';
import OnboardingPersonalSexInput from './OnboardingPersonalSexInput';
import OnboardingPersonalSizeInput from './OnboardingPersonalSizeInput';
import OnboardingPersonalWeightInput from './OnboardingPersonalWeightInput';

const OnboardingPersonalFields = (): JSX.Element => {
	const {
		handleSubmit,
		formState: { errors },
		register,
		control,
	} = useForm<PersonalInfos>({
		mode: 'onChange',
	});
	const router = useRouter();
	const toast = useToast({ duration: 2000, isClosable: true });

	const onSubmit = handleSubmit((data) => {
		onSubmitPersonalInfos(data, router).then((res) => {
			toast({
				title: res.title,
				status: res.status,
			});

			if (res.status === 'success') router.push('/onboarding/medical');
		});
	});

	return (
		<VStack w="100%" h="100%" p={{ base: '16px', sm: '64px' }}>
			<chakra.form onSubmit={onSubmit} w="100%" maxW={{ base: '500px', '4xl': '100%' }}>
				<VStack w="100%" spacing="64px" h="100%" align={{ base: 'center', lg: 'end' }}>
					<VStack w="100%" p={{ base: '0px', '4xl': '64px' }} align={{ base: 'center', lg: 'start' }}>
						<VStack w="100%" spacing="16px" maxW="500px">
							<OnboardingPersonalFirstnameInput register={register} errors={errors} />
							<OnboardingPersonalNameInput register={register} errors={errors} />
							<OnboardingPersonalBirthdateInput register={register} errors={errors} />
							<OnboardingPersonalSexInput control={control} errors={errors} />
							<OnboardingPersonalSizeInput register={register} errors={errors} />
							<OnboardingPersonalWeightInput register={register} errors={errors} />
						</VStack>
					</VStack>
					<Button
						type="submit"
						w={{ base: '100%', xl: 'auto' }}
						id="edgar-onboardingPersonalPage-next-button"
					>
						Continuer
					</Button>
				</VStack>
			</chakra.form>
		</VStack>
	);
};

export default OnboardingPersonalFields;
