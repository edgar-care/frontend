import { useState } from 'react';
import { Button, VStack, useToast } from '@chakra-ui/react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { useRegisterMutation } from 'services/request/account';

import { RegisterType } from 'types/app/login/RegisterType';
import ConnectionSignupRegister from './ConnectionSignupRegister';
import ConnectionSignupInfos from './ConnectionSignupInfos';

const ConnectionSignupInputs = (): JSX.Element => {
	const [triggerRegister] = useRegisterMutation();
	const {
		handleSubmit,
		formState: { errors },
		register,
	} = useForm<RegisterType>({ mode: 'onChange', defaultValues: {} });

	const [step, setStep] = useState(0);

	const router = useRouter();
	const searchParams = useSearchParams();

	const toast = useToast({ duration: 3000, isClosable: true });

	const onSubmit = handleSubmit((data) => {
		triggerRegister({
			email: data.email,
			password: data.password,
			firstname: data.firstname,
			name: data.name,
			address: {
				street: data.address.street,
				city: data.address.city,
				zip_code: data.address.zip_code,
				country: data.address.country,
			},
		})
			.unwrap()
			.then(() => {
				toast({ title: 'Inscription réussie', status: 'success' });
				if (searchParams.get('redirect')) router.push(searchParams.get('redirect')!);
				else router.push('/dashboard');
			})
			.catch(() => {
				toast({ title: 'Une erreur est survenue', status: 'error' });
			});
	});

	return (
		<VStack w="100%" maxW="500px" spacing={step === 0 ? '32px' : '16px'}>
			{step === 0 ? (
				<ConnectionSignupRegister register={register} errors={errors} />
			) : (
				<ConnectionSignupInfos register={register} errors={errors} />
			)}
			<Button
				w="100%"
				size="customLg"
				variant="primary"
				onClick={() => {
					if (step === 0) void setStep(1);
					else void onSubmit();
				}}
			>
				{step === 0 ? 'Continuer' : "S'inscrire"}
			</Button>
		</VStack>
	);
};

export default ConnectionSignupInputs;
