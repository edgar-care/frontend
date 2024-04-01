import { chakra, Button, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import OnboardingMedicalHealthIssues from 'components/onboardingPages/medical/OnboardingMedicalHealthIssues';

import { useOnboardingContext } from 'contexts/onboarding';

import { type HealthInfos } from 'types/onboarding/OnboardingInfos';

const OnboardingMedicalFields = (): JSX.Element => {
	const { infos: onboardingInfos } = useOnboardingContext();
	const {
		handleSubmit,
		formState: { errors },
		control,
		watch,
	} = useForm<HealthInfos>({ mode: 'onChange', defaultValues: { healthIssues: [] } });

	const onSubmit = handleSubmit((data) => {
		console.log(onboardingInfos, data);
	});

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
