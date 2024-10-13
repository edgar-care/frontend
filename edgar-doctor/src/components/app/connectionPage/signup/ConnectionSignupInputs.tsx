import { useState } from 'react';
import { Button, VStack, useToast } from '@chakra-ui/react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import ConnectionSignupRegister from 'components/app/connectionPage/signup/ConnectionSignupRegister';
import ConnectionSignupInfos from 'components/app/connectionPage/signup/ConnectionSignupInfos';

import { useRegisterMutation } from 'services/request/account';

import type { RegisterTypeDTO } from 'store/types/account.type';

const ConnectionSignupInputs = (): JSX.Element => {
	const [triggerRegister] = useRegisterMutation();
	const {
		handleSubmit,
		formState: { errors },
		register,
	} = useForm<RegisterTypeDTO>({ mode: 'onChange', defaultValues: {} });

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
				zipCode: data.address.zipCode,
				country: data.address.country,
			},
		})
			.unwrap()
			.then((token) => {
				toast({ title: 'Inscription réussie', status: 'success' });
				localStorage.setItem('token', token);
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
